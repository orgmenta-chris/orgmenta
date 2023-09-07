// A 'display' is a way of viewing entities, their relationships, and their attributes.
// It is a 'perspective into the graph'.
// You can view entities and their relationships in different displays (e.g. Table, list, calendar) and filters.

import React, { memo} from "react";
import { View} from "react-native";
import { Link, useLocation } from "react-router-dom";
import {
  useEntityArray,
  useEntitySingle,
  useEntitySchema,
} from "./entity";
import ViewDisplayCalendar from "../components/displays/calendar/ViewDisplayCalendar";
import ViewDisplayForm from "../components/displays/forms/ViewDisplayForm";
import ViewDisplayList from "../components/displays/list/ViewDisplayList";
import ViewDisplayMaps from "../components/displays/maps/ViewDisplayMaps";
import ViewDisplayPods from "../components/displays/pods/ViewDisplayPods";
import ViewDisplayTable from "../components/displays/table/ViewDisplayTable";
import ViewJsonMain from "../components/displays/json/ViewJsonMain";

// Main

export const ViewDisplayMain = memo(({ component = "table" }: any) => {
  // todo: auxiliary data doesn't have relationship ids yet
  const path = useLocation().pathname?.split("/")?.[3]; // this should be passed as the component  prop instead of hardcoded here
  const Component =
    location && mapDisplayComponents[path]
      ? mapDisplayComponents[path]
      : mapDisplayComponents["list"]; // may need to memoize/useCallback this
  const auxiliary = useEntityArray({});
  const focus = useEntitySingle({});
  const schema = useEntitySchema();
  return <Component auxiliary={auxiliary} schema={schema} focus={focus} />;
});

// Displays
// These components transform the entity/schema/relationships data then provide them to the relevant component
// (e.g. ViewDisplayTable transforms entities data, then provides them to the table component from table.js )


// Components

export const mapDisplayComponents: any = {
  list: ViewDisplayList,
  pods: ViewDisplayPods,
  form: ViewDisplayForm,
  table: ViewDisplayTable,
  calendar: ViewDisplayCalendar,
  maps: ViewDisplayMaps,
  json: ViewJsonMain,
};

// Actions

export const optionsDisplayActions = [
  {
    title: "Inspect",
    iconName: "eye",
    iconSource: "Fether",
    description: "inspect an entity in a popup",
  },
  {
    title: "Add",
    iconName: "plus",
    iconSource: "Feather",
    description: "create new entities/entity",
  },
  {
    title: "Edit",
    iconName: "edit",
    iconSource: "Feather",
    description: "edit entities/entity",
  },
  {
    title: "Sync",
    iconName: "sync",
    iconSource: "MaterialIcons",
    description: "sync and database storage status",
  },
  {
    title: "Share",
    iconName: "share",
    iconSource: "Feather",
    description: "share, assign and manage access to entities",
  },
  {
    title: "Templates",
    iconName: "repo-template",
    iconSource: "Octicons",
    description: "manage and run rules/templates",
  },
  // {title:'Display',iconName:'eye',iconSource:'Feather', description: "change the display mode between Calendar, Table, List etc."},// in case we want to make the mode/display choices (calendar, table etc.) within these tabs instead of on their own
];

// Tabs

// Contextual tabs (i.e. these will eventually grey out if not applicable to the current focused entity)
export const ViewDisplayTabs = ({ id }: any) => {
  const path = useLocation().pathname?.split("/");
  return (
    <View style={{ flexDirection: "row" }}>
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "pods" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/pods"}
      >
        Pods
      </Link>
      {/* CG handling the pods component/module */}
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "form" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/form"}
      >
        Form
      </Link>
      {/* CG handling the form component/module*/}
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "list" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/list"}
      >
        List
      </Link>
      {/*Loisa Handling the list component/module */}
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "table" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/table"}
      >
        Table
      </Link>
      {/*Loisa Handling the table component/module */}
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "calendar" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/calendar"}
      >
        Calendar
      </Link>
      {/*Loisa Handling the calendar component/module */}
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "maps" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/maps"}
      >
        Maps
      </Link>
      {/*Loisa Handling the maps component/module */}
      <Link
        style={{
          padding: 5,
          backgroundColor: path[3] === "json" && "lightgray",
        }}
        to={`/entity/` + path[2] + "/json"}
      >
        JSON
      </Link>
      {/*Loisa Handling the json component/module */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='kanban'&&'lightgray')}} to={`/entity/` +path[2]+'/kanban'}>Kanban</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='gantt'&&'lightgray')}} to={`/entity/` +path[2]+'/gantt'}>Gantt</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='timeline'&&'lightgray')}} to={`/entity/` +path[2]+'/timeline'}>Timeline</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='threads'&&'lightgray')}} to={`/entity/` +path[2]+'/threads'}>Threads</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='chart'&&'lightgray')}} to={`/entity/` +path[2]+'/chart'}>Chart/Statistics</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='path'&&'lightgray')}} to={`/entity/` +path[2]+'/path'}>Path</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='nodes'&&'lightgray')}} to={`/entity/` +path[2]+'/nodes'}>Nodes</Link> */}
      {/* On hold */}
      {/* <Link style={{padding:5, backgroundColor:(path[3]==='spacial'&&'lightgray')}} to={`/entity/` +path[2]+'/spacial'}>Spacial</Link> */}
      {/* On hold */}
    </View>
  );
};
