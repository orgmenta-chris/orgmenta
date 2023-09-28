// A 'display' is a way of viewing entities, their relationships, and their attributes.
// It is a 'perspective into the graph'.
// You can view entities and their relationships in different displays (e.g. Table, list, calendar) and filters.

import {
  ViewRouterLink,
  ViewRouterLinkthemed,
  useRouterLocation,
} from "./router";
import { ViewFormDynamic } from "./form";
import { ViewListMain } from "./list";
import { ViewChartMain } from "./chart";
import { ViewPathMain } from "./path";
import { ViewMapMobile } from "./map";
import { UtilityPlatformMain } from "./platform";
import {
  ViewPodMain,
  ViewPodInfo,
  ViewPodList,
  ViewPodTabs,
  ViewPodExample,
} from "./pod";
import { ViewIconMain } from "./icon";
// import { ViewTableMain, useTableColumns } from "./table";
// import { ViewJsonMain } from "./json";
// import { ViewIconMain } from "./icon";

import { ReactElement, memo, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ViewStyle,
  Button,
} from "react-native";
import ViewMapWeb from "../components/displays/maps/ViewDisplayMaps";
// import ViewDisplayCalendar from "../components/displays/calendar/ViewDisplayCalendar";
// import ViewDisplayForm from "../components/displays/forms/ViewDisplayForm";
// import ViewDisplayList from "../components/displays/list/ViewDisplayList";
// import ViewDisplayMaps from "../components/displays/maps/ViewDisplayMaps";
// import ViewDisplayPods from "../components/displays/pods/ViewDisplayPods";
// import ViewDisplayTable from "../components/displays/table/ViewDisplayTable";
// import ViewJsonMain from "../components/displays/json/ViewJsonMain";
import { ViewTimelineMain, TypeimelineMain } from "react-native-timeline-flatlist";
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
      <ViewPodExample />
      <ViewPodExample />
      <ViewPodExample />
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
          newItem.value = props.focus.data?.[0]?.[newItem.name_singular];
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

export const ViewDisplayTable = (props: any) => {
  const schema = props.schema;
  // const columns = useTableColumns(
  //   schema.data?.map(
  //     (x: { focus_columns: { name_singular: any } }) =>
  //       x.focus_columns.name_singular
  //   )
  // );
  const auxiliary = props.auxiliary;
  return (
    <>
      <ViewTableTabs />
      {/* <ViewTableMain columns={columns} data={auxiliary.data} /> */}
    </>
  );
};

// Calendar

