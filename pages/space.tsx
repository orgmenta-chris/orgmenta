import { StyleSheet, Text, View } from "react-native";
import { ViewSpaceArray, ViewSpaceSwitch } from "../utils/space";
import React from "react";

export default function SpacePage() {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Spaces</Text>
      <ViewSpaceArray />
      <ViewSpaceSwitch/>
    </View>
  );
}