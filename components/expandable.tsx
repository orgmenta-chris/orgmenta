import { Text, View } from "react-native";
import { useLocation, Link } from "react-router-dom";
import { newData as data } from "../../utils/static";
import React from "react";

export const ViewProcessesTitle = () => {
  // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useLocation()?.pathname?.split("/");
  const process = data?.find((x) => x.nickname === path[2]);
  const subprocesses = process && data.filter((x) => x.parent === process.id);
  const parent = data?.find((y) => y.id === process?.parent);
  const grandparent = data?.find((z) => z.id === parent?.parent);
  return (
    <View style={{ flexDirection: "column" }}>
      {/* Title of the current process (breadcrumbs) */}
      <Text style={{ fontSize: 24, height: 30 }}>
        {grandparent?.id && grandparent?.id > 9 && (
          <>
            {" "}
            <Link to={"/entity/" + grandparent.nickname}>
              {grandparent.display_singular}
            </Link>
            {" > "}
          </>
        )}
        {parent?.id && parent?.id > 9 && (
          <>
            {" "}
            <Link to={"/entity/" + parent.nickname}>
              {parent.display_singular}
            </Link>
            {" > "}
          </>
        )}
        {process?.display_singular}
      </Text>
    </View>
  );
};

export const ViewProcessesTabs = () => {
  // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useLocation()?.pathname?.split("/");
  const process = data?.find((x) => x.nickname === path[2]);
  const subprocesses = process && data.filter((x) => x.parent === process.id);
  const parent = data?.find((y) => y.id === process?.parent);
  const grandparent = data?.find((z) => z.id === parent?.parent);
  return (
    <View style={{ flexDirection: "column" }}>
      {/* Tabs for each subprocess */}
      <View style={{ flexDirection: "row" }}>
        {subprocesses?.map((x, i) => (
          <Link style={{ flex: 1 }} key={i} to={`/entity/` + x.nickname}>
            <Text>{x.display_singular}</Text>
          </Link>
        ))}
      </View>

      {/* Info on the current process (move this into pods*/}
      {/* <Text style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}> */}
      {/* {JSON.stringify({division,department,process},null,2)} */}
      {/* </Text> */}
    </View>
  );
};