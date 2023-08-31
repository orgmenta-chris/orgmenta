import { StyleSheet, Text, View } from "react-native";
import { data } from "../../utils/static";
import { Expandable } from "../expandable";

export default function Sidebar() {
  return (
    <View>
      {
        data // temporary array that contains all the navigation objects
          .filter(
            (x) => (x.status === "3. Active" || __DEV__) && x.parent === 1
          ) // if in production, only show active modules
          .map((x, i) => (
            <Expandable item={x} key={i} />
          )) // display the name only (temporary, to be replaced with link)
      }
    </View>
  );
}
