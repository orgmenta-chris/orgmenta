import React from "react";
import { useMsal } from "@azure/msal-react";
import { Pressable, Text, StyleSheet } from "react-native";
import AccessToken from "../../api/accessToken";

const MSAL = () => {
  const { instance, accounts, inProgress } = useMsal();

  if (accounts.length > 0) {
    return (
      <>
        <Pressable style={styles.links} onPress={() => instance.logoutPopup()}>
          <Text
            style={{
              color: "blue",
              textDecorationStyle: "solid",
              textAlign: "center",
            }}
          >
            Disconnect MS Account
          </Text>
        </Pressable>
        <AccessToken />
      </>
    );
  } else if (inProgress === "login") {
    return <Text>Login is currently in progress!</Text>;
  } else {
    return (
      <Pressable style={styles.links} onPress={() => instance.loginPopup()}>
        <Text
          style={{
            color: "blue",
            textDecorationStyle: "solid",
            textAlign: "center",
          }}
        >
          Connect MS Account
        </Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  links: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default MSAL;
