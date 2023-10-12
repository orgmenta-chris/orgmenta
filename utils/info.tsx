// help module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)
// Need to absract the bar (to 'toolbar'), the info (to 'info') and settings (to 'settings)

import { useReactState } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewRouterLinkthemed } from "./router";
import { ViewIconMain } from "./icon";

// ICONS

export const ViewInfoButton = ({ children, set, to }: any) => {
  // Change to router link? (and link to relevant guide?)
  return (
      <ViewButtonPressable
        style={{
          margin: 5,
        }}
      >
        <ViewIconMain
          name={"info-with-circle"}
          source={"Entypo"}
          color={"gray"}
        />
      </ViewButtonPressable>
  );
};