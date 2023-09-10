import { View } from "react-native";
import { Link } from "react-router-dom";
import SpaceWidget from "./widgets/spaceWidget";
import UserWidget from "./widgets/userWidget";
import BrowseWidget from "./widgets/browseWidget";
import OrgmentaWidget from "./widgets/orgmentaWidget";
import BookmarkWidget from "./widgets/bookmarkWidget";
import React from "react";

export default function Header() {
  return (
    <View
      style={{
        padding: 5,
        paddingLeft:20,
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        backgroundColor: "#0c4a73",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        maxHeight:60
      }}
    >
      <SpaceWidget />
      <BookmarkWidget/>
      <OrgmentaWidget/>
      <BrowseWidget />
      <UserWidget />
    </View>
  );
}
