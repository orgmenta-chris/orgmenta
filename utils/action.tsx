// An 'Action' is something that can be done to an 'Entity'.

import { ViewControlMain } from "./control";
import { ViewFormDynamic } from "./form";
import { ViewDisplayTabs } from "./display";
import { ViewIconMain } from "./icon";
import { ViewFileModal } from "./pdf";
import { ViewContextContainer } from "./context";
import { ViewTypeTabs } from "./type";
import { ViewButtonIcon, ViewButtonText } from "./button";
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

// CONTAINER

export const ViewActionContainer = (props:any) => {
  /* View for Actions tabs and panels, used by entity.tsx */
  return (
    <ViewContainerStatic
      style={{
        borderTopWidth: 1,
        padding: 5,
        borderColor: "rgba(180,180,180,1)",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "column",
        backgroundColor: "lightgray",
        minHeight: 40,
      }}
    >
      <ViewActionPanels auxiliary={props.auxiliary} schema={props.schema} focus={props.focus} />
      <ViewActionTabs />
    </ViewContainerStatic>
  );
};

// DISPLAY

export const metaActionDisplay = () => {
  return {
    description:
      "The 'Display' Action Panel allows you to switch between different modes, in order to view your Entity/Module in different data displays",
  };
};

export const ViewActionDisplay = () => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Displays"}
        subtitle={"Switch Display Modes"}
        infoText={metaActionDisplay().description}
      />
      <ViewDisplayTabs />
    </ViewContainerColumn>
  );
};

// TYPES

export const metaActionTypes = () => {
  return {
    description:
      "The 'Types' Action Panel allows you to switch between entity types (Events, Items, Locations etc.) and classes (Subtypes)",
  };
};

export const ViewActionTypes = ({}: any) => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Types"}
        subtitle={"Switch between Entity Types"}
        infoText={metaActionTypes().description}
      />
      <ViewTypeTabs />
    </ViewContainerColumn>
  );
};

// CONTROL

export const metaActionControl = () => {
  return {
    description:
      "The 'Control' Action Panel allows you to apply presets, filter, group and sort the Module/Entity data",
  };
};

export const ViewActionControl = () => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Control"}
        subtitle={"Presets, Filters, Grouping and Sorting"}
        infoText={metaActionControl().description}
      />
      <ViewControlMain />
    </ViewContainerColumn>
  );
};

// ADD

export const metaActionAdd = () => {
  return {
    description:
      "The 'Add' Action Panel allows you to create new entities & relationships",
  };
};

export const ViewActionAdd = (props: any) => {
  const paths = useRouterLocation().paths;
  const schema = props.schema?.data
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
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Add"}
        subtitle={"Create entities"}
        infoText={metaActionAdd().description}
      />
      <ViewFormDynamic data={schema} formname={"add"} />
    </ViewContainerColumn>
  );
};

// EDIT

export const metaActionEdit = () => {
  return {
    description:
      "The 'Edit' Action Panel allows you to edit entities & their relationships",
  };
};

export const ViewActionEdit = ({ schema, focus }: any) => {
  schema = schema?.data?.filter(
    (x: any) => x.form_field !== "hidden" // remove 'hidden' fields (fields that are not meant to be shown on the form view)
  );
  return (
    <ViewContainerColumn style={{ flexDirection: "column", maxHeight: 300 }}>
      <ViewActionHeader
        title={"Edit"}
        subtitle={"Update entities"}
        infoText={metaActionEdit().description}
      />
      <ViewFormDynamic data={schema} formname={"add"} />
    </ViewContainerColumn>
  );
};

// SYNC

export const metaActionSync = () => {
  return {
    description:
      "The 'Sync' Action Panel allows you to view sync statuses of entities",
  };
};

export const ViewActionSync = ({}: any) => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Sync"}
        subtitle={"Sync and Backup Entities"}
        infoText={metaActionSync().description}
      />
      <ViewTypographyText>ViewActionSync placeholder</ViewTypographyText>
    </ViewContainerColumn>
  );
};

// SHARE

export const metaActionShare = () => {
  return {
    description:
      "The 'Share' Action Panel allows you to share, forward and provide member access to entities",
  };
};

export const ViewActionShare = ({}: any) => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Share"}
        subtitle={"Share, Forward, or Update Member Access"}
        infoText={metaActionShare().description}
      />
      <ViewTypographyText>ViewActionShare placeholder</ViewTypographyText>
    </ViewContainerColumn>
  );
};