export const ViewDisplayCalendar = (props: any) => {
  interface CalendarProps<T extends ICalendarEventBase> {
    events: T[];
    height: number;
    overlapOffset?: number;
    hourRowHeight?: number;
    ampm?: boolean;
    date?: Date;
    eventCellStyle?: EventCellStyle<T>;
    calendarContainerStyle?: ViewStyle;
    headerContainerStyle?: ViewStyle;
    bodyContainerStyle?: ViewStyle;
    renderEvent?: (
      event: T,
      touchableOpacityProps: CalendarTouchableOpacityProps
    ) => ReactElement | null;
    renderHeader?: React.ComponentType<CalendarHeaderProps<T> & { mode: Mode }>;
    renderHeaderForMonthView?: React.ComponentType<CalendarHeaderForMonthViewProps>;
    locale?: string;
    hideNowIndicator?: boolean;
    mode?: Mode;
    scrollOffsetMinutes?: number;
    showTime?: boolean;
    swipeEnabled?: boolean;
    weekStartsOn?: WeekNum;
    weekEndsOn?: WeekNum;
    onChangeDate?: DateRangeHandler;
    onPressCell?: (date: Date) => void;
    onPressDateHeader?: (date: Date) => void;
    onPressEvent?: (event: T) => void;
    eventMinHeightForMonthView?: number;
    activeDate?: Date;
    moreLabel?: string;
    showAdjacentMonths?: boolean;
    sortedMonthView?: boolean;
  }

  interface ICalendarEvent extends ICalendarEventBase {}

  const [mode, setMode] = useState("month");

  const events: ICalendarEvent[] = [
    {
      title: "Meeting 1",
      start: new Date(2023, 8, 1, 10, 0), // September 1st, 10:00 AM
      end: new Date(2023, 8, 1, 11, 0), // September 1st, 11:00 AM
    },
    {
      title: "Conference",
      start: new Date(2023, 8, 5, 14, 30), // September 5th, 2:30 PM
      end: new Date(2023, 8, 5, 17, 0), // September 5th, 5:00 PM
    },
    {
      title: "Lunch",
      start: new Date(2023, 8, 10, 12, 0), // September 10th, 12:00 PM
      end: new Date(2023, 8, 10, 13, 0), // September 10th, 1:00 PM
    },
    {
      title: "Team Meeting",
      start: new Date(2023, 8, 15, 9, 30), // September 15th, 9:30 AM
      end: new Date(2023, 8, 15, 10, 30), // September 15th, 10:30 AM
    },
    {
      title: "Workshop",
      start: new Date(2023, 8, 20, 14, 0), // September 20th, 2:00 PM
      end: new Date(2023, 8, 20, 17, 0), // September 20th, 5:00 PM
    },
    {
      title: "Coffee Break",
      start: new Date(2023, 8, 25, 15, 0), // September 25th, 3:00 PM
      end: new Date(2023, 8, 25, 15, 30), // September 25th, 3:30 PM
    },
    {
      title: "Training",
      start: new Date(2023, 8, 3, 9, 0), // September 3rd, 9:00 AM
      end: new Date(2023, 8, 3, 12, 0), // September 3rd, 12:00 PM
    },
    {
      title: "Project Review",
      start: new Date(2023, 8, 8, 13, 0), // September 8th, 1:00 PM
      end: new Date(2023, 8, 8, 14, 30), // September 8th, 2:30 PM
    },
    {
      title: "Client Meeting",
      start: new Date(2023, 8, 12, 11, 0), // September 12th, 11:00 AM
      end: new Date(2023, 8, 12, 12, 0), // September 12th, 12:00 PM
    },
    {
      title: "Team Building",
      start: new Date(2023, 8, 17, 10, 0), // September 17th, 10:00 AM
      end: new Date(2023, 8, 17, 16, 0), // September 17th, 4:00 PM
    },
    {
      title: "Lunch Meeting",
      start: new Date(2023, 8, 22, 12, 30), // September 22nd, 12:30 PM
      end: new Date(2023, 8, 22, 13, 30), // September 22nd, 1:30 PM
    },
    {
      title: "Training Session",
      start: new Date(2023, 8, 6, 15, 0), // September 6th, 3:00 PM
      end: new Date(2023, 8, 6, 17, 0), // September 6th, 5:00 PM
    },
    {
      title: "Client Presentation",
      start: new Date(2023, 8, 13, 14, 0), // September 13th, 2:00 PM
      end: new Date(2023, 8, 13, 16, 0), // September 13th, 4:00 PM
    },
    {
      title: "Project Kickoff",
      start: new Date(2023, 8, 27, 9, 0), // September 27th, 9:00 AM
      end: new Date(2023, 8, 27, 10, 0), // September 27th, 10:00 AM
    },
    {
      title: "Team Lunch",
      start: new Date(2023, 8, 30, 12, 0), // September 30th, 12:00 PM
      end: new Date(2023, 8, 30, 13, 0), // September 30th, 1:00 PM
    },
  ];

  const calendarProps: CalendarProps<ICalendarEventBase> = {
    events,
    height: 600,
    overlapOffset: 10, // Set overlap offset to 10 pixels
    hourRowHeight: 60, // Set hour row height to 60 pixels
    ampm: true, // Display time in AM/PM format
    // date: new Date(2023, 8, 1), // Set the initial date to September 1st, 2023
    eventCellStyle: () => {
      // Custom event cell style function
      return {
        backgroundColor: "cyan",
        borderColor: "black",
      };
    },
    calendarContainerStyle: {
      // Custom styles for the calendar container
      backgroundColor: "lightgray",
    },
    headerContainerStyle: {
      // Custom styles for the header container
      backgroundColor: "white",
    },
    bodyContainerStyle: {
      // Custom styles for the body container
      backgroundColor: "white",
    },
    renderEvent: (event, touchableOpacityProps) => {
      // Custom render for events
      return (
        <TouchableOpacity {...touchableOpacityProps}>
          <Text>{event.title}</Text>
          <Text>{`${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}`}</Text>
        </TouchableOpacity>
      );
    },
    // renderHeader: (props) => {
    //   // Custom render for header
    //   return <CalendarHeader {...props} />;
    // },
    // renderHeaderForMonthView: (props) => {
    //   // Custom render for month view header
    //   return <CalendarHeaderForMonthView {...props} />;
    // },
    locale: "en-US", // Set the locale to English (United States)
    hideNowIndicator: false, // Show the "now" indicator
    // @ts-ignore
    mode: mode, // Set the initial mode to month view
    scrollOffsetMinutes: 30, // Scroll calendar by 30 minutes
    showTime: true, // Show time on events
    swipeEnabled: true, // Enable swipe navigation
    weekStartsOn: 0, // Start the week on Sunday
    weekEndsOn: 6, // End the week on Saturday
    onChangeDate: (dateRange:any) => {
      // Handle date range change
      console.log("Date range changed:", dateRange);
    },
    onPressCell: (date) => {
      // Handle cell press
      console.log("Cell pressed:", date);
    },
    onPressDateHeader: (date) => {
      // Handle date header press
      console.log("Date header pressed:", date);
    },
    onPressEvent: (event) => {
      // Handle event click
      console.log("Event clicked:", event);
    },
    eventMinHeightForMonthView: 40, // Set the minimum event height for month view
    activeDate: new Date(), // Set the active date to September 15th, 2023
    moreLabel: "More", // Customize the "more" label for overlapping events
    showAdjacentMonths: true, // Show adjacent months in month view
    sortedMonthView: false, // Disable sorted month view
  };

  return (
    <View style={{ minHeight: 400 }}>
      <View style={{ marginVertical: 10 }}>
        {
          // @ts-ignore
          <Calendar {...calendarProps} />
        }
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
          marginBottom: 10,
        }}
      >
        <Button onPress={() => setMode("month")} title="Month" />
        <Button onPress={() => setMode("week")} title="Week" />
        <Button onPress={() => setMode("3days")} title="3 Days" />
        <Button onPress={() => setMode("day")} title="Day" />
      </View>
    </View>
  );
};

