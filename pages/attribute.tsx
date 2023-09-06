import { Text, View } from "react-native";
import { ViewAttributeMain, ViewAttributeUnioned } from "../utils/attribute";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";

export default function UserPage() {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Attributes</Text>
      <View style={{ flexDirection: "row" }}>
        <Link to={"main"} style={{ margin: 5 }}>
          Main
        </Link>
        <Link to={"unioned"} style={{ margin: 5 }}>
          Unioned
        </Link>
      </View>
      <Routes>
        <Route path="main" element={<ViewAttributeMain />} />
        <Route path="unioned" element={<ViewAttributeUnioned />} />
      </Routes>
      {/* <ViewAttributeMain/> */}
    </View>
  );
}
