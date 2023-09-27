// Chris todo.

// the 'user' module is comprised of the following submodules / module relationships
// - auth(/session)
// - profile
// - memberships
// - permissions
// - devices (the windows/apps/devices they log in from)

import { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useAttributeUnioned } from "./attribute";
import { ViewModalMain } from "./modal";
import { useQuery } from "@tanstack/react-query";
import { useAuthSession, useAuthSignout } from "./auth";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
// import MSAL from "../../../auth/msal";

// Widget to just show a link to the main user page (user/[userid])
export const ViewUserAll = () => {
  return (
    <View>
      <Text>[Link to users/all]</Text>
      <Text>[Link to users/userid]</Text>
    </View>
  );
};

// Widget to show the active entities for that user (e.g. what is the current event being worked on)
export const ViewUserActivity = () => {
  return (
    <View>
      <Text>[Next events]</Text>
      <Text>[Link to show all user events]</Text>
    </View>
  );
};

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewUserAlerts = () => {
  return (
    <View>
      {/* Presets button so that the user can change the view of what comes through in this widget */}
      <Text>[Presets button]</Text>
    </View>
  );
};

// Widget to show the recent messages/communications for that user
export const ViewUserComms = () => {
  return (
    <View>
      {/* Presets button so that the user can change the view of what comes through in this widget */}
      <Text>[Recent messages]</Text>
      <Text>[Link to all messages (user/userid/messages)</Text>
    </View>
  );
};

// Widget to show the devices that the user has logged in with
export const ViewUserDevice = () => {
  return (
    <View>
      <Text>[Current Device Info (e.g. sync status)</Text>
      <Text>[Link to all devices (user/userid/devices)</Text>
    </View>
  );
};

// Attributes

export const useUserAttributes = () => {
  const attributes = useAttributeUnioned(["User"]);
  return attributes;
};

export const ViewUserAttributes = () => {
  const attributes = useUserAttributes();
  // console.log('attributes',attributes)
  const keys = attributes?.data?.[0] && Object.keys(attributes.data[0]);
  return (
    <>
      {/* <Text>{JSON.stringify(attributes.data?.[0],null,2)}</Text> */}
      {/* <Text>{JSON.stringify(keys,null,2)}</Text> */}
      {attributes?.data?.map((x, i) => (
        <View key={i}>
          <Text>{x?.focus_columns?.name_singular}</Text>
          {/* <Text key={i}>{x.side}</Text>  */}
        </View>
      ))}
      <Text>-----</Text>
    </>
  );
};

// Modal

export const ViewUserModal = (props: any) => {
  const auth = useAuthSession();
  const signout = useAuthSignout();
  const native = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { tab: "Sign in", component: <SignIn /> },
    { tab: "Sign up", component: <SignUp /> },
  ];
  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <ViewModalMain
      modalName={"user"}
      snapto={"right"}
      backdrop
      pinnable
      collapsible
    >
      <ScrollView style={{ height: "80%" }}>
        {/* <Text>{JSON.stringify(auth)}</Text> */}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            marginHorizontal: 12,
          }}
        >
          {auth?.data?.session === null
            ? tabs.map((content, index) => (
                <Pressable
                  key={index}
                  style={{
                    padding: 10,
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderColor: activeTab === index ? "black" : "transparent",
                    backgroundColor:
                      activeTab === index ? "lightblue" : "transparent",
                  }}
                  onPress={() => handleTabPress(index)}
                >
                  <Text style={{ fontWeight: "bold" }}>{content.tab}</Text>
                </Pressable>
              ))
            : null}
        </View>
        {auth?.data?.session === null ? (
          <View>{tabs[activeTab].component}</View>
        ) : (
          <View>
            <Pressable
              onPress={() => {
                native(`/users/${auth?.data?.session?.user?.id}/pods`);
              }}
            >
              <Text
                style={{
                  color: "blue",
                  textDecorationStyle: "solid",
                  textAlign: "center",
                }}
              >
                View Profile
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                native(`/users/${auth?.data?.session?.user?.id}/settings`);
              }}
            >
              <Text
                style={{
                  color: "blue",
                  textDecorationStyle: "solid",
                  textAlign: "center",
                }}
              >
                Settings
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                native(`/users/${auth?.data?.session?.user?.id}/pods`);
              }}
            >
              <Text
                style={{
                  color: "blue",
                  textDecorationStyle: "solid",
                  textAlign: "center",
                }}
              >
                All Events
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                signout.mutate();
              }}
            >
              <Text
                style={{
                  color: "blue",
                  textDecorationStyle: "solid",
                  textAlign: "center",
                }}
              >
                Log out
              </Text>
            </Pressable>
            {/* <MSAL /> */}
          </View>
        )}
        <ViewUserAll />
        <ViewUserActivity />
        <ViewUserAlerts />
        <ViewUserComms />
        <ViewUserDevice />
      </ScrollView>
    </ViewModalMain>
  );
};

// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then you can switch between active users/uservariables, which will update this query.
// Actual usage/structure not yet confirmed, this is a proof of concept.
export const useUserActive = ({ ...Input }: TypeUserActive) => {
  const session = useAuthSession();
  const query = useQuery({
    queryKey: ["user", "active"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "User",
      session,
    },
  });
  return query;
};

export type TypeUserActive = any; // placeholder
