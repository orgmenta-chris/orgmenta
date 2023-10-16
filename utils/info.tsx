// help module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)
// Need to absract the bar (to 'toolbar'), the info (to 'info') and settings (to 'settings)

import { useReactState } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewRouterLinkthemed } from "./router";
import { ViewIconMain } from "./icon";

// BUTTON

export const ViewInfoButton = ({ children, set, to }: any) => {
  // Change to router link? (and link to relevant guide?)
  return (
      <ViewButtonPressable
        style={{
          margin: 5,
        }}
        onPress={()=>set()}
      >
        <ViewIconMain
          name={"info-with-circle"}
          source={"Entypo"}
          color={"rgba(80,80,80,1)"}
        />
      </ViewButtonPressable>
  );
};


// POPUP

export const ViewInfoPopup = ({ children, infoText }: any) => {
  return (
    <ViewContainerStatic style={{position:"absolute", width: 400, height: 40, left: -400, backgroundColor:'white'}}>
      <ViewTypographyText>
        {infoText}
      </ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};
