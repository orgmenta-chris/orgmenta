// Chris is working on this.
// It is a form of display (alongside calendar, table etc.).
// This display is resizable 'pods' that can be moved around on a grid, pinned etc.
// E.g. on the 'invoicing' category entity, you could pin an 'unsent invoices count' widget to to this display.

import { ViewRouterLink, useRouterLocation } from "./router";
import { View, Text } from "react-native";
import { data } from "./static";

// Main

export const ViewPodMain = ({ items, children }: any) => {
  return (
    <View>
      {children}
      {/* <Text>{JSON.stringify({items})}</Text> */}
    </View>
  );
};

// List

export const ViewPodList = ({ items, children }: any) => {
  return <Text>ViewPodList (todo)</Text>;
};

// Example

export const ViewPodExample = () => {
  // Temporary examplepod
  return (
    <View
      style={{
        flexDirection: "column",
        margin: 5,
      }}
    >
      <View style={{ height: 40, backgroundColor: "lightgray" }}>
        <Text style={{ fontSize: 16, fontStyle: "italic" }}>
          Another Example Pod
        </Text>
        <Text style={{ fontSize: 12 }}>
          To be replaced with dynamic pods using db data
        </Text>
      </View>
    </View>
  );
};

// Title

// A pod to show information on the currently selected entity
// This is using static data for categories only at the moment (e.g. Accounts-Payables-Bills), but will eventually be a dynamic component using  db data.
export const ViewPodInfo = () => {
  // At the moment, this shows static info for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useRouterLocation()?.paths;
  const process = data?.find((x) => x.nickname === path[2]);
  const parent = data?.find((y) => y.id === process?.parent);
  return (
    <View
      style={{
        flexDirection: "column",
        margin: 5,
      }}
    >
      <View style={{ backgroundColor: "lightgray" }}>
        <Text style={{ fontSize: 14, fontStyle: "italic" }}>
          {process?.description}
        </Text>
        <Text style={{ fontSize: 12 }}>{process?.summary}</Text>
      </View>
    </View>
  );
};

// Tabs

// A component to show entity 'tabs' (e.g. Accounts > Payables > Bills/Payments/etc)
// This is using static data for categories only at the moment, but will eventually be a dynamic component using  db data.
export const ViewPodTabs = () => {
  // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useRouterLocation()?.paths;
  const process = data?.find((x) => x.nickname === path[2]);
  const subprocesses = process && data.filter((x) => x.parent === process.id);
  const parent = data?.find((y) => y.id === process?.parent);
  return (
    <View
      style={{
        flexDirection: "column",
        margin: 5,
      }}
    >
      {/* Tabs for each subprocess */}
      <View style={{ flexDirection: "row", height: 40 }}>
        {subprocesses?.map((x, i) => (
          <ViewRouterLink
            style={{ flex: 1 }}
            key={i}
            to={`/entity/` + x.nickname}
          >
            <Text>{x.display_singular}</Text>
          </ViewRouterLink>
        ))}
      </View>
    </View>
  );
};
