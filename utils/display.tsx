// A 'display' is a way of viewing entities, their relationships, and their attributes.
// It is a 'perspective into the graph'.
// You can view entities and their relationships in different displays (e.g. Table, list, calendar) and filters.

import { ViewRouterLinkthemed, useRouterLocation } from "./router";
import { ViewFormDynamic } from "./form";
import { ViewListMain } from "./list";
import { ViewChartMain } from "./chart";
import { ViewPathMain } from "./path";
import { ViewMapMobile } from "./map";
import { UtilityPlatformMain } from "./platform";
import {
  ViewCalendarMain,
  ViewCalendarContainer,
  TypeCalendarHeader,
  examplesCalendarEvent,
  ViewCalendarEvent,
  TypeCalendarEvent,
} from "./calendar";
import {
  ViewPodMain,
  ViewPodInfo,
  ViewPodList,
  ViewPodTabs,
  ViewPodExample,
} from "./pod";
import { ViewIconMain } from "./icon";
// import { ViewTableMain  } from "./table-old";
// import { ViewJsonMain } from "./json";
// import { ViewIconMain } from "./icon";

import { ReactElement, memo, useEffect, useMemo, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  Modal,
  ViewStyle,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import ViewMapWeb from "../components/displays/maps/ViewDisplayMaps";
import { ViewTimelineMain, TypeTimelineMain } from "./timeline";
import { Map, Marker, GeoJson } from "pigeon-maps";
import {
  Calendar,
  CalendarHeaderForMonthViewProps,
  CalendarHeaderProps,
  CalendarTouchableOpacityProps,
  DateRangeHandler,
  EventCellStyle,
  ICalendarEventBase,
  Mode,
  WeekNum,
} from "react-native-big-calendar";
import JSONTree from "react-native-json-tree";
import { Person, UseDisplayTable, fuzzySort, makeData } from "./table";
import { ColumnDef } from "@tanstack/react-table";
// import { Map as ImmutableMap } from "immutable";

// Dynamic

export const ViewDisplayDynamic = memo(
  ({ auxiliary, schema, focus, display }: any) => {
    // The main display component that switches between different components
    const Component = mapDisplayComponents[display || "list"]; // may need to memoize/useCallback this
    return <Component auxiliary={auxiliary} schema={schema} focus={focus} />;
  }
);

// Displays

// These components transform the entity/schema/relationships data then provide them to the relevant component
// (e.g. ViewDisplayTable transforms entities data, then provides them to the table component from table.js )
// Chris is owning the below components.

export const ViewDisplayList = (props: any) => {
  const auxiliary = props.auxiliary;
  // const focus = props.focus;
  return <ViewListMain data={auxiliary?.data} />;
};
export const ViewDisplayChart = (props: any) => {
  const auxiliary = props.auxiliary;
  // const focus = props.focus;
  return <ViewChartMain data={auxiliary?.data} />;
};

export const ViewDisplayPod = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const focus = props.focus;
  const data = "make focus into an array and concat with aux";
  return (
    <ViewPodMain items={auxiliary} schema={schema.data}>
      <ViewPodInfo />
      <ViewPodTabs />
      <ViewPodList title={"Example List Pod"} data={auxiliary.data} />
      {/* <ViewPodExample />
      <ViewPodExample />
      <ViewPodExample /> */}
    </ViewPodMain>
  );
};

// Form

export const ViewDisplayForm = (props: any) => {
  // Chris todo: auxiliary data doesn't have relationship ids yet, so 'if(oldItem.focus_columns.cell_field==='relationship'){' does nothing yet
  // create the appropriate schema for the form
  let data: any = useMemo(() => {
    let items: any = [];
    if (props.schema && props.focus.data && props.auxiliary) {
      props?.schema?.data?.forEach((oldItem: any) => {
        let newItem = { ...oldItem, ...oldItem.auxiliary_columns };
        // if the attribute is 'relationship' we know that it is in the relationship table instead of being a column on the entity table.
        if (oldItem.focus_columns.cell_field === "relationship") {
          newItem.table = "relationships";
          newItem.value = "(relationships)"; //'props.auxiliary.data to be filtered here (todo)'
        } else {
          newItem.table = "entities";
          newItem.value = newItem[newItem.name_singular];
        }
        delete newItem.focus_columns;
        delete newItem.auxiliary_columns;
        items.push(newItem);
      });

      return items;
    }
  }, [props.schema, props.focus.data, props.auxiliary]);
  return <ViewFormDynamic data={data} />;
};

// Table

