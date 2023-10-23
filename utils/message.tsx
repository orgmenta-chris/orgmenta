// Placeholder.
// A 'message' is a type of entity that is a piece of communication between humans and/or systems.

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";


// CONTAINER
export const ViewMessageContainer = (props: TypeMessageContainer) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerStatic>
      <ViewTypographyText>Message placeholder</ViewTypographyText>
      <ViewTypographyText>(Put message here)</ViewTypographyText>
      <ViewTypographyText>{props.children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export type TypeMessageContainer = {
  messageTitle?: string; //subject
  children?: any;
}