// the 'user' module is comprised of the following submodules / module relationships
// - auth(/session)
// - profile
// - memberships
// - permissions
// - devices (the windows/apps/devices they log in from)
// - alerts / notifications

import {
  ViewTypographyHeading,
  ViewTypographySubsubheading,
  ViewTypographyText,
} from "./typography";
import {
  ViewContainerScroll,
  ViewContainerStatic,
  ViewContainerRow,
} from "./container";
import { ViewModalContainer } from "./modal";
import { ViewCardExpandable } from "./card";
import {
  ViewRouterLink,
  ViewRouterLinkthemed,
  ViewRouterRoute,
  ViewRouterRoutes,
} from "./router";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import { ViewPageMain, ViewPageSection } from "./page";
import { ViewDisplayDynamic } from "./display";
import { ViewShieldUniversal } from "./shield";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useAttributeUnioned } from "./attribute";
import { useQueryerQuery } from "./queryer";
import { useWindowDimensions } from "./window";
import { useModalVisibility } from "./modal";
import { ViewTabButton } from "./tab";
import {
  useAuthSession,
  useAuthSignout,
  useAzureSignout,
  ViewAuthSignin,
  ViewAuthSignup,
  ViewAzureSignin,
} from "./auth";
import { useReactState } from "./react";
import MSAL from "../components/auth/msal";
import { useEffect, useState } from "react";
import useTokenStore from "../states/api/storeToken";
import { useAzureSSOStore } from "../states/auth/storeSSO";
import { ViewContextUniversal } from "./context";
import { arrayIndustryProducts } from "./hub";
import { ViewIntegrationSection } from "./integration";
// import MSAL from "../../../auth/msal";
import { Text } from "react-native";

// PAGE

export const ViewUserPage = () => {
  return (
    <ViewPageMain>
      <ViewTypographyHeading>User</ViewTypographyHeading>
      <ViewContainerRow>
        <ViewRouterLinkthemed to={"authentication"}>
          <ViewTypographySubsubheading style={{ padding: 5 }}>
            Authentication
          </ViewTypographySubsubheading>
        </ViewRouterLinkthemed>
        <ViewRouterLinkthemed to={"profile"}>
          <ViewTypographySubsubheading style={{ padding: 5 }}>
            Profile
          </ViewTypographySubsubheading>
        </ViewRouterLinkthemed>
        <ViewRouterLinkthemed to={"devices"}>
          <ViewTypographySubsubheading style={{ padding: 5 }}>
            Devices
          </ViewTypographySubsubheading>
        </ViewRouterLinkthemed>
        <ViewRouterLinkthemed to={"integrations"}>
          <ViewTypographySubsubheading style={{ padding: 5 }}>
            Integrations
          </ViewTypographySubsubheading>
        </ViewRouterLinkthemed>
      </ViewContainerRow>
      <ViewRouterRoutes>
        <ViewRouterRoute
          path="authentication"
          element={<ViewUserAuthentication />}
        />
        <ViewRouterRoute
          path="profile"
          element={<ViewUserProfile />}
        />
        <ViewRouterRoute
          path="devices"
          element={<ViewUserDevices />}
        />
        <ViewRouterRoute
          path="integrations"
          element={<ViewUserIntegrations />}
        />
      </ViewRouterRoutes>
    </ViewPageMain>
  );
};

// ATTRIBUTES

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
        <ViewContainerStatic key={i}>
          <ViewTypographyText>
            {x?.focus_columns?.name_singular}
          </ViewTypographyText>
        </ViewContainerStatic>
      ))}
    </>
  );
};

// MODAL

export const ViewUserModal = (props: any) => {
  return (
    <ViewModalContainer
      modalName={"user"}
      snapto={"right"}
      backdrop
      pinnable
      collapsible
    >
      <ViewContainerScroll>
        <ViewUserSession />
        <ViewUserSwitch />
        <ViewUserLinks />
        <ViewUserPrivacy />
        <ViewUserActivity />
        <ViewUserNotifications />
        <ViewUserComms />
        <ViewUserContext />
        <ViewUserDevices />
      </ViewContainerScroll>
    </ViewModalContainer>
  );
};

// ACTIVITY

// Widget to show the active entities for that user (e.g. what is the current event being worked on)
export const ViewUserActivity = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Activity"}
      body={
        <>
          <ViewTypographyText>ACTIVITY</ViewTypographyText>
          <ViewTypographyText>[Next events]</ViewTypographyText>
          <ViewTypographyText>
            [Link to show all user events]
          </ViewTypographyText>
        </>
      }
    />
  );
};

// PRIVACY

// Widget to show cookie/tracking/privacy options
export const ViewUserPrivacy = () => {
  // const [infoState, infoSet] = useReactState(false); // info for the shield. move into shield.tsx.
  return (
    <ViewCardExpandable
      startExpanded
      header={"Privacy"}
      body={
        <>
          <ViewContainerStatic style={{ flexDirection: "row", flex: 1 }}>
            <ViewShieldUniversal />
          </ViewContainerStatic>
          <ViewTypographyText>[cookies & tracking]</ViewTypographyText>
        </>
      }
    />
  );
};

