import React from "react";
import { Text, View } from "react-native";
import { useAuthSession } from "../utils/auth";
import { ViewUserAttributes } from "../utils/user";
import { ViewDisplayMain, ViewDisplayTabs } from'../utils/display'

export default function UserPage() {
  const session = useAuthSession();
  
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: 700, marginBottom: 10 }}>USER PAGE</Text>
      <View style={{ maxWidth: 500 }}>
        <Text style={{ marginBottom: 10 }}>ViewAuthDetails</Text>
        {session.data && (
          <Text>Logged in as: {session.data.session.user.email}</Text>
        )}
      </View>
      <ViewUserAttributes/>
      <ViewDisplayMain/>
    </View>
  );
}

import { ViewFormMain } from "./form";