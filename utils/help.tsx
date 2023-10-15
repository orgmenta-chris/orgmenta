// help module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)
// Need to absract the bar (to 'toolbar'), the info (to 'info') and settings (to 'settings)

import { useReactState } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewRouterLinkthemed } from "./router";
import { ViewIconMain } from "./icon";

// POPUP

export const ViewHelpPopup = ({ children, state }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>
        Maybe just use a UI library's tooltip for this rather than spinning own
      </ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// ICONS

export const ViewHelpButton = ({ children, set, to }: any) => {
  return (
    <ViewButtonPressable
      style={{
        margin: 5,
      }}
      // NOT YET IMPLEMENTED (need to abstract this out and get the tooltip outside of the parent component)
      // onPress={() => set((old: any) => !old)}
      // onHoverIn={() => set(true)}
      // onHoverOut={() => set(false)}
    >
      <ViewIconMain
        name={"help-with-circle"}
        source={"Entypo"}
        color={"rgba(80,80,80,1)"}
      />
    </ViewButtonPressable>
  );
};

// STATE

export const useHelpState = () => {
  //TODO (just return true for now)
  return { data: { enabled: true } };
};
