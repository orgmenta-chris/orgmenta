// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.

import React from "react";
import { Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)',borderColor: 'rgba(0, 0, 0, 0.15)', borderWidth: 1, flexDirection: "column", width:"100%", alignItems:'center' }}>
      <Image
        style={{
          width: 500,
          height: 200,
        }}
        source={{
          uri: require('../assets/logo/full/color.png'),
        }}
      />
      <Text>(if logged in) Set home page: [options]</Text>
      <Text>Sales Pitch goes here</Text>
      <Text>Product Information goes here</Text>
    </View>
  );
}
