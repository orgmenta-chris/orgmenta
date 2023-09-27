// An 'Action' is something that can be done to an 'Entity'.

import {
  ViewRouterLink,
  ViewRouterRoutes,
  ViewRouterRoute,
  useRouterLocation,
} from "./router";
import { ViewControlMain } from "./control";
import { useEntityCreate } from "./entity";
import { arrayTypeMain } from "./type";
import { arrayStatusMain } from "./status";
import { createUuid4 } from "./uuid";

import ViewIconMain from "../components/displays/icons/ViewIconMain";
import {
  TextInput,
  View,
  Text,
  Pressable,
  Button,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import RenderHtml from "react-native-render-html";
import { UtilityPlatformMain } from "./platform";

// Modal

export const ViewActionModal = ({}: any) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>ViewActionModal - To do</Text>
    </View>
  );
};

// Control

export const ViewActionControl = ({}: any) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <ViewControlMain />
    </View>
  );
};

// Add

export const ViewActionAdd = ({ auxiliary, schema, focus }: any) => {
  const paths = useRouterLocation()?.paths;
  const category = paths[2];
  const [state, set] =
    paths &&
    useState({
      id: createUuid4(),
      title: "",
      type: "Event",
      status: "0. New",
      categories: [category],
      description: "",
    });
  const create = useEntityCreate(state);
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: "800" }}>Add an entity</Text>
      <Text style={{ fontStyle: "italic" }}>{JSON.stringify(state)}</Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "700" }}>Title:</Text>
        <TextInput
          onChangeText={(text) => set((old) => ({ ...old, title: text }))}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "700" }}>Type:</Text>
        {arrayTypeMain?.map((x, i) => (
          <Pressable
            key={i}
            style={{ backgroundColor: "lightblue", margin: 1 }}
            onPress={() => set((old) => ({ ...old, type: x }))}
          >
            <Text>{x}</Text>
          </Pressable>
        ))}
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "700" }}>Status:</Text>
        {arrayStatusMain?.map((x, i) => (
          <Pressable
            key={i}
            style={{ backgroundColor: "lightblue", margin: 1 }}
            onPress={() => set((old) => ({ ...old, status: x }))}
          >
            <Text>{x}</Text>
          </Pressable>
        ))}
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "700" }}>Categories:</Text>
        <TextInput
          defaultValue={category}
          onChangeText={(text) =>
            set((old) => ({ ...old, categories: text?.split(",") }))
          }
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "700" }}>Description:</Text>
        <TextInput
          onChangeText={(text) => set((old) => ({ ...old, description: text }))}
        />
      </View>

      {/* <ViewFormDynamic data={data} /> */}
      <View style={{ flexDirection: "row" }}>
        <Pressable
          disabled={!state?.title && true}
          style={{ backgroundColor: state?.title ? "lightblue" : "gray" }}
          onPress={() => {
            create.mutate();
            set((old) => ({ ...old, id: createUuid4() }));
          }}
        >
          <Text>Create</Text>
        </Pressable>
      </View>
    </View>
  );
};

// Edit

export const ViewActionEdit = ({}: any) => {
  const [titleState, titleSet] = useState("");
  const [typeState, typeSet] = useState("");
  const [classState, classSet] = useState("");
  const [statusState, statusSet] = useState("");
  const [descriptionState, descriptionSet] = useState("");
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>EDIT</Text>
      <View style={{ flexDirection: "row" }}>
        {/* The following will be made dynamic by Chris (the static fields are a placeholder) */}
        <Text>Title</Text>
        <TextInput onChangeText={(value) => titleSet(value)}></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Type</Text>
        <TextInput onChangeText={(value) => typeSet(value)}></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Class</Text>
        <TextInput onChangeText={(value) => classSet(value)}></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Status</Text>
        <Pressable
          style={{
            backgroundColor: statusState === "0. New" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("0. New")}
        >
          <Text>0. New</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              statusState === "1. Respond" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("1. Respond")}
        >
          <Text>1. Respond</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: statusState === "2. Active" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("2. Active")}
        >
          <Text>2. Active</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              statusState === "3. Waiting" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("3. Waiting")}
        >
          <Text>3. Waiting</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: statusState === "4. Hold" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("4. Hold")}
        >
          <Text>4. Hold</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              statusState === "5. Evaluate" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("5. Evaluate")}
        >
          <Text>5. Evaluate</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              statusState === "6. Cancelled" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("6. Cancelled")}
        >
          <Text>6. Cancelled</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              statusState === "7. Complete" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("7. Complete")}
        >
          <Text>7. Complete</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Description</Text>
        <TextInput onChangeText={(value) => descriptionSet(value)}></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{ backgroundColor: "lightblue" }}
          onPress={() =>
            console.log({
              title: titleState,
              type: typeState,
              class: classState,
              status: statusState,
              description: descriptionState,
            })
          }
        >
          <Text>Create</Text>
        </Pressable>
      </View>
      {/* <View style={{flexDirection:'row'}}>
        <Text>Testing:</Text>
        <Text>{titleState}</Text>
        <Text>{typeState}</Text>
        <Text>{classState}</Text> 
        <Text>{statusState}</Text>
        <Text>{descriptionState}</Text>
      </View> */}
    </View>
  );
};

