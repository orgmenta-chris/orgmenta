// Manage notifications (/alerts) across all platforms

import { UtilityConstantsMain } from "./constant";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { UtilityPlatformMain } from "./platform";
import { UtilityDeviceMain } from "./device";
import { TypeReactComponent, useReactState, useReactEffect, useReactRef } from "./react";
import * as Notifications from "expo-notifications";
// import Constants from "expo-constants";
// import * as Device from "expo-device";

// HANDLER

export const createNotificationHandler = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};
createNotificationHandler();
// above was converted from:
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

// REGISTER

export const asyncNotificationRegister = async () => {
  let token;
  if (UtilityPlatformMain.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  if (UtilityDeviceMain.isDevice) {
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
    // Learn more about projectId: https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (
      await Notifications.getExpoPushTokenAsync({
        // @ts-ignore
        projectId: UtilityConstantsMain.expoConfig.extra.eas.projectId,
      })
    ).data;
    // console.log(token);
  } else {
    alert("Must use a physical device for Push Notifications");
  }
  return token;
};

// SCHEDULE

export const asyncNotificationSchedule = async (props: any) => {
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

export interface TypeNotificationBody {
  testMode: boolean;
  CustomNotificationBody?: TypeReactComponent;
}

// EXAMPLE

export const ViewNotificationExample = (props: TypeNotificationBody) => {
  const { testMode, CustomNotificationBody } = props;
  const [expoPushToken, setExpoPushToken] = useReactState("");
  const [notification, setNotification] = useReactState(false);
  const notificationListener = useReactRef();
  const responseListener = useReactRef();
  useReactEffect(() => {
    asyncNotificationRegister().then((token: any) => setExpoPushToken(token));
    // @ts-ignore
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification: any) => {
        setNotification(notification);
      });
    // @ts-ignore
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response);
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
      <ViewContainerStatic
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          padding: 16,
        }}
      >
        <ViewTypographyText style={{ fontSize: 24, fontWeight: "bold" }}>
          Push Notification Example
        </ViewTypographyText>
        <ViewTypographyText>Your expo push token:</ViewTypographyText>
        <ViewTypographyText
          style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
        >
          {expoPushToken}
        </ViewTypographyText>
        <ViewContainerStatic
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <ViewTypographyText
            style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}
          >
            Title:{" "}
            {
              // @ts-ignore
              notification && notification.request.content.title
            }
          </ViewTypographyText>
          <ViewTypographyText style={{ fontSize: 16, marginTop: 10 }}>
            Body:{" "}
            {
              // @ts-ignore
              notification && notification.request.content.body
            }
          </ViewTypographyText>
          <ViewTypographyText style={{ fontSize: 16, marginTop: 10 }}>
            Data:{" "}
            {
              // @ts-ignore
              notification && JSON.stringify(notification.request.content.data)
            }
          </ViewTypographyText>
        </ViewContainerStatic>
        <ViewButtonPressable
          onPress={async () => {
            await asyncNotificationSchedule({
              title: "You've got mail! 📬",
              body: "Here is the notification body",
              data: { data: "goes here" },
            });
          }}
        >
          <ViewTypographyText>
            Press to schedule a notification
          </ViewTypographyText>
        </ViewButtonPressable>
      </ViewContainerStatic>
    );
  }
  if (testMode === false && CustomNotificationBody) {
    return <CustomNotificationBody />;
  }
};

// REFRESH

export const ViewNotificationRefresh = () => {
  const scheduleAndReload = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Refresh",
        body: "Press to refresh the app",
      },
      trigger: null,
    });
    window.location.reload();
  };
  return (
    <ViewButtonPressable onPress={scheduleAndReload}>
      <ViewTypographyText>Send Refresh Notification</ViewTypographyText>
    </ViewButtonPressable>
  );
};
