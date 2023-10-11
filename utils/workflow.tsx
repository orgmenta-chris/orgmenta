// Placeholder
// A 'workflow' refers to a (manual or automatic) procedure / rule being run.
// E.g. the client_administrator may want to automatically parse an email to see if the subject contains 'urgent', and automatically assign the ticket as a p1.

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";

export const ViewWorkflowMain = ({ children }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewWorkflowMain placeholder</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};
