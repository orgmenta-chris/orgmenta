import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { data } from "../utils/static";
import { ViewIconMain } from "../utils/icon";
import { ViewRouterLink } from "../utils/router";
import { ViewTypographyTextsubsubheading, ViewTypographyTextsubheading } from "../utils/typography";

export const Expandable = ({ item }: any) => {
  const [expanded, expandedToggle] = useState(false);
  return (
    <View
      style={{
        flexDirection: "column",
        paddingTop: 22,
        paddingLeft: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <ViewRouterLink
          style={{
            flex: 3,
            textDecoration:'none',
          }}
          to={"entity/" + item.nickname}
        >
          <ViewTypographyTextsubheading>{item.display_singular}</ViewTypographyTextsubheading> 
        </ViewRouterLink>
        <Pressable
          onPress={() => expandedToggle((oldValue) => !oldValue)}
          style={{
            minHeight: 40,
            flexDirection: "row",
            flex: 1,
          }}
        >
          <ViewIconMain
            name={expanded ? "caretup" : "caretdown"}
            source={"AntDesign"}
            color={"gray"}
          />
        </Pressable>
      </View>

      {expanded && (
        <View
          style={{
            flex: 1,
          }}
        >
          {data
            .filter(
              (x) =>
                (x.status === "3. Active" || __DEV__) && x.parent === item.id
            )
            .map((x, i) => (
              <ViewRouterLink style={{textDecoration:'none', margin:10}} to={"entity/" + x.nickname} key={'a'+item.id+i}>             
                <ViewTypographyTextsubsubheading>{x.display_singular}</ViewTypographyTextsubsubheading>
              </ViewRouterLink>
            ))}
        </View>
      )}
    </View>
  );
};
