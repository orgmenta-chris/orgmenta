import { View } from "react-native";
import SpaceWidget from "./widgets/spaceWidget";
import UserWidget from "./widgets/userWidget";
import BrowseWidget from "./widgets/browseWidget";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <View style={{ height: 50, flexDirection: "row", gap: 10 }}>
      <Link to="">Entities</Link>
      <SpaceWidget></SpaceWidget>
      <BrowseWidget></BrowseWidget>
      <UserWidget></UserWidget>
    </View>
  );
}
