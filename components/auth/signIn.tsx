import { useState } from "react";
import { useAuthSignin } from "../../utils/auth";
import {
  Text,
  TextInput,
  Pressable,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

const SignIn = () => {
  const [usernameState, usernameUpdate] = useState("");
  const [passwordState, passwordUpdate] = useState("");

  const signin = useAuthSignin({
    email: usernameState,
    password: passwordState,
  });

  return (
    <View>
      <Text style={{ marginHorizontal: 12 }}>Email</Text>
      <TextInput
        style={styles.input}
        autoComplete="username"
        placeholder="Email"
        onChangeText={(value) => usernameUpdate(value)}
      />
      <Text style={{ marginHorizontal: 12 }}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(value) => passwordUpdate(value)}
      />
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "lightblue",
          gap: 5,
          marginHorizontal: 12,
          marginTop: 5,
          padding: 10,
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
        onPress={() => signin.mutate()}
      >
        <Text style={{ textAlign: "center" }}>Sign In</Text>
        <Text>{signin.isLoading ? <ActivityIndicator /> : null}</Text>
      </Pressable>

      {signin.isError ? (
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#d15953",
          }}
        >
          An error occurred: {signin.error?.message}
        </Text>
      ) : signin.isSuccess ? (
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 12,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#53d17b",
          }}
        >
          Logged in successfully!
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default SignIn;
