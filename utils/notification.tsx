import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (
      await Notifications.getExpoPushTokenAsync({
        // @ts-ignore
        projectId: Constants.expoConfig.extra.eas.projectId,
      })
    ).data;
    console.log(token);
  } else {
    alert("Must use a physical device for Push Notifications");
  }

  return token;
};

export const schedulePushNotification = async (props: any) => {
  const { title, body, data } = props;

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data,
    },
    trigger: { seconds: 2 },
  });
};

export interface NotificationBody {
  testMode: boolean;
  CustomNotificationBody?: React.ComponentType<any>;
}

export const Notification = (props: NotificationBody) => {
  const { testMode, CustomNotificationBody } = props;

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) =>
      setExpoPushToken(token)
    );

    // @ts-ignore
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification: any) => {
        setNotification(notification);
      });

    // @ts-ignore
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        // @ts-ignore
        notificationListener.current
      );
      // @ts-ignore
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (testMode === true && !CustomNotificationBody) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Push Notification Example</Text>
        <Text>Your expo push token:</Text>
        <Text style={styles.token}>{expoPushToken}</Text>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitle}>
            Title:{" "}
            {
              // @ts-ignore
              notification && notification.request.content.title
            }
          </Text>
          <Text style={styles.notificationBody}>
            Body:{" "}
            {
              // @ts-ignore
              notification && notification.request.content.body
            }
          </Text>
          <Text style={styles.notificationData}>
            Data:{" "}
            {
              // @ts-ignore
              notification && JSON.stringify(notification.request.content.data)
            }
          </Text>
        </View>
        <Button
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification({
              title: "You've got mail! 📬",
              body: "Here is the notification body",
              data: { data: "goes here" },
            });
          }}
        />
      </View>
    );
  }

  if (testMode === false && CustomNotificationBody) {
    return <CustomNotificationBody />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  token: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  notificationContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  notificationBody: {
    fontSize: 16,
    marginTop: 10,
  },
  notificationData: {
    fontSize: 16,
    marginTop: 10,
  },
});
