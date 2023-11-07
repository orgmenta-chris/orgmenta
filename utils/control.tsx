// A 'Control' is a filtering, sorting, grouping, or presets of entity display data.
// C todo

import { ViewFormDynamic } from "./form";
import { useReactMemo } from "./react";
import { ViewContainerStatic, ViewContainerColumn } from "./container";
import { ViewTypographySubheading, ViewTypographySubsubheading, ViewTypographyText } from "./typography";
import { ViewPresetOptions } from "./preset";
import { useRouterLocation } from "./router";
import { useSpaceState } from "./space";

// Main

export const ViewControlMain = ({}: any) => {
  //
  // these will be needed later for defaults etc.:
  //
  // const spaceSelected = useSpaceState(["space", "selected"]);
  // const routerPaths = useRouterLocation()?.paths;
  // const focus = useEntitySingle({ entityFocus: routerPaths?.[2] });
  // const schema = useEntitySchema();
  //
  // Map the data ready to pass into the dynamic form:
  let data: any = useReactMemo(() => {
      // map attributes for filtering (use the focus_column.filter properties for this)
  }, []);
  return <ViewFormDynamic data={data} formname={'control'}/>;
};