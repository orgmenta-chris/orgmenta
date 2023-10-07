// An 'Action' (or 'control'?) is something that can be done to an 'Entity'.

import { useEntityCreate } from "./entity";
import { useModalVisibility } from "./modal";
import { ViewContainerStatic } from "./container";
import { ViewInputText } from "./input";
import { ViewControlMain } from "./control";
import { ViewFormDynamic } from "./form";
import { createUuid4 } from "./uuid";
import { ViewDisplayTabs } from "./display";
import { ViewIconMain } from "./icon";
import { ViewFileModal } from "./pdf";
import { ViewHelpContainer } from "./help";
import {
  ViewTypographyText,
  ViewTypographySubheading,
  ViewTypographySubsubheading,
} from "./typography";
import {
  ViewRouterLinkthemed,
  ViewRouterRoutes,
  ViewRouterRoute,
  useRouterLocation,
  useRouterNavigate,
} from "./router";
import { arrayTypeMain } from "./type";
import { arrayStatusMain } from "./status";
import { Pressable } from "react-native";
import { useState } from "react";

// Display

// An action component to show the 'display modes' (Pods, form, table etc.)
export const ViewActionDisplay = ({}: any) => {
  return (
    <ViewContainerStatic>
      <ViewActionHeading title={"Displays"} subtitle={"Switch Display Modes"} />
      <ViewDisplayTabs />
    </ViewContainerStatic>
  );
};

// Control

export const ViewActionControl = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading
        title={"Control"}
        subtitle={"Presets, Filters, Grouping and Sorting"}
      />
      <ViewControlMain />
    </ViewContainerStatic>
  );
};


// ADD

// state to keep the form values etc. in.
// export const useActionAdd = () => {
//   const queryClient = useQueryClient();
//   // return () => {
//   //   queryClient.setQueryData(["modal", modalName], (oldData: any) => {
//   //     return { ...oldData, visible: !oldData?.visible };
//   //   });
//   // };
// };

export const ViewActionAdd = ({ auxiliary, schema, focus }: any) => {
  // const test = useActionAdd();
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
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading title={"Add"} subtitle={"Create entities"} />
      {/* <ViewTypographyText style={{ fontStyle: "italic" }}>{testing: JSON.stringify(state)}</ViewTypographyText> */}
      {/* <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText style={{ fontWeight: "700" }}>
          Title:
        </ViewTypographyText>
        <ViewInputText
          onChangeText={(text) => set((old) => ({ ...old, title: text }))}
        />
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText style={{ fontWeight: "700" }}>
          Type:
        </ViewTypographyText>
        {arrayTypeMain?.map((x, i) => (
          <Pressable
            key={i}
            style={{ backgroundColor: "lightblue", margin: 1 }}
            onPress={() => set((old) => ({ ...old, type: x }))}
          >
            <ViewTypographyText>{x}</ViewTypographyText>
          </Pressable>
        ))}
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText style={{ fontWeight: "700" }}>
          Status:
        </ViewTypographyText>
        {arrayStatusMain?.map((x, i) => (
          <Pressable
            key={i}
            style={{ backgroundColor: "lightblue", margin: 1 }}
            onPress={() => set((old) => ({ ...old, status: x }))}
          >
            <ViewTypographyText>{x}</ViewTypographyText>
          </Pressable>
        ))}
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText style={{ fontWeight: "700" }}>
          Categories:
        </ViewTypographyText>
        <ViewInputText
          defaultValue={category}
          onChangeText={(text) =>
            set((old) => ({ ...old, categories: text?.split(",") }))
          }
        />
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText style={{ fontWeight: "700" }}>
          Description:
        </ViewTypographyText>
        <ViewInputText
          onChangeText={(text) => set((old) => ({ ...old, description: text }))}
        />
      </ViewContainerStatic>

      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <Pressable
          disabled={!state?.title}
          style={{ backgroundColor: state?.title ? "lightblue" : "gray" }}
          onPress={() => {
            create.mutate();
            set((old) => ({ ...old, id: createUuid4() }));
          }}
        >
          <ViewTypographyText>Create</ViewTypographyText>
        </Pressable>
      </ViewContainerStatic> */}
      <ViewFormDynamic data={data} />
    </ViewContainerStatic>
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
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading title={"Edit"} subtitle={"Update entities"} />
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        {/* The following will be made dynamic by Chris (the static fields are a placeholder) */}
        <ViewTypographyText>Title</ViewTypographyText>
        <ViewInputText
          onChangeText={(value) => titleSet(value)}
        ></ViewInputText>
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText>Type</ViewTypographyText>
        <ViewInputText onChangeText={(value) => typeSet(value)}></ViewInputText>
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText>Class</ViewTypographyText>
        <ViewInputText
          onChangeText={(value) => classSet(value)}
        ></ViewInputText>
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText>Status</ViewTypographyText>
        <Pressable
          style={{
            backgroundColor: statusState === "0. New" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("0. New")}
        >
          <ViewTypographyText>0. New</ViewTypographyText>
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
          <ViewTypographyText>1. Respond</ViewTypographyText>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: statusState === "2. Active" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("2. Active")}
        >
          <ViewTypographyText>2. Active</ViewTypographyText>
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
          <ViewTypographyText>3. Waiting</ViewTypographyText>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: statusState === "4. Hold" ? "gray" : "lightblue",
            margin: 2,
            padding: 4,
          }}
          onPress={() => statusSet("4. Hold")}
        >
          <ViewTypographyText>4. Hold</ViewTypographyText>
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
          <ViewTypographyText>5. Evaluate</ViewTypographyText>
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
          <ViewTypographyText>6. Cancelled</ViewTypographyText>
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
          <ViewTypographyText>7. Complete</ViewTypographyText>
        </Pressable>
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText>Description</ViewTypographyText>
        <ViewInputText
          onChangeText={(value) => descriptionSet(value)}
        ></ViewInputText>
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
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
          <ViewTypographyText>Create</ViewTypographyText>
        </Pressable>
      </ViewContainerStatic>
      {/* <ViewContainerStatic style={{flexDirection:'row'}}>
        <ViewTypographyText>Testing:</ViewTypographyText>
        <ViewTypographyText>{titleState}</ViewTypographyText>
        <ViewTypographyText>{typeState}</ViewTypographyText>
        <ViewTypographyText>{classState}</ViewTypographyText> 
        <ViewTypographyText>{statusState}</ViewTypographyText>
        <ViewTypographyText>{descriptionState}</ViewTypographyText>
      </ViewContainerStatic> */}
    </ViewContainerStatic>
  );
};