// NOTIFICATIONS

// Widget to show the recent notifications/logs for that user (e.g system alerts, logs for changes to entities that the user is 'following'/assinged to, etc.
export const ViewUserNotifications = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Notifications"}
      body={
        <>
          <ViewTypographyText>todo</ViewTypographyText>
        </>
      }
    />
  );
};

// COMMS

// Widget to show the recent messages/communications for that user
export const ViewUserComms = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Comms"}
      body={
        <>
          <ViewTypographyText>[Recent messages]</ViewTypographyText>
          <ViewTypographyText>
            [Link to all messages (user/userid/messages)]
          </ViewTypographyText>
        </>
      }
    />
  );
};

// CONTEXT

export const ViewUserContext = () => {
  // A component to set the help/info/preferences universally across the app.
  return (
    <ViewCardExpandable
      startExpanded
      header={"Context"}
      body={
        <>
          <ViewContextUniversal />
        </>
      }
    />
  );
};

// DEVICE

// Widget to show the devices that the user has logged in with / has preferences shieldSet for.
export const ViewUserDevices = () => {
  return (
    <ViewCardExpandable
      startExpanded
      header={"Devices"}
      body={
        <>
          <ViewTypographyText>
            [Current Device Info (e.g. sync status)]
          </ViewTypographyText>
          <ViewTypographyText>
            [Link to all devices (user/userid/devices)]
          </ViewTypographyText>
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
        <ViewButtonPressable
          key={i}
          style={{ padding: 10, margin: 5, backgroundColor: "lightgray" }}
          onPress={() => updater(x.id, x.nickname)}
        >
          <ViewTypographyText>
            {x.nickname}
            {x.id}
          </ViewTypographyText>
        </ViewButtonPressable>
      ))}
    />
  );
};

export const ViewAdminAuth = () => {
  const [authState, setAuthState] = useState(true);

  const toggleAuthState = () => {
    setAuthState(!authState);
  };

  return (
    <ViewContainerScroll>
      <ViewContainerStatic>
        {authState ? <ViewAzureSignin /> : <ViewUserSignin />}
      </ViewContainerStatic>
      <ViewContainerStatic>
        <ViewButtonPressable
          style={{
            flex: 1,
            padding: 5,
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            backgroundColor: "lightblue",
          }}
          onPress={toggleAuthState}
        >
          <ViewTypographyText
            selectable={false}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            {authState ? "Password Login" : "Social Login"}
          </ViewTypographyText>
        </ViewButtonPressable>
      </ViewContainerStatic>
    </ViewContainerScroll>
  );
};

