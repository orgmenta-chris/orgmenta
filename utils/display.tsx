// A 'display' is a way of viewing entities, their relationships, and their attributes.
// It is a 'perspective into the graph'.
// You can view entities and their relationships in different displays (e.g. Table, list, calendar) and filters.

import React, { ReactElement, memo, useMemo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Link, useLocation, Route, Routes } from "react-router-dom";
import { ViewListMain } from "./list";
import { ViewTableMain, useTableColumns } from "./table";
import { ViewJsonMain } from "./json";
import { ViewIconMain } from "./icon";
import { ViewPodsMain } from "./pods";
import { ViewFormMain } from "./form";
import {
  ViewEntityAdd,
  useEntityArray,
  useEntitySingle,
  useEntitySchema,
} from "./entity";
import { ViewProcessesTabs } from "../components/entity/processTabs";
import MyCalendar from "../components/displays/calendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MapChart from "../components/displays/maps";

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
// Chris is owning the below components.

export const ViewDisplayList = (props: any) => {
  const schema = props.schema;
  const columns = useTableColumns(
    schema.data?.map(
      (x: { focus_columns: { name_singular: any } }) =>
        x.focus_columns.name_singular
    )
  );
  const auxiliary = props.auxiliary;
  return (
    <View style={{ flexDirection: "column" }}>
      <ViewListMain columns={columns} data={auxiliary.data} />
    </View>
  );
};

export const ViewDisplayPods = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const focus = props.focus;
  const data = "make focus into an array and concat with aux";
  return (
    <View style={{ flexDirection: "column" }}>
      <ViewPodsMain items={auxiliary} schema={schema.data}>
        <ViewProcessesTabs />
      </ViewPodsMain>
    </View>
  );
};

export const ViewDisplayForm = (props: any) => {
  // Chris todo: auxiliary data doesn't have relationship ids yet, so 'if(oldItem.focus_columns.cell_field==='relationship'){' does nothing yet

  // create the appropriate schema for the form
  let data: any = useMemo(() => {
    let items: any = [];

    if (props.schema && props.focus.data && props.auxiliary) {
      props?.schema?.data?.forEach((oldItem: any) => {
        let newItem = { ...oldItem, ...oldItem.focus_columns };
        // if the attribute is 'relationship' we know that it is in the relationship table instead of being a column on the entity table.
        if (oldItem.focus_columns.cell_field === "relationship") {
          newItem.table = "relationships";
          newItem.value = "(relationships)"; //'props.auxiliary.data to be filtered here (todo)'
        } else {
          newItem.table = "entities";
          newItem.value = props.focus.data?.[0]?.[newItem.name_singular];
        }

        delete newItem.focus_columns;
        delete newItem.auxiliary_columns;
        items.push(newItem);
      });

      return items;
    }
  }, [props.schema, props.focus.data, props.auxiliary]);

  return (
    <View style={{ flexDirection: "column", maxHeight: 500 }}>
      <ViewFormMain data={data} />
    </View>
  );
};

export const ViewDisplayTable = (props: any) => {
  const schema = props.schema;
  const columns = useTableColumns(
    schema.data?.map(
      (x: { focus_columns: { name_singular: any } }) =>
        x.focus_columns.name_singular
    )
  );
  const auxiliary = props.auxiliary;
  return (
    <View style={{ flexDirection: "column" }}>
      <ViewTableMain columns={columns} data={auxiliary.data} />
    </View>
  );
};

export const ViewDisplayCalendar = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;

  const [activeTab, setActiveTab] = useState(0);
  const [value, onChange] = useState(new Date());

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  interface ICalendarEventBase {
    start: Date;
    end: Date;
    title: string;
    children?: ReactElement | null;
  }

  const eventNotes = useMemo(
    () => (
      <View style={{ marginTop: 3 }}>
        <Text style={{ fontSize: 10, color: "white" }}>
          {" "}
          Phone number: 555-123-4567{" "}
        </Text>
        <Text style={{ fontSize: 10, color: "white" }}>
          {" "}
          Arrive 15 minutes early{" "}
        </Text>
      </View>
    ),
    []
  );

  const events: Array<ICalendarEventBase & { color?: string }> = [
    {
      title: "Team Meeting",
      start: new Date(2023, 2, 15, 10, 0), // March 15, 2023, 10:00 AM
      end: new Date(2023, 2, 15, 11, 0), // March 15, 2023, 11:00 AM
      children: eventNotes,
    },
    {
      title: "Project Review",
      start: new Date(2023, 2, 17, 14, 30), // March 17, 2023, 2:30 PM
      end: new Date(2023, 2, 17, 16, 0), // March 17, 2023, 4:00 PM
      children: eventNotes,
    },
    {
      title: "Conference Call",
      start: new Date(2023, 2, 20, 11, 0), // March 20, 2023, 11:00 AM
      end: new Date(2023, 2, 20, 12, 0), // March 20, 2023, 12:00 PM
      children: eventNotes,
    },
    {
      title: "Team Building Workshop",
      start: new Date(2023, 2, 22, 9, 30), // March 22, 2023, 9:30 AM
      end: new Date(2023, 2, 22, 12, 30), // March 22, 2023, 12:30 PM
      children: eventNotes,
    },
    {
      title: "Product Demo",
      start: new Date(2023, 2, 25, 15, 0), // March 25, 2023, 3:00 PM
      end: new Date(2023, 2, 25, 16, 0), // March 25, 2023, 4:00 PM
      children: eventNotes,
    },
    // Add more random events as needed
  ];

  const tabs = [
    { tab: "View Calendar", component: <MyCalendar myEventsList={events} /> },
    {
      tab: "Add events",
      component: <Calendar onChange={onChange} value={value} />,
    },
  ];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          marginHorizontal: 12,
        }}
      >
        {tabs.map((content, index) => (
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
        ))}
      </View>

      <View>{tabs[activeTab].component}</View>
    </>
  );
};

export const ViewDisplayMaps = (props: any) => {
  return (
    <>
      <Text>This is maps page</Text>
      <MapChart />
    </>
  );
}

export const ViewDisplayJson = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const columns = useTableColumns(
    schema.data?.map((x: any) => x.focus_columns.name_singular)
  );

  return (
    <View style={{ flexDirection: "column" }}>
      <ViewJsonMain schema={schema} auxiliary={auxiliary} columns={columns} />
    </View>
  );
};

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

export const ViewDisplayActions = ({}: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row" }}>
        {optionsDisplayActions?.map((x, i) => (
          <Link key={i} style={{ padding: 5 }} to={x.title.toLowerCase()}>
            {/* {x.title} */}
            <ViewIconMain
              name={x.iconName}
              source={x.iconSource}
              color={"black"}
              size={24}
            />
          </Link>
        ))}
      </View>
      <Routes>
        <Route path="/add" element={<ViewEntityAdd />} />
      </Routes>
    </View>
  );
};

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
