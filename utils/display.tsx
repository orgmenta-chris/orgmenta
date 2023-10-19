// A 'display' is a way of viewing entities, their relationships, and their attributes.
// It is a 'perspective into the graph'.
// You can 'view entities and their relationships' in different displays (e.g. Table, list, calendar) and filters.
// The Display Components transform the entity/schema/relationships data then provide them to the relevant component
// (e.g. ViewDisplayTable transforms entities data, then provides them to the table component from table.js )

import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewRouterLinkthemed, useRouterLocation } from "./router";
import { ViewTypographyText } from "./typography";
import { ViewFormDynamic } from "./form";
import { ViewListMain } from "./list";
import { ViewChartMain } from "./chart";
import { ViewPathContainer } from "./path";
import { ViewMapMobile } from "./map";
import { ViewCalendarContainer } from "./calendar";
import { ViewTimelineContainer } from "./timeline";
import { ViewPodContainer, ViewPodInfo, ViewPodList, ViewPodTabs } from "./pod";
import { ViewIconMain } from "./icon";
import { ViewJsonContainer, objectJsonExample } from "./json";
import { UtilityPlatformMain } from "./platform";
import {
  WrapperReactMemo,
  useReactEffect,
  useReactMemo,
  useReactState,
} from "./react";
import ViewMapWeb from "../components/displays/maps/ViewDisplayMaps";
import { Map, Marker, GeoJson } from "pigeon-maps";
import {
  ViewTableContainer,
  Person,
  UseDisplayTable,
  fuzzySort,
  makeData,
} from "./table";
import { ColumnDef } from "@tanstack/react-table";
import { Type } from "@stripe/stripe-react-native/lib/typescript/src/types/Token";
import { ViewKanbanContainer } from "./kanban";
import { ViewRelationshipsModal } from "./relationships";
import { ViewThreadsComponent } from "./threads";
// import { Map as ImmutableMap } from "immutable";

// MAIN

export type TypeDisplayMain = {
  schema: any;
  focus: any;
  auxiliary: any;
};

// DYNAMIC

// Select the correct display component depending on what is requested with the 'display' prop.
export const ViewDisplayDynamic = WrapperReactMemo(
  ({ auxiliary, schema, focus, display }: any) => {
    // The main display component that switches between different components
    const Component = objectDisplayComponents[display || "list"]; // may need to memoize/useCallback this
    return (
      <>
        <Component auxiliary={auxiliary} schema={schema} focus={focus} />
        <ViewRelationshipsModal/>
      </>
    );
  }
);

// LIST

export const ViewDisplayList = (props: any) => {
  // const focus = props.focus;
  const auxiliary = props.auxiliary;
  // const aux = auxiliary?.data?.filter(x=>x.relationships && Object.keys(x.relationships)?.length>0 )
  // console.log('aux', auxiliary?.data?.filter(x=>x.relationships))
  // console.log('aux0', auxiliary?.data?.[0]);
  return <ViewListMain data={auxiliary?.data} />;
};

// CHART

export const ViewDisplayChart = (props: any) => {
  const auxiliary = props.auxiliary;
  // const focus = props.focus;
  return <ViewChartMain data={auxiliary?.data} />;
};

// PODS

export const ViewDisplayPods = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const focus = props.focus;
  const data = "make focus into an array and concat with aux";
  return (
    <ViewPodContainer items={auxiliary} schema={schema.data}>
      {/* <ViewPodList title={"Example List Pod"} data={auxiliary.data} /> */}
      {/* <ViewPodExample />
      <ViewPodExample />
      <ViewPodExample /> */}
    </ViewPodContainer>
  );
};

//todo
// export const metaDisplayPods = () =>{
//   return {
//     description: "The 'Pod' container holds custom widgets for the current Focus/Entity-Relationships."
//   }
// }

// FORM

export const ViewDisplayForm = (props: TypeDisplayForm) => {
  // A component to show entity data in a 'form' display
  const dataTransformed = transformDisplayForm(props);
  return <ViewFormDynamic data={dataTransformed} formname={"form"} />;
};

export const transformDisplayForm = (props: TypeDisplayForm) => {
  // Tranform the (focus, auxiliary and attribute) data specifically for the Form display.
  // Some of this functionality (any functionality that is not specific to 'form' and needs to be prepped in the same way in all other displays) will be moved to the rpc function query in supabase, else the relevant rpc hooks in this codebase)
  return useReactMemo(() => {
    let items: any = [];
    if (props.schema && props.focus.data && props.auxiliary) {
      props?.schema?.data?.forEach((oldItem: any) => {
        let newItem = { ...oldItem, ...oldItem.auxiliary_columns };
        // if the attribute is 'relationship' we know that it is in the relationship table instead of being a column on the entity table.
        if (oldItem.focus_columns.cell_field === "relationship") {
          newItem.table = "relationships";
          newItem.value = "(relationships)"; // props.auxiliary.data to be filtered here (todo)'
        } else {
          newItem.table = "entities";
          newItem.value = newItem[newItem.name_singular];
        }
        newItem.queryId = newItem.id + newItem.side; // Create a unique id to store in field state/cache
        delete newItem.focus_columns;
        delete newItem.auxiliary_columns;
        items.push(newItem);
      });
      return items;
    }
  }, [props.schema, props.focus.data, props.auxiliary]);
};

export type TypeDisplayForm = TypeDisplayMain;

// TABLE

export const ViewDisplayTable = (props: any) => {
  return (
    <ViewTableContainer />
  );
};

// CALENDAR

export const ViewDisplayCalendar = (props: any) => {
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewCalendarContainer />
      {/* <ViewCalendarMain/> */}
    </ViewContainerStatic>
  );
};

