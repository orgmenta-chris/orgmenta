// Chris is working on this.
// It is a form of display (alongside calendar, table etc.).
// This display is resizable 'pods' that can be moved around on a grid, pinned etc.
// E.g. on the 'invoicing' category entity, you could pin an 'unsent invoices count' widget to to this display.

import {
  ViewContainerStatic,
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerScroll,
} from "./container";
import {
  ViewRouterLink,
  ViewRouterLinkthemed,
  useRouterLocation,
} from "./router";
import { ViewListMain } from "./list";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographySubsubheading,
  ViewTypographyText,
} from "./typography";
import { useAuxiliaryArray } from "./auxiliary";
import { useSpaceState, TypeSpaceState } from "./space";
import { data } from "./static";
import { useAuthSession } from "./auth";
import { ViewContextContainer, useContextState } from "./context";
import { useHelpState } from "./help";
import { useWindowDimensions } from "./window";
import { useEntitySingle } from "./entity";
import { ViewButtonLink } from "./button";
import { ViewTabLink } from "./tab";
import { useReactState } from "./react";

// CONTAINER

export const ViewPodContainer = ({ items, children }: any) => {
  // A comtainer to show all enabled 'pods' (widgets for the 'front page of a business module')
  const isGuest = useAuthSession()?.data?.currentUser === "Guest";
  const helpEnabled = useHelpState()?.data?.enabled;
  const salesEnabled = true; // to do
  return (
    <ViewContainerScroll style={{ flex: 1 }}>
      <ViewPodInfo />
      <ViewPodTabs />
      {(isGuest || salesEnabled) && <ViewPodSalespitch />}
      {(isGuest || salesEnabled) && <ViewPodIntegrations />}
      {(isGuest || salesEnabled || helpEnabled) && <ViewPodGuides />}
      <ViewPodPresets />
      <ViewPodCategoryrelated />
    </ViewContainerScroll>
  );
};

// LIST

export const ViewPodList = ({ items, children }: any) => {
  return <ViewTypographyText>ViewPodList (todo)</ViewTypographyText>;
};

// EXAMPLE

export const ViewPodExample = () => {
  // Temporary examplepod
  return (
    <ViewContainerColumn
      style={{
        margin: 5,
      }}
    >
      <ViewContainerStatic style={{ height: 40, backgroundColor: "lightgray" }}>
        <ViewTypographyText style={{ fontSize: 16, fontStyle: "italic" }}>
          Another Example Pod
        </ViewTypographyText>
        <ViewTypographyText style={{ fontSize: 12 }}>
          To be replaced with dynamic pods using db data
        </ViewTypographyText>
      </ViewContainerStatic>
    </ViewContainerColumn>
  );
};

// INFO

// A pod to show submodules for the currently selected entity
// This is using static data for categories only at the moment (e.g. Accounts-Payables-Bills), but will eventually be a dynamic component using  db data.
export const ViewPodInfo = () => {
  // At the moment, this shows static submodules for categories (e.g. governance > model > plan) from static.js. But it will eventually be able to display subentities for any entity from the database.
  const path = useRouterLocation()?.paths;
  const process = data?.find((x) => x.nickname === path[2]);
  const isGuest = useAuthSession()?.data?.currentUser === "Guest";
  const helpEnabled = useContextState()?.data?.enabled;
  const salesEnabled = true; // to do
  return (
    <ViewContainerRow
      style={{
        // flex: 1,
        margin: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(200,200,200,1)",
        height: 60,
      }}
    >
      <ViewContainerColumn style={{ flex: 1 }}>
        <ViewContainerStatic style={{}}>
          <ViewTypographySubheading>
            {process?.description}
          </ViewTypographySubheading>
          <ViewTypographySubsubheading>
            {process?.summary}
          </ViewTypographySubsubheading>
        </ViewContainerStatic>
      </ViewContainerColumn>
      <ViewContextContainer infoText={metaPodInfo().description} />
    </ViewContainerRow>
  );
};

export const metaPodInfo = () => {
  return {
    description:
      "The 'Info' Pod shows submodules for the Focus (currently selected entity)",
  };
};

// TABS

