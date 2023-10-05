// 'Bookmarks' are links to categories, pinned or other saved entity views.

import { ViewModalMain } from "./modal";
import { useState } from "react";
import { View, ScrollView, Pressable, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { data } from "./static";
import { ViewCardExpandable } from "./card";
import { ViewIconMain } from "./icon";
import { ViewRouterLinkthemed } from "./router";
import { ViewTypographyTextsubsubheading } from "./typography";

// Modal

export const ViewBookmarkModal = (props: any) => {
  return (
    <ViewModalMain
      modalName={"bookmark"}
      snapto={"left"}
      backdrop
      pinnable
      collapsible
    >
      <ScrollView style={{
        flex:1, marginBottom:5}}>
        {
          data // temporary array that contains all the navigation objects
            .filter(
              (x) => (x.status === "3. Active" || __DEV__) && x.parent === 1
            ) // if in production, only show active modules
            .map((x, i) => (
              <ViewCardExpandable
                key={x.id || i}
                header={x.display_singular}
                headerlink={"entity/" + x.nickname}
                body={data
                  .filter(
                    (y) =>
                      (y.status === "3. Active" || __DEV__) && y.parent === x.id
                  )
                  .map((y, i) => (
                    <ViewRouterLinkthemed
                      style={{ textDecoration: "none", margin: 5 }}
                      to={"entity/" + y.nickname}
                      key={"a" + y.id + i}
                    >
                      <ViewTypographyTextsubsubheading>
                        {y.display_singular}
                      </ViewTypographyTextsubsubheading>
                    </ViewRouterLinkthemed>
                  ))}
              />
            )) // display the name only (temporary, to be replaced with link)
        }
      </ScrollView>
      <View><ViewBookmarkTabs/></View>
    </ViewModalMain>
  );
};


export const ViewBookmarkTabs = ({}: any) => {
  const [state, set] = useState("modules");
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      style={{
        width: "100%",
        height: 50,
        flexDirection: "row",
      }}
    >
      <Pressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "modules" ? "gray" : "lightgray",
        }}
        onPress={() => set("modules")}
      >
      <View style={{ alignItems: "center", flex: 1 }}>
        <ViewIconMain name={"category"} source={"MaterialIcons"} color={"white"} />
        <Text style={{ fontSize: 11 }}>Modules</Text>
      </View>
    </Pressable>
      <Pressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "pinned" ? "gray" : "lightgray",
        }}
        onPress={() => set("pinned")}
      >
      <View style={{ alignItems: "center", flex: 1 }}>
        <ViewIconMain name={"star"} source={"Entypo"} color={"white"} />
        <Text style={{ fontSize: 11 }}>Pinned</Text>
      </View>
    </Pressable>
      <Pressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "recent" ? "gray" : "lightgray",
        }}
        onPress={() => set("recent")}
      >
      <View style={{ alignItems: "center", flex: 1 }}>
        <ViewIconMain name={"history"} source={"MaterialIcons"} color={"white"} />
        <Text style={{ fontSize: 11 }}>Recent</Text>
      </View>
    </Pressable>
    </ScrollView>
  );
};


// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active bookmarks, which will update this query.
export const useBookmarkActive = ({ ...Input }: TypeBookmarkActive) => {
  const query = useQuery({
    queryKey: ["bookmark", "active"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "Bookmarks",
    },
  });
  return query;
};

export type TypeBookmarkActive = any; // placeholder
