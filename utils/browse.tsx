// 'Browse' is search functionality, with optional 'quick-add' to convert the search term to a new entity.

import { ViewModalMain } from "./modal";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ScrollView, View, Text, TextInput, Pressable } from "react-native";
import { ViewRouterLinkthemed } from "./router";
import { instanceSupabaseClient } from "./supabase";
import { ViewIconMain } from './icon';

// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything). Then the user can switch active bookmarks, which will update this query.
export const useBrowseActive = ({ ...Input }: TypeBrowseActive) => {
  const query = useQuery({
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
    query.limit(10);
    const response = await query;
    return response.data;
  };
  const query = useQuery<any, Error>(queryKey, queryFn, { enabled: true });
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
      <ViewRouterLinkthemed to="browse">
        <ViewIconMain color={'black'} name={`open-outline`} source={`Ionicons`} />
      </ViewRouterLinkthemed>
      <ViewBrowseSearch />
    </ViewModalMain>
  );
};

// Search

export const ViewBrowseSearch = (props: any) => {
  const [search, set] = useState("");
  const browseArray = useBrowseArray({ searchterm: search });
  return (
    <View>
      <View style={{ flexDirection: "row", maxHeight: 40, width: "100%"}}>
        <Text style={{flex: 2}}>{`Search: `}</Text>
        <View>
          <TextInput
            style={{ flex: 3, backgroundColor: "white", borderWidth:1, maxWidth:100 }}
            onChangeText={(e) => set(e)}
          />
        </View>
        <Pressable  style={{flex: 1, maxHeight:20}}>
          <ViewIconMain color={`black`} name={`add-circle`} source={`Ionicons`} />
          {/* <Text>(QuickaddButton-todo)</Text> */}
        </Pressable>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "gray" }}>
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
        {!browseArray.isLoading && (!browseArray?.data || browseArray?.data?.length === 0) && (
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
  );
};
