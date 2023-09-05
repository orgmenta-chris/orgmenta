import { View } from "react-native";
import { Link } from "react-router-dom";
import SpaceWidget from "./widgets/spaceWidget";
import UserWidget from "./widgets/userWidget";
import BrowseWidget from "./widgets/browseWidget";
import React from "react";

export default function Header() {
  return (
    <View
      style={{
        paddingTop: 15,
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
      }}
    >
      <Link to="" style={{ color: "black", textDecoration: "none" }}>
        Entities
      </Link>
      <SpaceWidget />
      <BrowseWidget />
      <UserWidget />
    </View>
  );
}
