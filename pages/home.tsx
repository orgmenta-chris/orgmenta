// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.

import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>Orgmenta</Text>
      <Text>(if logged in) Set home page: [options]</Text>
      <Text>Sales Pitch goes here</Text>
      <Text>Product Information goes here</Text>
    </View>
  );
}
