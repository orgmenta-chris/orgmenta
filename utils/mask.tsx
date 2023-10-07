// Placeholder
// A 'mask' refers to a 'privacy mask' or 'redacted information', i.e. a cover or cloak / privacy shield on password fields, secure data etc.

import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";

export const ViewMaskMain = ({ children }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewMaskMain placeholder</ViewTypographyText>
      <ViewTypographyText>to be cloaked: </ViewTypographyText>
      {children}
    </ViewContainerStatic>
  );
};