// Sync

export const ViewActionSync = ({}: any) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>SYNC</Text>
    </View>
  );
};

// Share

export const ViewActionShare = ({}: any) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>SHARE</Text>
    </View>
  );
};

// Template

export const ViewActionTemplate = ({}: any) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>TEMPLATE</Text>
    </View>
  );
};

// Link

export const ViewActionLink = ({}: any) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text>LINK</Text>
      <Text>Create / manage entity relationships here</Text>
    </View>
  );
};

// PDF

export const ViewActionPDF = ({}: any) => {
  const source = {
    html: `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center;">
          <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
            Hello Expo!
          </h1>
          <img
            src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
            style="width: 90vw;" />
        </body>
      </html>
    `,
  };

  const printToFile = async () => {
    if (UtilityPlatformMain.OS === "web") {
      const newWindow: any = window.open("", "_blank");
      newWindow.document.open();
      newWindow.document.write(source.html);
      newWindow.document.close();

      newWindow.addEventListener("load", () => {
        newWindow.print();
        newWindow.close();
      });
    } else {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      const { uri } = await Print.printToFileAsync(source);
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    }
  };

  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "column" }}>
      <Text>PDF</Text>
      <Text>render/display and allow for downloading of PDF files</Text>
      {/* <RenderHtml contentWidth={width} source={source} /> */}
      <Button title="Print to PDF file" onPress={printToFile} />
    </View>
  );
};

// Tabs

export const optionsActionTabs = [
  { title: "View", iconName: "eye", iconSource: "Feather", description: "" },
  {
    title: "Control",
    iconName: "filter",
    iconSource: "Feather",
    description: "filter, group and sort",
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
    title: "Template",
    iconName: "repo-template",
    iconSource: "Octicons",
    description: "manage and run rules/templates",
  },
  {
    title: "Link",
    iconName: "paperclip",
    iconSource: "Feather",
    description: "link/unlink/manage entity relationships",
  },
  {
    title: "PDF",
    iconName: "file",
    iconSource: "Feather",
    description: "render/display and allow for downloading of PDF files",
  },
  // {title:'Display',iconName:'eye',iconSource:'Feather', description: "change the display mode between Calendar, Table, List etc."},// in case we want to make the mode/display choices (calendar, table etc.) within these tabs instead of on their own
];

export const ViewActionTabs = ({ auxiliary, schema, focus, display }: any) => {
    const paths = useRouterLocation().paths;
    return (
        <View style={{ flexDirection: "column", backgroundColor: "lightgray" }}>
            <View style={{ borderWidth: 1 }}>
                <ViewRouterRoutes>
                    <ViewRouterRoute
                        path="/control"
                        element={<ViewActionControl />}
                    />
                    <ViewRouterRoute
                        path="/add"
                        element={
                            <ViewActionAdd
                                auxiliary={auxiliary}
                                schema={schema}
                                focus={focus}
                            />
                        }
                    />
                    <ViewRouterRoute
                        path="/edit"
                        element={<ViewActionEdit />}
                    />
                    <ViewRouterRoute
                        path="/sync"
                        element={<ViewActionSync />}
                    />
                    <ViewRouterRoute
                        path="/share"
                        element={<ViewActionShare />}
                    />
                    <ViewRouterRoute
                        path="/template"
                        element={<ViewActionTemplate />}
                    />
                    <ViewRouterRoute
                        path="/link"
                        element={<ViewActionLink />}
                    />
                </ViewRouterRoutes>
            </View>
            <View style={{ flexDirection: "row", borderWidth: 1 }}>
                {optionsActionTabs?.map((x, i) => (
                    <ViewRouterLinkthemed
                        to={x.title.toLowerCase()}
                        style={{
                            flex: 1,
                        }}
                        key={i}
                    >
                        <View
                            style={{
                                flex: 1,
                                padding:5,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor:
                                    paths[4] === x.title.toLocaleLowerCase()
                                        ? "gray"
                                        : "transparent",
                            }}
                        >
                            <ViewIconMain
                                name={x.iconName}
                                source={x.iconSource}
                                color={"black"}
                                size={24}
                            />
                        </View>
                    </ViewRouterLinkthemed>
                ))}
            </View>
        </View>
    );
};
