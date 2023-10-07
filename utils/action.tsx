// An 'Action' (or 'control'?) is something that can be done to an 'Entity'.

import {
  ViewRouterLinkthemed,
  ViewRouterRoutes,
  ViewRouterRoute,
  useRouterLocation,
  useRouterNavigate,
} from "./router";
import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewTypographySubheading, ViewTypographySubsubheading } from "./typography";
import { ViewControlMain } from "./control";
import { useEntityCreate } from "./entity";
import { arrayTypeMain } from "./type";
import { arrayStatusMain } from "./status";
import { createUuid4 } from "./uuid";
import { ViewDisplayTabs } from "./display";
import { ViewIconMain } from "./icon";
import { ViewFileModal } from "./pdf";
import { TextInput, View, Text, Pressable } from "react-native";
import { useState } from "react";

// Modal

// Not in use, not needed? CG to remove after panel design complete.
// export const ViewActionModal = ({}: any) => {
//   return (
//     <View style={{ flexDirection: "column" }}>
//       <Text>ViewActionModal - To do</Text>
//     </View>
//   );
// };

// Display

// An action component to show the 'display modes' (Pods, form, table etc.)
export const ViewActionDisplay = ({}: any) => {
  return (
    <ViewContainerScroll horizontal style={{ margin: 5 }}>
      <ViewDisplayTabs />
    </ViewContainerScroll>
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
      <ViewTypographySubheading>Add</ViewTypographySubheading>
      <ViewTypographySubsubheading>Add an entity</ViewTypographySubsubheading>
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
          disabled={!state?.title}
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

// Export

export const ViewActionExport = ({}: any) => {
  const native = useRouterNavigate();
  const [statePdfModal, setPdfModal] = useState(false);
  return (
    <View style={{ flexDirection: "row", maxHeight: 200 }}>
      <ViewIconMain
        name={"ios-print-outline"}
        source={"Ionicons"}
        color={"black"}
        size={24}
      />
      <Pressable onPress={() => setPdfModal((old) => !old)}>
        <ViewIconMain
          name={"pdffile1"}
          source={"AntDesign"}
          color={"black"}
          size={24}
        />
      </Pressable>
      <ViewFileModal
        statePdfModal={statePdfModal}
        setPdfModal={() => setPdfModal((old) => !old)}
      />
    </View>
  );
};

// Tabs

export const optionsActionTabs = [
  {
    title: "Display",
    iconName: "eye",
    iconSource: "Feather",
    description: "Change the display mode",
  },
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
    iconSource: "OctIcons",
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
    title: "Export",
    iconName: "export",
    iconSource: "Fontisto",
    description: "Export, print and render/display PDF files",
  },
];

export const ViewActionTabs = ({ auxiliary, schema, focus, display }: any) => {
  const paths = useRouterLocation().paths;
  return (
    <View style={{ flexDirection: "column", backgroundColor: "lightgray" }}>
      <ViewRouterRoutes>
        <ViewRouterRoute path="display" element={<ViewActionDisplay />} />
        <ViewRouterRoute path="control" element={<ViewActionControl />} />
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
        <ViewRouterRoute path="edit" element={<ViewActionEdit />} />
        <ViewRouterRoute path="sync" element={<ViewActionSync />} />
        <ViewRouterRoute path="share" element={<ViewActionShare />} />
        <ViewRouterRoute path="template" element={<ViewActionTemplate />} />
        <ViewRouterRoute path="link" element={<ViewActionLink />} />
        <ViewRouterRoute path="export" element={<ViewActionExport />} />
      </ViewRouterRoutes>
      <View style={{ flexDirection: "row" /*borderWidth: 1*/ }}>
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
                padding: 5,
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
