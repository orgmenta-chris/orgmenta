// Placeholder

import { ViewContainerStatic } from "./container";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";

export const ViewBillingSection = ({}) => {
  return (
    <ViewContainerStatic>
      <ViewTypographySubheading>Billing</ViewTypographySubheading>
      <ViewTypographyText>
        Plan 1 (Selected)
      </ViewTypographyText>
      <ViewTypographyText>
        Plan 2
      </ViewTypographyText>
      <ViewTypographyText>
        Plan 3
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};
