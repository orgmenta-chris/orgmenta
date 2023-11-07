import React, { useEffect, useState } from "react";
import PublicClientApplication from "react-native-msal";
import type {
  MSALConfiguration /*, etc */,
  MSALInteractiveParams,
  MSALResult,
} from "react-native-msal";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { scopes, publicClientApplication } from "../../api/authConfig";
import useTokenStore from "../../states/api/storeToken";
import { requestAuthSession } from "../../utils/auth";
import { ViewButtonPressable } from "../../utils/button";
import { ViewTypographyText } from "../../utils/typography";

const MSAL = () => {
  const params: MSALInteractiveParams = { scopes };
  const setToken = useTokenStore((state: any) => state.setToken);
  const token = useTokenStore((state: any) => state.token);

  const acquireAccessToken = async () => {
    try {
      const result: MSALResult | undefined =
        await publicClientApplication.acquireToken(params);

      setToken(result);

      console.log("Access token acquired!");
    } catch (error) {
      console.error("Error getting access token, check your config.", error);
    }
  };

  const getUserSession = async () => {
    const session = await requestAuthSession();
    console.log(session);
  };

  return (
    <>
      {token ? (
        <>
          <ViewTypographyText
            selectable={false}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Microsoft Account Connected
          </ViewTypographyText>
          <ViewButtonPressable
            style={{
              flex: 1,
              padding: 5,
              margin: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "black",
              backgroundColor: "lightblue",
            }}
            onPress={() => getUserSession()}
          >
            <ViewTypographyText
              selectable={false}
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Get User Session
            </ViewTypographyText>
          </ViewButtonPressable>
        </>
      ) : (
        <ViewButtonPressable
          style={{
            flex: 1,
            padding: 5,
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            backgroundColor: "lightblue",
          }}
          onPress={() => acquireAccessToken()}
        >
          <ViewTypographyText
            selectable={false}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Connect Ms Account
          </ViewTypographyText>
        </ViewButtonPressable>
      )}
    </>
  );
};

export default MSAL;
