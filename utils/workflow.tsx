// Placeholder
// A 'workflow' refers to an automatic procedure / rule being run.
// E.g. the client_administrator may want to automatically parse an email to see if the subject contains 'urgent', and automatically assign the ticket as a p1.

import { ViewTypographyText } from "./typography";
import { ViewContainerStatic } from "./container";

export const ViewWorkflowMain = ({ children }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewWorkflowMain placeholder</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};
