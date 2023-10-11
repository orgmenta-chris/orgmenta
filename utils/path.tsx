// A 'Path' is a Critical Path Analysis.
// (https://en.wikipedia.org/wiki/Critical_path_method)
// Also see the PERT method, which utilises CPA (https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique)
// No package exists for this, so we will need to spin out own.

import { ViewContainerColumn } from "./container";
import { ViewTypographyText } from "./typography";

export const ViewPathContainer = (props: any) => {
  return (
    <ViewContainerColumn
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <ViewTypographyText>ViewPathContainer todo</ViewTypographyText>
    </ViewContainerColumn>
  );
};
