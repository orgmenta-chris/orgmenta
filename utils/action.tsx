// An 'Action' is something that can be done to an 'Entity'.

import { ViewControlMain } from "./control";
import { ViewFormDynamic } from "./form";
import { ViewDisplayTabs } from "./display";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";
import { ViewFileModal } from "./pdf";
import { ViewContextContainer } from "./context";
import {
  ViewTypographyText,
  ViewTypographySubheading,
  ViewTypographySubsubheading,
} from "./typography";
import {
  ViewContainerStatic,
  ViewContainerColumn,
  ViewContainerRow,
} from "./container";
import {
  ViewRouterLinkthemed,
  ViewRouterRoutes,
  ViewRouterRoute,
  useRouterLocation,
} from "./router";
import { useReactState } from "./react";

// DISPLAY

// An action component to show the 'display modes' (Pods, form, table etc.)
export const ViewActionDisplay = ({}: any) => {
  return (
    <ViewContainerStatic>
        <ViewActionHeader
          title={"Displays"}
          subtitle={"Switch Display Modes"}
          infoText={metaActionDisplay().description}
        />
      <ViewDisplayTabs />
    </ViewContainerStatic>
  );
};

export const metaActionDisplay = () =>{
  return {
    description: "The 'Display' Action Panel allows you to switch between different modes, in order to view your Entity/Module in different data displays"
  }
}

// CONTROL

// A component for sorting, filtering, grouping (or applying presets that automatically do this)
export const ViewActionControl = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeader
        title={"Control"}
        subtitle={"Presets, Filters, Grouping and Sorting"}
        infoText={metaActionControl().description}
      />
      <ViewControlMain />
    </ViewContainerStatic>
  );
};

export const metaActionControl = () =>{
  return {
    description: "The 'Control' Action Panel allows you to apply presets, filter, group and sort the Module/Entity data"
  }
}

// ADD

// A component for creating new entity-relationships
export const ViewActionAdd = ({ schema, focus }: any) => {
  const paths = useRouterLocation().paths;
  schema = schema?.data
    ?.filter(
      (x: any) => x.form_field !== "hidden" // Remove 'hidden' fields (fields that are not meant to be shown on the form view)
    )
    .map((x: any) => {
      return {
        ...x,
        valueDefault:
          x.label === "Category"
            ? [paths[2]] // If category then put in the current category from the url
            : x.valueDefault, // Else alias the defaultValue field to be initial value
      };
    });
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeader title={"Add"} subtitle={"Create entities"} />
      <ViewFormDynamic data={schema} formname={"add"} />
    </ViewContainerStatic>
  );
};

// EDIT

export const ViewActionEdit = ({ schema, focus }: any) => {
  schema = schema?.data?.filter(
    (x: any) => x.form_field !== "hidden" // remove 'hidden' fields (fields that are not meant to be shown on the form view)
  );
  return (
    <ViewContainerStatic style={{ flexDirection: "column", maxHeight: 300 }}>
      <ViewActionHeader title={"Edit"} subtitle={"Update entities"} />
      <ViewFormDynamic data={schema} formname={"add"} />
    </ViewContainerStatic>
  );
};

// SYNC

export const ViewActionSync = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeader title={"Sync"} subtitle={"Sync and Backup Entities"} />
      <ViewTypographyText>ViewActionSync placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Share

export const ViewActionShare = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeader
        title={"Share"}
        subtitle={"Share, Forward, or Update Member Access"}
      />
      <ViewTypographyText>ViewActionShare placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// TEMPLATE

export const ViewActionTemplate = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeader
        title={"Templates"}
        subtitle={"Run rules, import blueprints, or apply other templates"}
      />
      <ViewTypographyText>ViewActionTemplate placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// LINK

export const ViewActionLink = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewActionHeader
        title={"Link"}
        subtitle={"Create / manage entity relationships"}
        infoText={metaActionLink().description}
      />
      <ViewTypographyText>ViewActionLink placeholder</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const metaActionLink = () =>{
  return {
    description: "Relate entities to one another with Relationships"
  }
}

// EXPORT

