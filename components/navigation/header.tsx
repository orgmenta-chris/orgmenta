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
        paddingTop: 15,
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        backgroundColor: "#c7ddd2",
        borderBottomColor: "black",
        borderBottomWidth: 1,
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
