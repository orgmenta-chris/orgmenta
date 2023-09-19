import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { data } from "../utils/static";
import { ViewIconMain } from "../utils/icon";
import { Link, useLocation } from "react-router-dom";
import React from "react";
// import ViewIconMain from "./displays/icons/ViewIconMain";

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
            style={{color: '#176596', fontWeight:700, fontSize:17}} selectable={false}>{item.display_singular}</Text>
        </Link>
        <Pressable
          style={{}}
          onPress={() => expandedToggle((oldValue) => !oldValue)}
          style={{
            minHeight: 40,
            flexDirection: "row",
            flex: 1,
            // backgroundColor: 'blue',
          }}
        >
          <ViewIconMain
            // padding={5}
            // paddingTop={15}
            name={expanded ? "caretup" : "caretdown"}
            source={"AntDesign"}
            color={"gray"}
            // size={10}
          />
        </Pressable>
      </View>

      {expanded && (
        <View
          style={{
            // flexDirection: 'column',
            flex: 1,
            flexGrow: 1,
            // minHeight: 200,
            // backgroundColor: 'orange',
          }}
        >
          {data
            .filter(
              (x) =>
                (x.status === "3. Active" || __DEV__) && x.parent === item.id
            )
            .map((x, i) => (
              <Link style={{textDecoration:'none', margin:10}} to={"entity/" + x.nickname} key={i}>             
                <Text style={{ fontWeight:500, fontSize:16,color: '#0c4a73'}} selectable={false}>{x.display_singular}</Text>
              </Link>
            ))}
        </View>
      )}
    </View>
  );
};