export const ViewActionExport = ({}: any) => {
  const [statePdfModal, setPdfModal] = useReactState(false);
  return (
    <ViewContainerColumn style={{ flex: 1 }}>
      <ViewActionHeader
        title={"Export"}
        subtitle={"Download, export and backup entities"}
      />
      <ViewContainerRow style={{ flex: 1 }}>
        <ViewContainerStatic style={{ flexDirection: "row", margin: 10 }}>
          <ViewButtonPressable
            onPress={() => console.log("ViewActionExport print button: todo")}
            style={{ margin: 5 }}
          >
            <ViewIconMain
              name={"ios-print-outline"}
              source={"Ionicons"}
              color={"black"}
              size={24}
            />
          </ViewButtonPressable>
          <ViewButtonPressable
            onPress={() => setPdfModal((old) => !old)}
            style={{ margin: 5 }}
          >
            <ViewIconMain
              name={"pdffile1"}
              source={"AntDesign"}
              color={"black"}
              size={24}
            />
          </ViewButtonPressable>
          <ViewFileModal
            statePdfModal={statePdfModal}
            setPdfModal={() => setPdfModal((old) => !old)}
          />
        </ViewContainerStatic>
        <ViewContainerRow>
          <ViewButtonPressable
            onPress={() => ""}
            style={{ margin: 5, backgroundColor: "lightblue" }}
          >
            <ViewTypographyText>
              Webonly:Toggle-PageHeaders(defaultFalse)
            </ViewTypographyText>
          </ViewButtonPressable>
          <ViewButtonPressable
            onPress={() => ""}
            style={{ margin: 5, backgroundColor: "lightblue" }}
          >
            <ViewTypographyText>
              Toggle-IncludeFrameOrJustTheDisplayView
            </ViewTypographyText>
          </ViewButtonPressable>
        </ViewContainerRow>
        <ViewContainerRow />
      </ViewContainerRow>
      <ViewContainerRow>
        <ViewTypographyText>Preview will go here.</ViewTypographyText>
      </ViewContainerRow>
    </ViewContainerColumn>
  );
};

export const metaActionExport = () =>{
  return {
    description: "Download, export and backup entities"
  }
}

// PANELS

export const ViewActionPanels = ({
  auxiliary,
  schema,
  focus,
  display,
}: any) => {
  return (
    <ViewContainerStatic
      style={{
        // margin: 5,
        padding: 5,
        // borderWidth: 1,
        // borderColor: "rgba(180,180,180,1)",
        // borderRadius: 5,
        // flexDirection: "column",
        // backgroundColor: "lightgray",
        minHeight: 40, // for some reason, this is necessary on mobile or the component doesn't has 0 height despite children having heights
        // maxHeight: "90%", // until we implement dragging the topbar of the panel up and down - Chris has some experimental code to test this with.
      }}
    >
      <ViewRouterRoutes>
        <ViewRouterRoute path="display" element={<ViewActionDisplay />} />
        <ViewRouterRoute path="control" element={<ViewActionControl />} />
        <ViewRouterRoute
          path="/add"
          element={<ViewActionAdd schema={schema} focus={focus} />}
        />
        <ViewRouterRoute
          path="edit"
          element={<ViewActionEdit schema={schema} focus={focus} />}
        />
        <ViewRouterRoute path="sync" element={<ViewActionSync />} />
        <ViewRouterRoute path="share" element={<ViewActionShare />} />
        <ViewRouterRoute path="template" element={<ViewActionTemplate />} />
        <ViewRouterRoute path="link" element={<ViewActionLink />} />
        <ViewRouterRoute path="export" element={<ViewActionExport />} />
      </ViewRouterRoutes>
    </ViewContainerStatic>
  );
};

// TABS

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
      style={{
        flexDirection: "column",
        backgroundColor: "lightgray",
        borderColor: "rgba(180,180,180,1)",
        margin: 5,
        paddingTop: 10,
        borderTopWidth: 1,
      }}
    >
      <ViewContainerRow style={{ flexDirection: "row" }}>
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
        <ViewContextContainer infoText={metaActionTabs()?.description} />
      </ViewContainerRow>
    </ViewContainerStatic>
  );
};

export const metaActionTabs = () =>{
  return {
    description: "An 'Action' is an operation that can be done to Entities & Relationships."
  }
}

// HEADER

export const ViewActionHeader = ({ title, subtitle, children, to, infoText }: any) => {
  return (
    <ViewContainerRow>
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
      <ViewContextContainer infoText={infoText} to={to}>{children}</ViewContextContainer>
    </ViewContainerRow>
  );
};
