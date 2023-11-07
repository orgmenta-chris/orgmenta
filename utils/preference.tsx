// A preference is a specific setting for the UI.

import { useReactState } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonIcon, ViewButtonPressable } from "./button";
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
    <ViewButtonIcon
      id={'toggle_other_context_buttons'}
      iconStyle={{paddingTop: 2}}
      buttonColor={'transparent'}
      iconSource={`Entypo`}
      iconName={"cog"}
      iconColor={`rgb(80,80,80)`}
      iconSize={20}
    />
  );
};

// STATE

export const usePreferenceState = () => {
  //TODO (just return true for now)
  return { data: { enabled: true } };
};
