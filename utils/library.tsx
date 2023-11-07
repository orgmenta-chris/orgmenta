// Placeholder. will allow drag and drop of components etc.
// C: move the below into library, and then this will be for compiling multiple from library.

import { ViewCardExpandable } from "./card";
import { ViewPageMain, usePageTitle } from "./page";
import { ViewRouterLinktext, useRouterLocation } from "./router";
import {
  // DynamicPackageModule,
  mapPackagesList,
  splitPackageName,
} from "./package";
import {
  ViewContainerRow,
  ViewContainerColumn,
  ViewContainerScroll,
} from "./container";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
} from "./typography";
import { ViewContextContainer } from "./context";

// PAGE

export const metaLibraryPage = () => {
  return {
    description:
      "The 'Library' Page is a complete page for viewing and experimenting with library package declarations.",
  };
};

export const ViewLibraryPage = () => {
  const routerPaths = useRouterLocation().paths as any;
  const [declarationType, declarationGroup] = splitPackageName({
    packageName: routerPaths[3],
    splitBy: routerPaths[2],
  });
  // const Example = DynamicPackageModule(routerPaths[2])[routerPaths[3]];
  usePageTitle(`Orgmenta | Library - ${routerPaths[2]} - ${routerPaths[3]} `);
  return (
    <ViewPageMain>
      <ViewTypographyHeading id={"page_title"}>Library</ViewTypographyHeading>
      <ViewContainerRow id={"page_body"} style={{ flex: 1 }}>
        <ViewContainerColumn id={"navigation_panel"} style={{ flex: 1 }}>
          <ViewLibraryPackages />
          <ViewContextContainer />
        </ViewContainerColumn>
        <ViewContainerColumn id={"library_panel"} style={{ flex: 4 }}>
          {/* <ViewLibraryCode Example={Example} />
          <ViewLibraryConstruct Example={Example} />
          <ViewLibraryRendered Example={Example} declarationType={declarationType} /> */}
        </ViewContainerColumn>
      </ViewContainerRow>
    </ViewPageMain>
  );
};

// PACKAGES

export const metaLibraryPackages = () => {
  return {
    description:
      "Expandable cards for each library package (used for navigation)",
  };
};

export const ViewLibraryPackages = () => {
  return (
    <ViewContainerScroll id={"navigation_panel"} style={{ flex: 1 }}>
      {mapPackagesList.map((x, i) => (
        <ViewCardExpandable
          key={x.file_name}
          header={x.display_singular}
          headerlink={x.name_singular}
          body={<ViewLibraryDeclarations packageName={x.name_singular} />}
        />
      ))}
    </ViewContainerScroll>
  );
};

// DECLARATIONS

export const metaLibraryDeclarations = () => {
  return {
    description: "Links to each declaration in library packages",
  };
};

export const ViewLibraryDeclarations = (props: any) => {
  const packageDeclarations = DynamicPackageModule(props.packageName);
  return Object.keys(packageDeclarations).map((declarationName, i) => (
    <ViewContainerRow key={i}>
      <ViewRouterLinktext
        style={{}}
        to={props.packageName + "/" + declarationName}
        textString={declarationName}
        textSelectable={false}
      />
    </ViewContainerRow>
  ));
};

// CODE

export const metaLibraryCode = () => {
  return {
    description: "View the code for a specific package declaration",
  };
};

export const ViewLibraryCode = (props: any) => {
  return (
    <ViewContainerScroll
      id={"code"}
      style={{ flex: 1, borderTopWidth: 1, margin: 5 }}
    >
      <ViewTypographySubheading>Code</ViewTypographySubheading>
      <ViewTypographyText>--show code here--</ViewTypographyText>
      <ViewTypographyText>
        {JSON.stringify(props.Example, null, 2)}
      </ViewTypographyText>
    </ViewContainerScroll>
  );
};

// CONSTRUCT

export const metaLibraryContruct = () => {
  return {
    description: "Set props (/arguments) to pass into a package declaration",
  };
};

export const ViewLibraryConstruct = (props: any) => {
  return (
    <ViewContainerScroll
      id={"construct"}
      style={{ flex: 1, borderTopWidth: 1, margin: 5 }}
    >
      <ViewTypographySubheading>Construct</ViewTypographySubheading>
      <ViewTypographyText>
        --allow props to be set here--
      </ViewTypographyText>
    </ViewContainerScroll>
  );
};


// CODE

export const metaLibraryRendered = () => {
  return {
    description: "View a rendered package declaration",
  };
};

export const ViewLibraryRendered = ({Example, ...props}: any) => {
  return (
    <ViewContainerScroll
      id={"rendered"}
      style={{ flex: 1, borderTopWidth: 1, margin: 5 }}
    >
      <ViewTypographySubheading>Rendered</ViewTypographySubheading>
      {
        // If Component:
        ["View", "Example"].includes(props.declarationType) ? (
          <Example />
        ) : // If Variable:
        [
            "map",
            "array",
            "object",
            "options",
            "get",
            "create",
            "handle",
            "Utility",
          ].includes(props.declarationType) ? (
          <ViewTypographyText>
            {JSON.stringify(Example, null, 2)}
          </ViewTypographyText>
        ) : // If Function:
        ["do", "use", "is", "request", "async"].includes(
          props.declarationType
          ) ? (
          <ViewTypographyText>
            {JSON.stringify(Example(), null, 2)}
          </ViewTypographyText>
        ) : (
          // If Unknown:
          <ViewTypographyText>
            Unknown Declaration Type
          </ViewTypographyText>
        )
      }
    </ViewContainerScroll>
  );
};
