import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { data } from "../utils/static";
import { ViewIconMain } from "../utils/icon";
import { Link } from "react-router-dom";

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
        <Link
          style={{
            flex: 3,
            textDecoration:'none',
          }}
          to={"entity/" + item.nickname}
        >
          <Text 
            style={{color: '#176596', fontWeight:'700', fontSize:17}} selectable={false}>{item.display_singular}</Text>
        </Link>
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
            flexGrow: 1,
          }}
        >
          {data
            .filter(
              (x) =>
                (x.status === "3. Active" || __DEV__) && x.parent === item.id
            )
            .map((x, i) => (
              <Link style={{textDecoration:'none', margin:10}} to={"entity/" + x.nickname} key={item.id||i}>             
                <Text style={{ fontWeight:'500', fontSize:16,color: '#0c4a73'}} selectable={false}>{x.display_singular}</Text>
              </Link>
            ))}
        </View>
      )}
    </View>
  );
};