export const ViewUserSignin = () => {
  const auth = useAuthSession();
  const signout = useAuthSignout();
  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };
  const tabs = [
    { tab: "Sign in", component: <ViewAuthSignin /> },
    { tab: "Sign up", component: <ViewAuthSignup /> },
    // { tab: "Sign in using MS account", component: <ViewAzureSignin /> },
  ];
  const [activeTab, setActiveTab] = useReactState(0);
  return (
    <>
      <ViewContainerRow>
        {tabs.map((content, index) => (
          <ViewContainerRow key={index} style={{ flex: 1 }}>
            {/* <ViewTabButton
              onPress={() => handleTabPress(index)}
              tabIndex={index}
              tabText={content}
            /> */}
            <ViewButtonPressable
              key={index}
              style={{
                flex: 1,
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
              <ViewTypographyText
                selectable={false}
                style={{ fontWeight: "bold" }}
              >
                {content.tab}
              </ViewTypographyText>
            </ViewButtonPressable>
          </ViewContainerRow>
        ))}
      </ViewContainerRow>
      <ViewContainerStatic>{tabs[activeTab].component}</ViewContainerStatic>
    </>
  );
};
// Widget to show options/links for the current logged in user
export const ViewUserSession = () => {
  const auth = useAuthSession();
  const signoutRegular = useAuthSignout();
  const signoutAzure = useAzureSignout();
  // const [activeTab, setActiveTab] = useReactState(0);
  // const tabs = [
  //   { tab: "Sign in", component: <ViewAuthSignin /> },
  //   { tab: "Sign up", component: <ViewAuthSignup /> },
  // ];
  // const handleTabPress = (index: number) => {
  //   setActiveTab(index);
  // };
  // const [parameters, setParameters] = useState(null);
  // const setToken = useTokenStore((state: any) => state.setToken);
  const setSSOSession = useAzureSSOStore((state: any) => state.setSession);
  const ssoSession = useAzureSSOStore((state: any) => state.userSession);

  const getURLParameters = (url: any) => {
    const searchParams = new URLSearchParams(url.split("#")[1]);

    const parameters = Object.fromEntries(searchParams.entries());

    // @ts-ignore
    setSSOSession(parameters);
  };

  useEffect(() => {
    const currentURL = window.location.href;

    getURLParameters(currentURL);

    console.log("parameters:", ssoSession);
  }, []);

  return (
    <ViewCardExpandable
      startExpanded
      header={auth?.data?.nickUpper || "Sign In/Up"}
      body={
        // @ts-ignore
        !auth?.data?.session && !ssoSession.access_token ? (
          <ViewAdminAuth />
        ) : (
          // <Text>{JSON.stringify(ssoSession, null, 2)}</Text>
          <ViewContainerStatic>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/users/${auth?.data?.session?.user?.id || "guest"}/pods`}
            >
              <ViewTypographySubsubheading selectable={false}>
                Profile
              </ViewTypographySubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/users/${auth?.data?.session?.user?.id || "guest"}/devices`}
            >
              <ViewTypographySubsubheading selectable={false}>
                Devices
              </ViewTypographySubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/users/${auth?.data?.session?.user?.id || "guest"}/settings`}
            >
              <ViewTypographySubsubheading selectable={false}>
                Settings
              </ViewTypographySubsubheading>
            </ViewRouterLinkthemed>
            <ViewRouterLinkthemed
              style={{ margin: 5 }}
              to={`/users/${
                auth?.data?.session?.user?.id || "guest"
              }/pods/events`}
            >
              <ViewTypographySubsubheading selectable={false}>
                All Events
              </ViewTypographySubsubheading>
            </ViewRouterLinkthemed>
            <ViewButtonPressable
              style={{ margin: 5 }}
              onPress={() => {
                ssoSession ? signoutRegular.mutate(): signoutAzure.mutate();
                
              }}
            >
              <ViewTypographySubsubheading selectable={false}>
                Signout
              </ViewTypographySubsubheading>
            </ViewButtonPressable>
            <MSAL />
          </ViewContainerStatic>
        )
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
        <ViewContainerStatic>
          <ViewRouterLinkthemed style={{ margin: 5 }} to={`/users/all`}>
            <ViewTypographySubsubheading selectable={false}>
              All Users
            </ViewTypographySubsubheading>
          </ViewRouterLinkthemed>
        </ViewContainerStatic>
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

// import { useQuery } from "@tanstack/react-query";

export const useUserSingle = (id: string) => {
  const queryKey = ["user", "single", id];
  const queryFn = async () => requestUserSingle(id);
  const query = useQueryerQuery(queryKey, queryFn, {
    enabled: id ? true : false,
  });
  return query;
};

export const requestUserSingle = async (id: string) => {
  const query = instanceSupabaseClient.from("users").select();
  query
    .range(0, 0) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)    .then((response) => response.data);
    .eq("id", id)
    .then(handleSupabaseResponse as any);
  return query;
};

export const ViewUserWidget = () => {
  const auth = useAuthSession();
  const window = useWindowDimensions();
  // const userActive = useUserActive({}) as TypeUserActive;
  return (
    <ViewButtonPressable
      onPress={useModalVisibility("user")}
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {window?.width > 600 && (
        <ViewTypographyText
          selectable={false}
          numberOfLines={1}
          style={{ paddingRight: 10, color: "white" }}
        >{`${auth?.data?.nickUpper}`}</ViewTypographyText>
      )}
      <ViewIconMain
        name={"user"}
        source={"Feather"}
        color={"white"}
        size={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </ViewButtonPressable>
  );
};

export const ViewUserIntegrations = () => {
  // Placeholder component, todo.
  const integrationsTemp = arrayIndustryProducts.filter(
    (x) => x.integrations?.length > 0
  );
  const windowDimensions = useWindowDimensions();
  return (
    <ViewPageSection>
      <ViewContainerScroll>
        <ViewIntegrationSection />
        <ViewTypographyText>
          {JSON.stringify(integrationsTemp, null, 2)}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageSection>
  );
};

export const ViewUserAuthentication = () => {
  // Placeholder component, todo.
  const windowDimensions = useWindowDimensions();
  const auth = useAuthSession();
  return (
    <ViewPageSection>
      <ViewContainerStatic style={{ maxWidth: 500 }}>
        <ViewTypographyText style={{ marginBottom: 10 }}>
          Authentication
        </ViewTypographyText>
        {auth.data && (
          <ViewTypographyText>
            Logged in as: {auth?.data?.session?.user?.email}
          </ViewTypographyText>
        )}
      </ViewContainerStatic>
      <ViewUserAttributes />
      <ViewDisplayDynamic />
    </ViewPageSection>
  );
};

// PROFILE

export const ViewUserProfile = () => {
  return (
    <ViewPageSection>
        <ViewTypographyText style={{ marginBottom: 10 }}>
          profile
        </ViewTypographyText>
        <ViewTypographyText>
          (todo)
        </ViewTypographyText>
    </ViewPageSection>
  );
};