// Timeline
export const ViewDisplayTimeline = (props: any) => {
  const data = [
    { time: "09:00", title: "Event 1", description: "Event 1 Description" },
    { time: "10:45", title: "Event 2", description: "Event 2 Description" },
    { time: "12:00", title: "Event 3", description: "Event 3 Description" },
    { time: "14:00", title: "Event 4", description: "Event 4 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
    { time: "16:30", title: "Event 5", description: "Event 5 Description" },
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

  // this function essentially converts the user addresses into coordinates that can be used to render markers on the map.
  const goeCodeAddresses = () => {
    // todo
  };

  useEffect(() => {
    fetchWorldMap();
  }, []);

  return (
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

export const ViewDisplayJson = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  // const columns = useTableColumns(
  //   schema.data?.map((x: any) => x.focus_columns.name_singular)
  // );
  return (
    <View style={{ flexDirection: "column" }}>
      {/* <ViewJsonMain schema={schema} auxiliary={auxiliary} columns={columns} /> */}
      {/* todo */}
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
  chart: ViewDisplayJson,
  path: ViewDisplayJson,
  json: ViewDisplayJson,
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
  { title: "Chart", iconName: "piechart", iconSource: "AntDesign" },
  // { title: "Path", iconName: "share", iconSource: "Foundation", },
  // { title: "Json", iconName: "code-json", iconSource: "MaterialCommunityIcons"},
  // { title: "Kanban", iconName: "view-column", iconSource: "MaterialIcons"},
  // { title: "Gantt", iconName: "chart-gantt", iconSource: "MaterialCommunityIcons"},
  // { title: "Threads", iconName: "wechat", iconSource: "AntDesign"},
  // { title: "Nodes", iconName: "map-marker-path", iconSource: "MaterialCommunityIcons"},
  // { title: "Spacial", iconName: "printer-3d", iconSource: "MaterialCommunityIcons"},
];

// Tabs

export const ViewDisplayTabs = ({ id }: any) => {
  const display = useRouterLocation()?.paths[3];
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
      }}
    >
      {optionsDisplayMain?.map((x, i) => (
        <View key={i} style={{ flex: 1 }}>
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
              <Text>{x.title}</Text>
            </View>
          </ViewRouterLinkthemed>
        </View>
      ))}
    </View>
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
