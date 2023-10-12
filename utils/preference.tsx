// A preference is a specific setting for the UI.

import { useReactState } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewRouterLinkthemed } from "./router";
import { ViewIconMain } from "./icon";

// POPUP

export const ViewPreferencePopup = ({ children, state }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>todo</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// BUTTON

export const ViewPreferenceButton = ({ children, set, to }: any) => {
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
        name={"ellipsis-horizontal-circle-sharp"}
        source={"Ionicons"}
        color={"gray"}
        size={26}
        style={{ top: -2 }}
      />
    </ViewButtonPressable>
  );
};

// STATE

export const usePreferenceState = () => {
  //TODO (just return true for now)
  return { data: { enabled: true } };
};