// A component to show entity 'tabs' (e.g. Accounts > Payables > Bills/Payments/etc)
// This is using static data for categories only at the moment, but will eventually be a dynamic component using  db data.
export const ViewPodTabs = () => {
  // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const windowHeight = useWindowDimensions().height;
  const [expandState, expandSet] = useReactState(true);
  const path = useRouterLocation()?.paths;
  const process = data?.find((x) => x.nickname === path[2]);
  const subprocesses = process && data.filter((x) => x.parent === process.id);
  return (
    <ViewContainerColumn
      style={{
        margin: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(200,200,200,1)",
        height: expandState ? windowHeight - 400 : 60,
        minHeight: expandState ? windowHeight - 400 : 60,
        maxHeight: expandState ? windowHeight - 400 : 60,
      }}
    >
      {/* Tabs for each submodule */}
      <ViewContainerRow style={{ height: 40 }}>
        {!expandState ? (
          subprocesses?.map((x, i) => (
            <ViewButtonLink
              key={i}
              to={`/entity/` + x.nickname}
              buttonText={x.display_singular}
            />
          ))
        ) : (
          <ViewTypographySubheading style={{ flex: 1 }}>
            SubModules
          </ViewTypographySubheading>
        )}
        <ViewContextContainer
          expandSet={expandSet}
          expandState={expandState}
          infoText={metaPodTabs().description}
        />
      </ViewContainerRow>
      {expandState && (
        <ViewContainerStatic style={{ flex: 1}}>
          {subprocesses?.map((x, i) => (
            <ViewContainerRow key={i}>
              <ViewContainerColumn style={{flex: 1}}>
                <ViewButtonLink
                  to={`/entity/${x.nickname}`}
                  buttonText={x.display_singular}
                  buttonSubtext={x.summary}
                />
              </ViewContainerColumn>
              <ViewContainerColumn style={{flex: 1}}>
                <ViewTypographyText>
                  (todo: add summary of submodule entities here)
                </ViewTypographyText>
              </ViewContainerColumn>
            </ViewContainerRow>
          ))}
        </ViewContainerStatic>
      )}
    </ViewContainerColumn>
  );
};

export const metaPodTabs = () => {
  return {
    description: "The 'Tabs' Pod shows links to SubModules / SubEntities",
  };
};

// CATEGORYRELATED TEMP

export const ViewPodCategoryrelated = (props: any) => {
  const spaceSelected = useSpaceState(["space", "selected"]);
  const routerPaths = useRouterLocation()?.paths;
  const auxiliary = useAuxiliaryArray({
    space_name: (spaceSelected as TypeSpaceState)?.data?.spacename,
    filters_array: [], //todo
    column_names: [], //todo
  });
  const auxiliaryRelated = auxiliary?.data?.filter((x: any) =>
    x.entities.categories?.includes(routerPaths[2])
  );
  return (
    <ViewContainerStatic
      style={{
        margin: 5,
        borderWidth: 1,
      }}
    >
      <ViewContainerRow>
        <ViewTypographySubheading style={{ flex: 1 }}>
          Related Items (temp, uses static categories)
        </ViewTypographySubheading>
        <ViewContextContainer />
      </ViewContainerRow>
      <ViewListMain data={auxiliaryRelated} />
    </ViewContainerStatic>
  );
};

// OVERVIEW

