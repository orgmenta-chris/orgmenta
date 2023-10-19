// Placeholder
// CG assigned

import { ViewButtonPressable } from "./button";
import { ViewRouterLinkthemed } from "./router";
import { ViewTypographyText } from "./typography";
 
export const ViewTabButton = ({
  activeTab,
  tabIndex,
  tabText,
  isLoading,
  ...rest
}: any) => {
  return (
    <ViewButtonPressable
      key={tabIndex}
      style={{
        flex: 1,
        padding: 10,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: activeTab === tabIndex ? "black" : "transparent",
        backgroundColor: activeTab === tabIndex ? "lightblue" : "transparent",
      }}
      {...rest}
    >
      <ViewTypographyText selectable={false} style={{ fontWeight: "bold" }}>
        {tabText}
      </ViewTypographyText>
    </ViewButtonPressable>
  );
};

export const ViewTabLink = ({
  activeTab,
  tabIndex,
  tabText,
  isLoading,
  to,
  ...rest
}: any) => {
  return (
    <ViewRouterLinkthemed
      to={to}
      key={tabIndex}
      style={{
        flex: 1,
        padding: 10,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: activeTab === tabIndex ? "black" : "transparent",
        backgroundColor: activeTab === tabIndex ? "lightblue" : "transparent",
      }}
      {...rest}
    >
      <ViewTypographyText selectable={false} style={{ fontWeight: "bold" }}>
        {tabText}
      </ViewTypographyText>
    </ViewRouterLinkthemed>
  );
};