// todo (to be replaced with Loisa's dynamic table once developed)
export const ViewDisplayTable = (props: any) => {
  const [data, setData] = useState<Person[]>(() => makeData(1000));
  const refreshData = () => setData((old) => makeData(1000));

  const columns = useMemo<ColumnDef<Person, any>[]>(
    () => [
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "firstName",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`,
            id: "fullName",
            header: "Full Name",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
            filterFn: "fuzzy",
            sortingFn: fuzzySort,
          },
        ],
      },
      {
        header: "Info",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "age",
            header: () => "Age",
            footer: (props) => props.column.id,
          },
          {
            header: "More Info",
            columns: [
              {
                accessorKey: "visits",
                header: () => <span>Visits</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "status",
                header: "Status",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "Profile Progress",
                footer: (props) => props.column.id,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const tableData = {
    columns,
    data,
    refreshData,
  };
  return (
    <View style={{ maxHeight: 400 }}>
      <UseDisplayTable tableData={tableData} />
    </View>
  );
};

// Calendar

export const ViewDisplayCalendar = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <ViewCalendarMain/> */}
      <ViewCalendarContainer />
    </View>
  );
};

// Timeline
export const ViewDisplayTimeline = (props: any) => {
  const data = [
    {
      time: "09:00",
      title: "TimelineEvent 1",
      description: "Event 1 Description",
    },
    {
      time: "10:45",
      title: "TimelineEvent 2",
      description: "Event 2 Description",
    },
    {
      time: "12:00",
      title: "TimelineEvent 3",
      description: "Event 3 Description",
    },
    {
      time: "14:00",
      title: "TimelineEvent 4",
      description: "Event 4 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 5",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 6",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 7",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 8",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 9",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 10",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 11",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 12",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 13",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 14",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 15",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 16",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 17",
      description: "Event 5 Description",
    },
  ];
  return (
    <View style={{ height: "100%" }}>
      <ViewTimelineMain
        data={data}
        style={{}}
        descriptionStyle={{ color: "white" }}
        // isUsingFlatlist={true}
        // circleSize={20}
        // circleColor='rgb(45,156,219)'
        // lineColor='rgb(45,156,219)'
        // timeContainerStyle={{minWidth:52, marginTop: -5}}
        // timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
      />
    </View>
  );
};

// Maps
// Bring PigeonMaps (from components..../ViewDisplayMaps etc.) into a maps.tsx.
// Also add the data into a useQuery so that it caches everything (including the image if possible?)
export const ViewDisplayMaps = (props: any) => {
  const { customerAddress } = props; // this data could be geocoded into lat and long coordinates for them to be rendered on the map
  const [worldMapJSON, setWorldMapJSON] = useState(null);
  const fetchWorldMap = async () => {
    try {
      const response = await fetch(
        "https://ik.imagekit.io/vg0ett8n6/custom.geo.json?updatedAt=1693968485445"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWorldMapJSON(data);
    } catch (error) {
      console.error("Error fetching world map data:", error);
    }
  };
  // this function converts the user addresses into coordinates that can be used to render markers on the map.
  const goeCodeAddresses = () => {
    // todo
  };
  useEffect(() => {
    fetchWorldMap();
  }, []);
  return UtilityPlatformMain.OS !== "web" ? (
    <ViewMapMobile />
  ) : (
    <View style={{ maxHeight: 400 }}>
      <Map height={600} defaultZoom={2.5}>
        <GeoJson
          data={worldMapJSON}
          styleCallback={(feature: any, hover: any) => {
            if (feature.geometry.type === "LineString") {
              return { strokeWidth: "1", stroke: "black" };
            }
            return {
              fill: "#d4e6ec99",
              strokeWidth: "1",
              stroke: "white",
              r: "20",
            };
          }}
        />
        <Marker width={50} anchor={[13.75396, 100.50224]} color="gray" />
        <Marker width={50} anchor={[-1.292066, 36.821945]} color="gray" />
      </Map>
    </View>
  );
};

// Json

// Will use dynamic json tree component from json.tsx once developed by Loisa
export const ViewDisplayJson = (props: any) => {
  const jsonData = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
    },
    email: "john.doe@example.com",
    isEmployed: true,
    hobbies: ["Reading", "Hiking"],
    pets: [
      {
        name: "Fido",
        species: "Dog",
        age: 5,
      },
      {
        name: "Whiskers",
        species: "Cat",
        age: 3,
      },
    ],
    education: [
      {
        degree: "Bachelor's",
        major: "Computer Science",
        university: "Example University",
        year: 2015,
      },
      {
        degree: "Master's",
        major: "Business Administration",
        university: "Another University",
        year: 2018,
      },
    ],
    // immutable: ImmutableMap({ key: "value" }),
  };

  const theme = {
    scheme: "monokai",
    author: "wimer hazenberg (http://www.monokai.nl)",
    base00: "#272822",
    base01: "#383830",
    base02: "#49483e",
    base03: "#75715e",
    base04: "#a59f85",
    base05: "#f8f8f2",
    base06: "#f5f4f1",
    base07: "#f9f8f5",
    base08: "#f92672",
    base09: "#fd971f",
    base0A: "#f4bf75",
    base0B: "#a6e22e",
    base0C: "#a1efe4",
    base0D: "#66d9ef",
    base0E: "#ae81ff",
    base0F: "#cc6633",
  };

  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <JSONTree
        data={jsonData}
        theme={{
          extend: theme,
          // underline keys for literal values
          valueLabel: {
            textDecoration: "underline",
          },
          // switch key for objects to uppercase when object is expanded.
          // `nestedNodeLabel` receives additional arguments `expanded` and `keyPath`
          nestedNodeLabel: ({ style }, nodeType, expanded) => ({
            style: {
              ...style,
              textTransform: expanded ? "uppercase" : style.textTransform,
            },
          }),
        }}
        invertTheme={true}
      />
      <View style={{height: 40}}>
        <Pressable onPress={() => console.log("todo")}>
          <Text
            style={{
              color: "blue",
              textDecorationStyle: "solid",
              textAlign: "center",
            }}
          >
            Expand/Collapse All Button (todo)
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

// Components

export const mapDisplayComponents: any = {
  pods: ViewDisplayPod,
  form: ViewDisplayForm,
  list: ViewDisplayList,
  table: ViewDisplayTable,
  calendar: ViewDisplayCalendar,
  timeline: ViewDisplayTimeline,
  maps: ViewDisplayMaps,
  json: ViewDisplayJson,
  chart: ViewDisplayChart,
  // path: ViewDisplayPath,
  // kanban: ViewDisplayKanban,
  // gantt: ViewDisplayGantt,
  // thread: ViewDisplayThreads,
  // nodes: ViewDisplayNodes,
  // spacial: ViewDisplaySpacial,
};

// Options

export const optionsDisplayMain = [
  { title: "Pods", iconName: "view-quilt", iconSource: "MaterialIcons" },
  {
    title: "Form",
    iconName: "view-list-outline",
    iconSource: "MaterialCommunityIcons",
  },
  { title: "List", iconName: "list", iconSource: "Feather" },
  { title: "Table", iconName: "table", iconSource: "AntDesign" },
  { title: "Calendar", iconName: "calendar", iconSource: "Feather" },
  { title: "Timeline", iconName: "timeline", iconSource: "MaterialIcons" },
  { title: "Maps", iconName: "map", iconSource: "Feather" },
  {
    title: "Json",
    iconName: "code-json",
    iconSource: "MaterialCommunityIcons",
  },
  { title: "Chart", iconName: "piechart", iconSource: "AntDesign" },
  // { title: "Path", iconName: "share", iconSource: "Foundation", },
  // { title: "Kanban", iconName: "view-column", iconSource: "MaterialIcons"},
  // { title: "Gantt", iconName: "chart-gantt", iconSource: "MaterialCommunityIcons"},
  // { title: "Threads", iconName: "wechat", iconSource: "AntDesign"},
  // { title: "Nodes", iconName: "map-marker-path", iconSource: "MaterialCommunityIcons"},
  // { title: "Spacial", iconName: "printer-3d", iconSource: "MaterialCommunityIcons"},
];

// Tabs

export const ViewDisplayTabs = ({}: any) => {
  const display = useRouterLocation()?.paths[3];
  return (
    <ScrollView
      horizontal
      style={{
        width: "100%",
        flexDirection: "row",
      }}
    >
      {optionsDisplayMain?.map((x, i) => (
        <View key={i} style={{ flex: 1, width: 50, height: 50 }}>
          <ViewRouterLinkthemed
            style={{
              padding: 5,
              backgroundColor:
                display === x.title.toLowerCase() ? "gray" : "lightgray",
            }}
            to={`entity/../../../${x.title.toLowerCase()}/display`}
          >
            <View style={{ alignItems: "center", flex: 1 }}>
              <ViewIconMain
                name={x.iconName}
                source={x.iconSource}
                color={"white"}
              />
              <Text style={{ fontSize: 11 }}>{x.title}</Text>
            </View>
          </ViewRouterLinkthemed>
        </View>
      ))}
    </ScrollView>
  );
};

// TableTabs (Temp)

// 'Table Tabs' will be a subcomponent of 'Table' (like 'Table Footer' and'Table Header' are table subcomponents )
// To be moved into the table file (but added here since it is a placeholder and so as not to interfere with current works)
// Or, since this might need to be used by List (and maybe others like timeline) as well, maybe it needs to be its own 'display tabs' module or else we just directly use a primitive 'tabs' module in ViewDisplayTable, ViewDisplayList etc.
// At the moment, it just has 'Types' hardcoded into it as the tabs.
// But, it will be made dynamic (which will allow things like plugins and user interactions to hide this component, switch out the tabs to 'Status' or  other property groupings, etc.)
export const ViewTableTabs = (props: any) => {
  return <Text>["Area","Event","Contact","etc."]</Text>;
};