// TIMELINE

export const ViewDisplayTimeline = (props: any) => {
  return (
    <ViewContainerStatic style={{ height: "100%" }}>
      <ViewTimelineContainer />
    </ViewContainerStatic>
  );
};

// Maps
// Bring PigeonMaps (from components..../ViewDisplayMaps etc.) into a maps.tsx.
// Also add the data into a useQuery so that it caches everything (including the image if possible?)
export const ViewDisplayMaps = (props: any) => {
  const { customerAddress } = props; // this data could be geocoded into lat and long coordinates for them to be rendered on the map
  const [worldMapJSON, setWorldMapJSON] = useReactState(null);
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
  useReactEffect(() => {
    fetchWorldMap();
  }, []);
  return UtilityPlatformMain.OS !== "web" ? (
    <ViewMapMobile />
  ) : (
    <ViewContainerStatic style={{ maxHeight: 400 }}>
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
    </ViewContainerStatic>
  );
};

// KANBAN

export const ViewDisplayKanban = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewKanbanContainer />
    </ViewContainerStatic>
  );
};

// GANTT

export const ViewDisplayGantt = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewDisplayGantt Placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// THREADS

export const ViewDisplayThreads = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewThreadsComponent/>
    </ViewContainerStatic>
  );
};

// NODES

export const ViewDisplayNodes = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewDisplayNodes Placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// SPACIAL

export const ViewDisplaySpacial = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewDisplaySpacial Placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// JSON

export const ViewDisplayJson = (props: TypeDisplayJson) => {
  const dataTransformed = transformDisplayForm(props);
  return (
    <ViewJsonContainer
      data={dataTransformed}
      // data={objectJsonExample}
    />
  );
};

export const transformDisplayJson = (props: TypeDisplayJson) => {
  // Tranform the (focus, auxiliary and attribute) data specifically for the Form display.
  // Some of this functionality (any functionality that is not specific to 'form' and needs to be prepped in the same way in all other displays) will be moved to the rpc function query in supabase, else the relevant rpc hooks in this codebase)
  return useReactMemo(() => {
    let items: any = [];
    if (props.schema && props.focus.data && props.auxiliary) {
      props?.schema?.data?.forEach((oldItem: any) => {
        let newItem = { ...oldItem, ...oldItem.auxiliary_columns };
        // if the attribute is 'relationship' we know that it is in the relationship table instead of being a column on the entity table.
        if (oldItem.focus_columns.cell_field === "relationship") {
          newItem.table = "relationships";
          newItem.value = "(relationships)"; // props.auxiliary.data to be filtered here (todo)'
        } else {
          newItem.table = "entities";
          newItem.value = newItem[newItem.name_singular];
        }
        newItem.queryId = newItem.id + newItem.side; // Create a unique id to store in field state/cache
        delete newItem.focus_columns;
        delete newItem.auxiliary_columns;
        items.push(newItem);
      });
      return items;
    }
  }, [props.schema, props.focus.data, props.auxiliary]);
};

export type TypeDisplayJson = TypeDisplayMain;

// PATH

export const ViewDisplayPath = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewDisplayPath Placeholder</ViewTypographyText>
      <ViewPathContainer />
    </ViewContainerStatic>
  );
};

// COMPONENTS

export const objectDisplayComponents: any = {
  pods: ViewDisplayPods,
  form: ViewDisplayForm,
  list: ViewDisplayList,
  table: ViewDisplayTable,
  calendar: ViewDisplayCalendar,
  timeline: ViewDisplayTimeline,
  maps: ViewDisplayMaps,
  json: ViewDisplayJson,
  chart: ViewDisplayChart,
  path: ViewDisplayPath,
  kanban: ViewDisplayKanban,
  gantt: ViewDisplayGantt,
  threads: ViewDisplayThreads,
  nodes: ViewDisplayNodes,
  spacial: ViewDisplaySpacial,
};

// OPTIONS

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
  { title: "Path", iconName: "share", iconSource: "Foundation" },
  { title: "Kanban", iconName: "view-column", iconSource: "MaterialIcons" },
  {
    title: "Gantt",
    iconName: "chart-gantt",
    iconSource: "MaterialCommunityIcons",
  },
  { title: "Threads", iconName: "wechat", iconSource: "AntDesign" },
  {
    title: "Nodes",
    iconName: "map-marker-path",
    iconSource: "MaterialCommunityIcons",
  },
  {
    title: "Spacial",
    iconName: "printer-3d",
    iconSource: "MaterialCommunityIcons",
  },
];

// TABS

export const ViewDisplayTabs = ({}: any) => {
  const display = useRouterLocation()?.paths[3];
  return (
    <ViewContainerScroll
      horizontal
      style={{
        width: "100%",
        flexDirection: "row",
      }}
    >
      {optionsDisplayMain?.map((x, i) => (
        <ViewContainerStatic key={i} style={{ flex: 1, width: 50, height: 50 }}>
          <ViewRouterLinkthemed
            style={{
              padding: 5,
              backgroundColor:
                display === x.title.toLowerCase() ? "gray" : "lightgray",
            }}
            to={`entity/../../../${x.title.toLowerCase()}/display`}
          >
            <ViewContainerStatic style={{ alignItems: "center", flex: 1 }}>
              <ViewIconMain
                name={x.iconName}
                source={x.iconSource}
                color={"white"}
              />
              <ViewTypographyText style={{ fontSize: 11 }}>
                {x.title}
              </ViewTypographyText>
            </ViewContainerStatic>
          </ViewRouterLinkthemed>
        </ViewContainerStatic>
      ))}
    </ViewContainerScroll>
  );
};
