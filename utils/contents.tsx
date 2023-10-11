// Placeholder.
// 'Contents' will be anchor elements and a table of contents, to be used in a page.

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";

export const ViewContentsTable = ({ children }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewContentsTable placeholder</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const ViewContentsAnchor = ({ children }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewContentsAnchor placeholder</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};