export const ViewPodSalespitch = (props: any) => {
  const windowHeight = useWindowDimensions().height;
  const categoryPath = useRouterLocation().paths[2];
  const categoryInfo = data?.find((x) => x?.nickname === categoryPath)!;
  const categoryChildren = data?.filter((x) => x?.parent === categoryInfo?.id);
  // A pod for the sales pitch to each specific module.
  // SHOW THIS IF USER IS NOT LOGGED IN.
  return (
    <ViewContainerStatic
      style={{
        borderWidth: 1,
        margin: 5,
        backgroundColor: "lightgreen",
        maxHeight: windowHeight - 400, // temp, to get dimensions of the parentparent container instead
        height: windowHeight - 400, // temp, to get dimensions of the parentparent container instead
      }}
    >
      <ViewContainerRow>
        <ViewTypographySubheading style={{ flex: 1 }}>
          Salespitch
        </ViewTypographySubheading>

        <ViewContextContainer />
      </ViewContainerRow>

      <ViewTypographyText>
        ^--- These are the submodules (explain each, get data from the
        categories array)
      </ViewTypographyText>
      <ViewTypographyText>SALESPITCH FOR THE MODULE</ViewTypographyText>
      <ViewTypographyText>
        Sales pitch here using the data from the module object (static.tsx for
        the time being) here. Above the fold in the pods screen. point to
        relevant areas of the screen an explain them.
      </ViewTypographyText>
      <ViewTypographyHeading style={{ flex: 1, textAlign: "center" }}>
        {categoryInfo?.display_singular}
      </ViewTypographyHeading>
      <ViewTypographySubsubheading
        style={{ flex: 1, textAlign: "center", fontStyle: "italic" }}
      >
        {categoryInfo?.summary}
      </ViewTypographySubsubheading>
      {/* <ViewTypographyText>
        {JSON.stringify(categoryInfo, null, 2)}
      </ViewTypographyText>
      <ViewTypographySubheading>SUBCATS</ViewTypographySubheading>
      <ViewTypographyText>
        {JSON.stringify(categoryChildren, null, 2)}
      </ViewTypographyText> */}
      <ViewTypographyText>
        V--- You're in the 'Pods' display at the moment, but you can switch the
        display to view the module with different display types here
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};

// INTEGRATIONS
export const ViewPodIntegrations = (props: any) => {
  const windowHeight = useWindowDimensions().height;
  const categoryPath = useRouterLocation().paths[2];
  const categoryInfo = data?.find((x) => x?.nickname === categoryPath)!;
  const categoryChildren = data?.filter((x) => x?.parent === categoryInfo?.id);
  // A pod for the sales pitch to each specific module.
  // SHOW THIS IF USER IS NOT LOGGED IN.
  return (
    <ViewContainerStatic
      style={{
        borderWidth: 1,
        margin: 5,
        backgroundColor: "lightgreen",
        maxHeight: windowHeight - 400, // temp, to get dimensions of the parentparent container instead
        height: windowHeight - 400, // temp, to get dimensions of the parentparent container instead
      }}
    >
      <ViewContainerRow>
        <ViewTypographySubheading style={{ flex: 1 }}>
          Integrations
        </ViewTypographySubheading>
        <ViewContextContainer infoText={metaPodIntegrations().description} />
      </ViewContainerRow>
      <ViewTypographyText>Show relevant integrations here.</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const metaPodIntegrations = () => {
  return {
    description:
      "The 'Integrations' Pod shows third party tools that are integrated with the current Module/Entity",
  };
};

// GUIDES/DOCS

export const ViewPodGuides = (props: any) => {
  const windowHeight = useWindowDimensions().height;
  const categoryPath = useRouterLocation().paths[2];
  const categoryInfo = data?.find((x) => x?.nickname === categoryPath)!;
  const categoryChildren = data?.filter((x) => x?.parent === categoryInfo?.id);
  // A pod for the sales pitch to each specific module.
  // SHOW THIS IF USER IS NOT LOGGED IN.
  return (
    <ViewContainerStatic
      style={{
        borderWidth: 1,
        margin: 5,
        backgroundColor: "lightgreen",
        maxHeight: windowHeight / 2 - 130, // temp, to get dimensions of the parentparent container instead
        height: windowHeight / 2 - 130, // temp, to get dimensions of the parentparent container instead
      }}
    >
      <ViewContainerRow>
        <ViewTypographySubheading style={{ flex: 1 }}>
          Guides
        </ViewTypographySubheading>
        <ViewContextContainer infoText={metaPodGuides().description} />
      </ViewContainerRow>
      <ViewTypographyText>Show related guides here.</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const metaPodGuides = () => {
  return {
    description:
      "The 'Guides' Pod shows articles and how-to guides for the current Module/Entity",
  };
};

// QUICKTEMPLATE

export const ViewPodPresets = (props: any) => {
  // Buttons to run templates/blueprints in order to quickly create items (e.g. 'Create invoice', 'Raise ticket for this issue')
  const windowHeight = useWindowDimensions().height;
  const categoryPath = useRouterLocation().paths[2];
  const categoryInfo = data?.find((x) => x?.nickname === categoryPath)!;
  const categoryChildren = data?.filter((x) => x?.parent === categoryInfo?.id);
  // A pod for the sales pitch to each specific module.
  // SHOW THIS IF USER IS NOT LOGGED IN.
  return (
    <ViewContainerStatic
      style={{
        borderWidth: 1,
        margin: 5,
        backgroundColor: "lightgreen",
        maxHeight: windowHeight / 2 - 130, // temp, to get dimensions of the parentparent container instead
        height: windowHeight / 2 - 130, // temp, to get dimensions of the parentparent container instead
      }}
    >
      <ViewContainerRow>
        <ViewTypographySubheading style={{ flex: 1 }}>
          Presets (QuickTemplates)
        </ViewTypographySubheading>
        <ViewContextContainer infoText={metaPodPresets().description} />
      </ViewContainerRow>
      <ViewTypographyText>Show quick template buttons here.</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const metaPodPresets = () => {
  return {
    description:
      "The 'Presets' Pod shows buttons for applying presets and running related rules",
  };
};
