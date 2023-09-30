import {
  ViewTypographyTextsubsubheading,
  ViewTypographyTextsubheading,
} from "../utils/typography";
import { ViewRouterLinkthemed } from "../utils/router";
import { ViewIconMain } from "../utils/icon";
import { useState } from "react";
import { View, Pressable, Text } from "react-native";

// Expandable

export const ViewCardExpandable = (props: any) => {
  const [expanded, expandedToggle] = useState(props.startExpanded);
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
        {/* Header Title */}
        <View style={{ flex: 1 }}>
          {props.headerlink ? (
            <ViewCardHeaderlink {...props} />
          ) : (
            <ViewCardHeaderplain {...props} expandedToggle={expandedToggle} />
          )}
        </View>
        {/* Header Icon */}
        <Pressable
          onPress={() => expandedToggle((oldValue: any) => !oldValue)}
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <ViewIconMain
            name={expanded ? "caretup" : "caretdown"}
            source={"AntDesign"}
            color={"gray"}
          />
        </Pressable>
      </View>
      {/* Body */}
      {expanded && (
        <View style={{ flex: 1 }}>
          {props.body || <Text>CardBody Missing</Text>}
        </View>
      )}
    </View>
  );
};

// Non-expandable card
export const ViewCardMain = (props: any) => {
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
        {/* Header Title */}
        <View style={{ flex: 1 }}>
          {props.headerlink ? (
            <ViewCardHeaderlink {...props} />
          ) : (
            <ViewCardHeaderplain {...props} />
          )}
        </View>
      </View>
      {/* Body */}
      <View style={{ flex: 1 }}>
        {props.body || <Text>CardBody Missing</Text>}
      </View>
    </View>
  );
};

export const ViewCardHeaderplain = (props: any) => {
  return (
    <Pressable
      onPress={() => props.expandedToggle((oldValue: any) => !oldValue)}
      style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
    >
      <ViewTypographyTextsubheading>
        {props.header || "Card Header Missing"}
      </ViewTypographyTextsubheading>
    </Pressable>
  );
};

export const ViewCardHeaderlink = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <ViewRouterLinkthemed
        style={{
          flex: 3,
          textDecoration: "none",
        }}
        to={props.headerlink}
      >
        <ViewTypographyTextsubheading>
          {props.header}
        </ViewTypographyTextsubheading>
      </ViewRouterLinkthemed>
    </View>
  );
};
