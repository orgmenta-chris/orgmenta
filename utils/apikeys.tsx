import React, { useState } from "react";
import { ViewButtonPressable } from "./button";
import { ViewContainerStatic } from "./container";
import { ViewInputText } from "./input";
import { ViewTypographyText } from "./typography";
import { instanceSupabaseClient } from "./supabase";
import { useAuthSession } from "./auth";
import * as Clipboard from "expo-clipboard";

export const addApiKeyToVault = async (name: string, secret: string) => {
  const { data, error } = await instanceSupabaseClient.rpc("insert_secret", {
    name,
    secret,
  });

  if (error) console.log(error);

  if (data) {
    console.log(data);

    return data;
  }
};

export const getApiKeyFromVault = async (name: string) => {
  const { data, error } = await instanceSupabaseClient.rpc("read_secret", {
    name,
  });

  if (error) console.log(error);

  if (data) {
    console.log(data);

    return data;
  }
};

export const generateApiKey = (length = 32) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let apiKey = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    apiKey += characters.charAt(randomIndex);
  }

  return apiKey;
};

export const ViewApiKeyGenerator = () => {
  const [secretKey, setSecretKey] = useState("");
  const [secretName, setSecretName] = useState("");
  const auth = useAuthSession();

  const generateAPIKey = () => {
    const apiKey = generateApiKey();

    // @ts-ignore
    setSecretKey(apiKey);

    // console.log(auth.data?.currentUser);

    // @ts-ignore
    setSecretName(`api_key_${auth.data?.currentUser}`);

    addApiKeyToVault(secretName, secretKey);
  };

  const copyToClipboard = async (apiData: any) => {
    await Clipboard.setStringAsync(apiData);
  };

  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ textAlign: "center" }}>
        Generate API Key
      </ViewTypographyText>
      <ViewInputText
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        // onChangeText={setSecretKey}
        value={secretKey}
        placeholder="API Key"
        // keyboardType="numeric"
      />
      <ViewButtonPressable onPress={generateAPIKey}>
        <ViewTypographyText>Generate API Key</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        onPress={() =>
          copyToClipboard(`Identifier: ${secretName} | API Key: ${secretKey}`)
        }
      >
        <ViewTypographyText>Copy To Clipboard</ViewTypographyText>
      </ViewButtonPressable>
      <ViewTypographyText>
        NOTE: Copy this information somewhere secure. You will not be able to
        access it again if you leave this page.
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};
