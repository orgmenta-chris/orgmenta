// 'Browse' is search functionality, with optional 'quick-add' to convert the search term to a new entity.

import { ViewModalMain } from "./modal";
import { ViewRouterLinkthemed } from "./router";
import { instanceSupabaseClient } from "./supabase";
import { ViewTypographyTextsubsubheading } from "./typography";
import { ViewIconMain } from "./icon";
import { ViewCardExpandable } from "./card";
import { useQueryerQuery } from "./queryer";
import { ScrollView, View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

// Active

// This is a useQueryerQuery query that just returns a blank object (it doesn't query anything). Then the user can switch active bookmarks, which will update this query.
export const useBrowseActive = ({ ...Input }: TypeBrowseActive) => {
  const query = useQueryerQuery({
    queryKey: ["browse", "active"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "Browse",
    },
  });
  return query;
};

export type TypeBrowseActive = any; // placeholder

// Array

export const useBrowseArray = ({ searchterm }: any) => {
  const queryKey: (string | number)[] = [
    "attributes",
    "main",
    "all",
    searchterm,
  ];
  const queryFn = async () => {
    const query = instanceSupabaseClient.from("entities_orgmenta").select();
    if (searchterm) {
      query.ilike("title", `%${searchterm}%`);
    }
    query.range(0, 9); //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)
    const response = await query;
    return response.data;
  };
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, {
    enabled: true,
  });
  return query;
};

// Modal

export const ViewBrowseModal = (props: any) => {
  const [search, set] = useState("");
  const browseArray = useBrowseArray({ searchterm: search });
  return (
    <ViewModalMain
      modalName={"browse"}
      snapto={"right"}
      backdrop
      pinnable
      collapsible
    >
      <ViewBrowseNavigation />
      <ViewBrowseSchemas />
      <ViewBrowseSearch />
    </ViewModalMain>
  );
};

// Search

export const ViewBrowseSearch = (props: any) => {
  const [search, set] = useState("");
  const browseArray = useBrowseArray({ searchterm: search });
  return (
    <ViewCardExpandable
      flex={1}
      startExpanded
      header={"Search"}
      body={
        <View style={{ height: "100%" }}>
          <View style={{ flex: 1 }}>
            <View
              style={{ flexDirection: "row", maxHeight: 40, width: "100%" }}
            >
              <Text style={{ flex: 2 }}>{`Search: `}</Text>
              <View>
                <TextInput
                  style={{
                    flex: 3,
                    backgroundColor: "white",
                    borderWidth: 1,
                    maxWidth: 100,
                  }}
                  onChangeText={(e) => set(e)}
                />
              </View>
              <Pressable style={{ flex: 1, maxHeight: 20 }}>
                <ViewIconMain
                  color={`black`}
                  name={`add-circle`}
                  source={`Ionicons`}
                />
                {/* <Text>(QuickaddButton-todo)</Text> */}
              </Pressable>
            </View>
            <ScrollView style={{ height: "100%", backgroundColor: "gray" }}>
              {browseArray.isLoading && (
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 12,
                    height: 30,
                    backgroundColor: "white",
                  }}
                >
                  Loading...
                </Text>
              )}
              {!browseArray.isLoading &&
                (!browseArray?.data || browseArray?.data?.length === 0) && (
                  <Text
                    style={{
                      marginTop: 2,
                      fontSize: 12,
                      height: 30,
                      backgroundColor: "white",
                    }}
                  >
                    0 Results Found
                  </Text>
                )}
              {browseArray?.data?.map((x: any, i: string) => (
                <Text
                  numberOfLines={2}
                  style={{
                    marginTop: 2,
                    fontSize: 12,
                    height: 30,
                    backgroundColor: "white",
                  }}
                  key={i}
                >
                  {x.title}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View>
            <ViewBrowseTabs />
          </View>
        </View>
      }
    />
  );
};

// Widget to link to relevant pages MERGE THIS INTO THE LINKS COMPONENT
// to replace with toggle buttons
export const ViewBrowseNavigation = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Navigation"}
      body={
        <View>
          <ViewRouterLinkthemed to="browse">
            <ViewIconMain
              color={"black"}
              name={`open-outline`}
              source={`Ionicons`}
            />
          </ViewRouterLinkthemed>
        </View>
      }
    />
  );
};

// Tabs

export const ViewBrowseTabs = ({}: any) => {
  const [state, set] = useState("all");
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
          backgroundColor: state === "all" ? "gray" : "lightgray",
        }}
        onPress={() => set("all")}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain name={"globe"} source={"Entypo"} color={"white"} />
          <Text style={{ fontSize: 11 }}>All</Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "history" ? "gray" : "lightgray",
        }}
        onPress={() => set("history")}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain name={"history"} source={"Octicons"} color={"white"} />
          <Text style={{ fontSize: 11 }}>History</Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "websearch" ? "gray" : "lightgray",
        }}
        onPress={() => set("websearch")}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain name={"globe"} source={"Octicons"} color={"white"} />
          <Text style={{ fontSize: 11 }}>Websearch</Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          padding: 5,
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: state === "askai" ? "gray" : "lightgray",
        }}
        onPress={() => set("askai")}
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <ViewIconMain name={"chat"} source={"Entypo"} color={"white"} />
          <Text style={{ fontSize: 11 }}>AskAi</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

// Widget to link to entities/attributes/etc. (temp, CG to further design.)
// to replace with toggle buttons
export const ViewBrowseSchemas = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Schemas"}
      body={
        <View>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/all`}>
            <ViewTypographyTextsubsubheading>
              All
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/entities`}>
            <ViewTypographyTextsubsubheading>
              Entities
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/attributes`}>
            <ViewTypographyTextsubsubheading>
              Attributes
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed
            style={{ margin: 5 }}
            to={`/browse/relationships`}
          >
            <ViewTypographyTextsubsubheading>
              Relationships
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/browse/members`}>
            <ViewTypographyTextsubsubheading>
              Members
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
        </View>
      }
    />
  );
};
