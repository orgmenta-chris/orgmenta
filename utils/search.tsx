// Placeholder

import { ViewInputText } from "./input";
import { ViewTypographyText } from "./typography";

export const ViewSearchInput = (props: any) => {
  return (
    <ViewInputText
      style={{ borderWidth: 1 }}
      placeholder="Search for an entity to attach"
    />
  );
};

export const ViewSearchResults = (props: any) => {
  return <ViewTypographyText>todo</ViewTypographyText>;
};