// Sync

export const ViewActionSync = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading title={"Sync"} subtitle={"Sync and Backup Entities"} />
      <ViewTypographyText>ViewActionSync placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Share

export const ViewActionShare = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading
        title={"Share"}
        subtitle={"Share, Forward, or Update Member Access"}
      />
      <ViewTypographyText>ViewActionShare placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Template

export const ViewActionTemplate = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading
        title={"Templates"}
        subtitle={"Run rules, import blueprints, or apply other templates"}
      />
      <ViewTypographyText>ViewActionTemplate placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Link

export const ViewActionLink = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading
        title={"Link"}
        subtitle={"Create / manage entity relationships"}
      />
      <ViewTypographyText>ViewActionLink placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Export

export const ViewActionExport = ({}: any) => {
  const [statePdfModal, setPdfModal] = useState(false);
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeading
        title={"Export"}
        subtitle={"Download, export and backup entities"}
      />
      <ViewContainerStatic style={{ flexDirection: "row", margin: 10 }}>
        <Pressable
          onPress={() => console.log('ViewActionExport print button: todo')}
          style={{ margin: 5 }}
        >
          <ViewIconMain
            name={"ios-print-outline"}
            source={"Ionicons"}
            color={"black"}
            size={24}
          />
        </Pressable>
        <Pressable
          onPress={() => setPdfModal((old) => !old)}
          style={{ margin: 5 }}
        >
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
      </ViewContainerStatic>
    </ViewContainerStatic>
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
    <ViewContainerStatic
      style={{ flexDirection: "column", backgroundColor: "lightgray" }}
    >
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
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        {optionsActionTabs?.map((x, i) => (
          <ViewRouterLinkthemed
            to={x.title.toLowerCase()}
            style={{
              flex: 1,
            }}
            key={i}
          >
            <ViewContainerStatic
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
            </ViewContainerStatic>
          </ViewRouterLinkthemed>
        ))}
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};

export const ViewActionHeading = ({ title, subtitle }: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "row" }}>
      <ViewTypographySubheading
        style={{ margin: 10, textAlignVertical: "bottom" }}
      >
        {title}
      </ViewTypographySubheading>
      <ViewTypographySubsubheading
        style={{
          flex: 1,
          margin: 10,
          textAlignVertical: "bottom",
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </ViewTypographySubsubheading>
      <ViewHelpContainer />
    </ViewContainerStatic>
  );
};
