// Storage for 'Secrets'
// (If we need to CRUD multiple 'vaults', then we may need to abstract 'Secrets' out into its own file.)

import { instanceSupabaseClient } from "./supabase";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewContainerStatic, ViewContainerRow} from "./container";
import { ViewInputText } from "./input";
import { useReactState } from "./react";

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
  const [secretName, setSecretName] = useReactState("");
  const [secretKey, setSecretKey] = useReactState("");
  const [res, setRes] = useReactState("");
  const addKeyToVault = async (name: string, secret: string) => {
    const response = await requestVaultCreate(name, secret);
    setRes(response);
  };
  return (
    <ViewContainerStatic
      style={{
        padding: 10,
        backgroundColor: "green",
        right: 0,
        bottom: 0,
      }}
    >
      <ViewTypographyText style={{ textAlign: "center" }}>
        Insert Secret - Testing Area
      </ViewTypographyText>
      <ViewInputText
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
      <ViewInputText
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
      <ViewTypographyText>{res && `uuid: ${res}`}</ViewTypographyText>
      <ViewButtonPressable onPress={() => addKeyToVault(secretName, secretKey)}>
        <ViewTypographyText>Insert Secret</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
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
  const [secretName, setSecretName] = useReactState("");
  const [res, setRes] = useReactState("");
  const getKeyFromVault = async (secret_name: string) => {
    const response = await requestVaultItem(secret_name);
    setRes(response);
  };
  return (
    <ViewContainerStatic
      style={{
        padding: 10,
        backgroundColor: "yellow",
        right: 0,
        bottom: 0,
      }}
    >
      <ViewTypographyText style={{ textAlign: "center" }}>
        Get Secret - Testing Area
      </ViewTypographyText>
      <ViewInputText
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
      <ViewTypographyText>{res && `secret: ${res}`}</ViewTypographyText>
      <ViewButtonPressable onPress={() => getKeyFromVault(secretName)}>
        <ViewTypographyText>Get Secret</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

// EXAMPLE

export const ViewVaultExample = () => {
  const [operations, setOperations] = useReactState("insert");
  return (
    <ViewContainerStatic
      style={{ margin: 10, minHeight: 300, backgroundColor: "orange" }}
    >
      <ViewContainerRow
        style={{
          gap: 5,
          backgroundColor: "red",
          margin: 10,
        }}
      >

        <ViewButtonPressable onPress={() => setOperations("insert")}>
          <ViewTypographyText>Insert Secret</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable onPress={() => setOperations("get")}>
          <ViewTypographyText>Get Secret</ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable onPress={() => setOperations("delete")}>
          <ViewTypographyText>Delete Secret TODO</ViewTypographyText>
        </ViewButtonPressable>
      </ViewContainerRow>

      <ViewContainerRow
        style={{ gap: 5, backgroundColor: "red" }}
      >
        {operations === "insert" ? <ViewVaultCreate /> : null}
        {operations === "get" ? <ViewVaultItem /> : null}
        {/* {operations === "delete" ? <DeleteComponent /> : null} */}
      </ViewContainerRow>
    </ViewContainerStatic>
  );
};
