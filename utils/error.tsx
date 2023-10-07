// Placeholder

import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewTypographyText } from "./typography";

// CONTAINER

// A component to display an error message.
export const ViewErrorContainer = ({ children }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewErrorMain placeholder</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};
