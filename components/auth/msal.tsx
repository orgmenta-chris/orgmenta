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
import { instanceSupabaseClient } from "../../utils/supabase";
import { activateConnection } from "../../utils/integration";

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

  useEffect(() => {
    const makeConnection = async (account: string) => {
      try {
        const { data, error } = await instanceSupabaseClient
          .from("entities_orgmenta")
          .insert([{ type: "item", class: "integration", title: account }])
          .select();

        if (error) console.log(error);

        if (data) {
          console.log(data);

          return data;
        }
      } catch (error) {
        console.log(error);

        throw error;
      }
    };

    const removeConnection = async () => {
      try {
        const { error } = await instanceSupabaseClient
          .from("entities_orgmenta")
          .delete()
          .eq("type", "item");

        if (error) console.log(error);
      } catch (error) {
        console.log(error);

        throw error;
      }
    };

    if (token) {
      makeConnection(token.account.username);
    } else {
      removeConnection();
    }
  }, [token]);

  return (
    <>
      {token ? (
        <>
          <ViewTypographyText
            selectable={false}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
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
              onPress={() => setToken("")}
            >
              <ViewTypographyText
                selectable={false}
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Disconnect Ms Account
              </ViewTypographyText>
            </ViewButtonPressable>
          </ViewTypographyText>
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
