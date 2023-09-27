import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { ViewIconMain } from "../utils/icon";

// Expandable

export const ViewCardExpandable = (props: any) => {
  const [expanded, expandedToggle] = useState(false);
  return (
    <View
      style={{ backgroundColor: "white", flexDirection: "column", flex: 1 }}
    >
      {/* Header */}
      <Pressable
        onPress={() => expandedToggle((oldValue) => !oldValue)}
        style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
      >
        {/* Title */}
        <View style={{ flex: 1, flexGrow: 1 }}>
          {props.header || <Text>CardHeading Missing</Text>}
        </View>
        {/* Expand/Collapse Icon */}
        <ViewIconMain
          name={expanded ? "caretup" : "caretdown"}
          source={"AntDesign"}
          color={"gray"}
        />
      </Pressable>
      {/* Body */}
      {expanded && (
        <View style={{ flex: 1, flexGrow: 1 }}>
          {props.body || <Text>CardBody Missing</Text>}
        </View>
      )}
    </View>
  );
};
