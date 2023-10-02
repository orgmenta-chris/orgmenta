// the 'user' module is comprised of the following submodules / module relationships
// - auth(/session)
// - profile
// - memberships
// - permissions
// - devices (the windows/apps/devices they log in from)
// - alerts / notifications

import { useAttributeUnioned } from "./attribute";
import { ViewModalMain } from "./modal";
import { ViewCardExpandable } from "./card";
import { useAuthSession, useAuthSignout } from "./auth";
import { ViewRouterLinkthemed } from "./router";
import { useQueryerQuery } from "./queryer";
import { ViewTypographyTextsubsubheading } from "./typography";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useState } from "react";
// import MSAL from "../../../auth/msal";

// Attributes

export const useUserAttributes = () => {
  const attributes = useAttributeUnioned(["User"]);
  return attributes;
};

// Placeholder - CG working on this.
export const ViewUserAttributes = () => {
  const attributes = useUserAttributes();
  return (
    <>
      {attributes?.data?.map((x: any, i: string) => (
        <View key={i}>
          <Text>{x?.focus_columns?.name_singular}</Text>
        </View>
      ))}
    </>
  );
};

// Modal

export const ViewUserModal = (props: any) => {
  return (
    <ViewModalMain
      modalName={"user"}
      snapto={"right"}
      backdrop
      pinnable
      collapsible
    >
      <ScrollView>
        <ViewUserSession />
        <ViewUserSwitch />
        <ViewUserLinks />
        <ViewUserTracking />
        <ViewUserActivity />
        <ViewUserAlerts />
        <ViewUserComms />
        <ViewUserDevice />
      </ScrollView>
    </ViewModalMain>
  );
};

// Widget to show the active entities for that user (e.g. what is the current event being worked on)
export const ViewUserActivity = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Activity"}
      body={
        <>
          <Text>ACTIVITY</Text>
          <Text>[Next events]</Text>
          <Text>[Link to show all user events]</Text>
        </>
      }
    />
  );
};

// Widget to show cookie/tracking/privacy options
export const ViewUserTracking = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Tracking"}
      body={
        <>
          <Text>TRACKING</Text>
          <Text>[cookies etc.]</Text>
        </>
      }
    />
  );
};

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewUserAlerts = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Alerts/Notifications"}
      body={
        <>
          <Text>todo</Text>
        </>
      }
    />
  );
};

// Widget to show the recent messages/communications for that user
export const ViewUserComms = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Comms/Messages"}
      body={
        <>
          <Text>[Recent messages]</Text>
          <Text>[Link to all messages (user/userid/messages)]</Text>
        </>
      }
    />
  );
};

// Widget to show the devices that the user has logged in with / has preferences set for.
export const ViewUserDevice = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Devices"}
      body={
        <>
          <Text>[Current Device Info (e.g. sync status)]</Text>
          <Text>[Link to all devices (user/userid/devices)]</Text>
        </>
      }
    />
  );
};

// Widget to switch between different users (future functionality)
export const ViewUserSwitch = () => {
  // TODO
  const array = { data: [{ id: "TEMP", nickname: "TEMP" }] };
  const updater = (id: string, nickname: string) => "temp";
  return (
    <ViewCardExpandable
      startExpanded
      header={"Switch User"}
      body={array?.data?.map((x, i) => (
        <Pressable
          key={i}
          style={{ padding: 10, margin: 5, backgroundColor: "lightgray" }}
          onPress={() => updater(x.id, x.nickname)}
        >
          <Text>
            {x.nickname}
            {x.id}
          </Text>
        </Pressable>
      ))}
    />
  );
};

// Widget to show options/links for the current logged in user
export const ViewUserSession = () => {
  const auth = useAuthSession();
  const signout = useAuthSignout();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { tab: "Sign in", component: <SignIn /> },
    { tab: "Sign up", component: <SignUp /> },
  ];
  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };
  return (
    <ViewCardExpandable
      startExpanded
      header={auth.data.session.user.email || "Sign In/Up"}
      body={
        <>
          {auth?.data?.session === null ? (
            tabs.map((content, index) => (
              <>
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
                <View>{tabs[activeTab].component}</View>
              </>
            ))
          ) : (
            <View>
              <ViewRouterLinkthemed
                style={{ margin: 5 }}
                to={`/users/${auth?.data?.session?.user?.id || "guest"}/pods`}
              >
                <ViewTypographyTextsubsubheading>
                  Profile
                </ViewTypographyTextsubsubheading>
              </ViewRouterLinkthemed>
              <ViewRouterLinkthemed
                style={{ margin: 5 }}
                to={`/users/${
                  auth?.data?.session?.user?.id || "guest"
                }/devices`}
              >
                <ViewTypographyTextsubsubheading>
                  Devices
                </ViewTypographyTextsubsubheading>
              </ViewRouterLinkthemed>
              <ViewRouterLinkthemed
                style={{ margin: 5 }}
                to={`/users/${
                  auth?.data?.session?.user?.id || "guest"
                }/settings`}
              >
                <ViewTypographyTextsubsubheading>
                  Settings
                </ViewTypographyTextsubsubheading>
              </ViewRouterLinkthemed>
              <ViewRouterLinkthemed
                style={{ margin: 5 }}
                to={`/users/${
                  auth?.data?.session?.user?.id || "guest"
                }/pods/events`}
              >
                <ViewTypographyTextsubsubheading>
                  All Events
                </ViewTypographyTextsubsubheading>
              </ViewRouterLinkthemed>
              <Pressable
                style={{ margin: 5 }}
                onPress={() => {
                  signout.mutate();
                }}
              >
                <ViewTypographyTextsubsubheading>
                  Signout
                </ViewTypographyTextsubsubheading>
              </Pressable>
            </View>
          )}
        </>
      }
    />
  );
};

// Widget to show user links (not dependent on who is logged in)
export const ViewUserLinks = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Navigation"}
      body={
        <View>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/users/all`}>
            <ViewTypographyTextsubsubheading>
              All Users
            </ViewTypographyTextsubsubheading>
          </ViewRouterLinkthemed>
        </View>
      }
    />
  );
};

// Active

// This is a useQueryerQuery query that just returns a blank object (it doesn't query anything).
// Then you can switch between active users/uservariables, which will update this query.
// Actual usage/structure not yet confirmed, this is a proof of concept.
export const useUserActive = ({ ...Input }: TypeUserActive) => {
  const session = useAuthSession();
  const query = useQueryerQuery({
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
