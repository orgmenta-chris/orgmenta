// Storage for 'Secrets'
// (If we need to CRUD multiple 'vaults', then we may need to abstract 'Secrets' out into its own file.)
import { instanceSupabaseClient } from "./supabase";

import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

// CREATE

export const requestVaultCreate = async (name: string, secret: string) => {
  const { data, error } = await instanceSupabaseClient.rpc("insert_secret", {
    name,
    secret,
  });
  if (error) throw new Error(`${error}`);
  else return data;
};

export const ViewVaultCreate = () => {
  const [secretName, setSecretName] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [res, setRes] = useState("");
  const addKeyToVault = async (name: string, secret: string) => {
    const response = await requestVaultCreate(name, secret);
    setRes(response);
  };
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "green",
        right: 0,
        bottom: 0,
      }}
    >
      <Text style={{ textAlign: "center" }}>Insert Secret - Testing Area</Text>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setSecretName}
        value={secretName}
        placeholder="secret name"
        // keyboardType="numeric"
      />
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setSecretKey}
        value={secretKey}
        placeholder="secret key"
        // keyboardType="numeric"
      />
      <Text>{res && `uuid: ${res}`}</Text>
      <Button
        onPress={() => addKeyToVault(secretName, secretKey)}
        title="Insert Secret"
      />
    </View>
  );
};

// ITEM

export const requestVaultItem = async (secret_name: string) => {
  const { data, error } = await instanceSupabaseClient.rpc("read_secret", {
    secret_name,
  });

  if (error) throw new Error(`${error}`);
  else return data;
};

export const ViewVaultItem = () => {
  const [secretName, setSecretName] = useState("");
  const [res, setRes] = useState("");
  const getKeyFromVault = async (secret_name: string) => {
    const response = await requestVaultItem(secret_name);
    setRes(response);
  };
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "yellow",
        right: 0,
        bottom: 0,
      }}
    >
      <Text style={{ textAlign: "center" }}>Get Secret - Testing Area</Text>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setSecretName}
        value={secretName}
        placeholder="secret name"
        // keyboardType="numeric"
      />
      <Text>{res && `secret: ${res}`}</Text>
      <Button onPress={() => getKeyFromVault(secretName)} title="Get Secret" />
    </View>
  );
};

// EXAMPLE

export const ViewVaultExample = () => {
  const [operations, setOperations] = useState("insert");
  return (
    <View style={{ margin: 10, minHeight: 300, backgroundColor: "orange" }}>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          backgroundColor: "red",
          margin: 10,
        }}
      >
        <Button
          onPress={() => setOperations("insert")}
          title="Insert Secret View"
        />
        <Button onPress={() => setOperations("get")} title="Get Secret View" />
        {/* <Button
          onPress={() => setOperations("delete")}
          title="Delete Secret View"
        /> */}
      </View>

      <View style={{ flexDirection: "row", gap: 5, backgroundColor: "red" }}>
        {operations === "insert" ? <ViewVaultCreate /> : null}
        {operations === "get" ? <ViewVaultItem /> : null}
        {/* {operations === "delete" ? <DeleteComponent /> : null} */}
      </View>
    </View>
  );
};
