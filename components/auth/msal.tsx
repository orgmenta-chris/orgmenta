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

  // useEffect(() => {
  //   initPublicApp();
  // });

  return (
    <>
      {token ? (
        <Text>Microsoft Account Connected</Text>
      ) : (
        <Pressable
          style={{
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
          }}
          onPress={() => acquireAccessToken()}
        >
          <Text>Connect Ms Account</Text>
        </Pressable>
      )}
    </>
  );
};

export default MSAL;
