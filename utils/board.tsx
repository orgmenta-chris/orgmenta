// Placeholder.
// A 'board' is way of managing entities (e.g. discussion boards for messages, ticket boards for tasks)

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";


// CONTAINER

export const ViewBoardContainer = (props: TypeBoardContainer) => {
  // A component to show a product / business roadmap
  return (
    <ViewContainerStatic>
      <ViewTypographyText>Board placeholder</ViewTypographyText>
      <ViewTypographyText>(Put board here)</ViewTypographyText>
      <ViewTypographyText>{props.children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export type TypeBoardContainer = {
  boardTitle?: string;
  children?: any;
}