// TEMPLATE

export const metaActionTemplate = () => {
  return {
    description:
      "The 'Template' Action Panel allows you to apply rules/blueprints/templates to entities",
  };
};

export const ViewActionTemplate = ({}: any) => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Templates"}
        subtitle={"Run rules, import blueprints, or apply other templates"}
        infoText={metaActionTemplate().description}
      />
      <ViewTypographyText>ViewActionTemplate placeholder</ViewTypographyText>
    </ViewContainerColumn>
  );
};

// LINK

export const metaActionLink = () => {
  return {
    description:
      "The 'Template' Action Panel  allows you to relate entities to one another with 'Relationships'",
  };
};

export const ViewActionLink = ({}: any) => {
  return (
    <ViewContainerColumn>
      <ViewActionHeader
        title={"Link"}
        subtitle={"Create / manage entity relationships"}
        infoText={metaActionLink().description}
      />
      <ViewTypographyText>ViewActionLink placeholder</ViewTypographyText>
    </ViewContainerColumn>
  );
};

// EXPORT

export const metaActionExport = () => {
  return {
    description: "Download, export and backup entities",
  };
};

export const ViewActionExport = ({}: any) => {
  const [statePdfModal, setPdfModal] = useReactState(false);
  return (
    <ViewContainerColumn style={{ flex: 1 }}>
      <ViewActionHeader
        title={"Export"}
        subtitle={"Download, export and backup entities"}
        infoText={metaActionExport().description}
      />
      <ViewContainerRow style={{ flex: 1 }}>
        <ViewButtonIcon
          onPress={() => console.log("ViewActionExport print button: todo")}
          iconName={"ios-print-outline"}
          iconSource={"Ionicons"}
          iconColor={"black"}
        />
        <ViewButtonIcon
          onPress={() => setPdfModal((old) => !old)}
          iconName={"pdffile1"}
          iconSource={"AntDesign"}
          iconColor={"black"}
        />
        <ViewButtonText
          onPress={() => ""}
          textString={`Webonly:Toggle-PageHeaders(defaultFalse)`}
        />
        <ViewButtonText
          onPress={() => ""}
          textString={`Toggle-IncludeFrameOrJustTheDisplayView`}
        />
      </ViewContainerRow>
      <ViewContainerRow>
        <ViewTypographyText>Preview will go here.</ViewTypographyText>
      </ViewContainerRow>
      <ViewFileModal
        statePdfModal={statePdfModal}
        setPdfModal={() => setPdfModal((old) => !old)}
      />
    </ViewContainerColumn>
  );
};

// PANELS

export const metaActionPanels = () => {
  return {
    description:
      "The routes for the different panels (switches panel depending on url)",
  };
};

export const ViewActionPanels = ({
  auxiliary,
  schema,
  focus,
  display,
}: any) => {
  return (
    <ViewRouterRoutes>
      <ViewRouterRoute path="display" element={<ViewActionDisplay />} />
      <ViewRouterRoute path="types" element={<ViewActionTypes />} />
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
    title: "Types",
    iconName: "type",
    iconSource: "Feather",
    description: "Change the entity type",
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

export const ViewActionTabs = () => {
  const paths = useRouterLocation().paths;
  return (
    <ViewContainerRow
      style={{
        backgroundColor: "lightgray",
        borderColor: "rgba(180,180,180,1)",
        margin: 5,
        paddingTop: 10,
        borderTopWidth: 1,
      }}
    >
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
  );
};

export const metaActionTabs = () => {
  return {
    description:
      "An 'Action' is an operation that can be done to Entities & Relationships.",
  };
};

// HEADER

export const ViewActionHeader = ({
  title,
  subtitle,
  children,
  to,
  infoText,
}: any) => {
  return (
    <ViewContainerRow>
      <ViewTypographySubheading
        style={{ margin: 10, verticalAlign: "bottom" }}
      >
        {title}
      </ViewTypographySubheading>
      <ViewTypographySubsubheading
        style={{
          flex: 1,
          margin: 10,
          verticalAlign: "bottom",
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </ViewTypographySubsubheading>
      <ViewContextContainer infoText={infoText} to={to}>
        {children}
      </ViewContextContainer>
    </ViewContainerRow>
  );
};
