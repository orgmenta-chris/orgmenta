// A 'Focus' is the primary entity being studied / viewed

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import {
  ViewRouterLink,
  ViewRouterLinkthemed,
  useRouterLocation,
} from "./router";
import { data } from "./static";

// Main

export const ViewFocusMain = ({}: any) => {
  return (
    <ViewContainerStatic style={{ flexDirection: "column" }}>
      <ViewFocusHeader />
      {/* <ViewFocusInfo/>
      <ViewFocusTabs/> */}
    </ViewContainerStatic>
  );
};

// Header

// A header/title/breadcrumb section for the Entity Focus
export const ViewFocusHeader = () => {
  // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useRouterLocation()?.paths;
  const process = data?.find((a) => a.nickname === path[2]);
  const parent = data?.find((b) => b.id === process?.parent);
  const grandparent = data?.find((c) => c.id === parent?.parent);
  const ggrandparent = data?.find((d) => d.id === grandparent?.parent);
  return (
    <ViewContainerStatic
      style={{
        flexDirection: "column",
        borderWidth: 1,
        padding: 5,
      }}
    >
      {/* Title of the current process (breadcrumbs) */}
      <ViewTypographyText>
        {ggrandparent?.id && ggrandparent?.id > 9 && (
          <>
            <ViewRouterLinkthemed
              style={{ fontSize: 20 }}
              to={"/entity/" + ggrandparent.nickname}
            >
              <ViewTypographyText style={{ textDecorationLine: "underline", fontSize: 20 }}>
                {ggrandparent.display_singular}
              </ViewTypographyText>
            </ViewRouterLinkthemed>
            <ViewContainerStatic>
              <ViewTypographyText style={{ fontSize: 20 }}>{" > "}</ViewTypographyText>
            </ViewContainerStatic>
          </>
        )}
        {grandparent?.id && grandparent?.id > 9 && (
          <>
            <ViewRouterLinkthemed
              style={{ fontSize: 20 }}
              to={"/entity/" + grandparent.nickname}
            >
              <ViewTypographyText style={{ textDecorationLine: "underline", fontSize: 20 }}>
                {grandparent.display_singular}
              </ViewTypographyText>
            </ViewRouterLinkthemed>
            <ViewContainerStatic>
              <ViewTypographyText style={{ fontSize: 20 }}>{" > "}</ViewTypographyText>
            </ViewContainerStatic>
          </>
        )}
        {parent?.id && parent?.id > 9 && (
          <>
            <ViewRouterLinkthemed
              style={{ fontSize: 20 }}
              to={"/entity/" + parent.nickname}
            >
              <ViewTypographyText style={{ textDecorationLine: "underline", fontSize: 20 }}>
                {parent.display_singular}
              </ViewTypographyText>
            </ViewRouterLinkthemed>
            <ViewContainerStatic>
              <ViewTypographyText style={{ fontSize: 20 }}>{" > "}</ViewTypographyText>
            </ViewContainerStatic>
          </>
        )}
        {process?.id && (
          <>
            <ViewRouterLinkthemed
              style={{ fontSize: 20 }}
              to={"/entity/" + process.nickname}
            >
              <ViewTypographyText style={{ fontSize: 20, color: "white" }}>
                {process.display_singular}
              </ViewTypographyText>
            </ViewRouterLinkthemed>
          </>
        )}
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Title

// A temporary component to show information on the currently selected processs (e.g. Accounts-Payables-Bills)
// This is using static data at the moment, but will eventually be a dynamic component using  db data.
export const ViewFocusInfo = () => {
  // At the moment, this shows static info for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useRouterLocation()?.paths;
  const process = data?.find((x) => x.nickname === path[2]);
  const subprocesses = process && data.filter((x) => x.parent === process.id);
  const parent = data?.find((y) => y.id === process?.parent);
  const grandparent = data?.find((z) => z.id === parent?.parent);
  return (
    <ViewContainerStatic
      style={{
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "white",
        margin: 5,
      }}
    >
      <ViewContainerStatic style={{ height: 40, backgroundColor: "lightgray" }}>
        <ViewTypographyText style={{ fontSize: 16, fontStyle: "italic" }}>
          {process?.description}
        </ViewTypographyText>
        <ViewTypographyText style={{ fontSize: 12 }}>{process?.summary}</ViewTypographyText>
      </ViewContainerStatic>
      {/* <ViewTypographyText style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}>
            {process.subheading}
        </ViewTypographyText> */}
      {/* TESTING */}
      {/* <ViewTypographyText style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}>
          {JSON.stringify({grandparent,parent,process,subprocesses},null,2)}
          {JSON.stringify({process},null,2)}
      </ViewTypographyText> */}
    </ViewContainerStatic>
  );
};

// Tabs

// A temporary component to show focus entity tabs (e.g. Accounts > Payables > Bills/Payments/etc)
// This is using static data at the moment, but will eventually be a dynamic component using  db data.
export const ViewFocusTabs = () => {
  // At the moment, this shows breadcrumbs for categories (e.g. governance > model > plan) from static.js
  // But it will eventually be able to display a titlebar / breadcrumb bar for any entity from the database.
  const path = useRouterLocation()?.paths;
  const process = data?.find((x) => x.nickname === path[2]);
  const subprocesses = process && data.filter((x) => x.parent === process.id);
  const parent = data?.find((y) => y.id === process?.parent);
  const grandparent = data?.find((z) => z.id === parent?.parent);
  return (
    <ViewContainerStatic
      style={{
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "white",
        margin: 5,
      }}
    >
      {/* Tabs for each subprocess */}
      <ViewContainerStatic style={{ flexDirection: "row", height: 40 }}>
        {subprocesses?.map((x, i) => (
          <ViewRouterLink
            style={{ flex: 1 }}
            key={i}
            to={`/entity/` + x.nickname}
          >
            {x.display_singular}
          </ViewRouterLink>
        ))}
      </ViewContainerStatic>

      {/* Info on the current process (move this into pods*/}
      {/* <ViewTypographyText style={{fontSize:12, height: 200, backgroundColor:'lightgray',overflow:'scroll'}}> */}
      {/* {JSON.stringify({division,department,process},null,2)} */}
      {/* </ViewTypographyText> */}
    </ViewContainerStatic>
  );
};
