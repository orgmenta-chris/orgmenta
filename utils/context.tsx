// A context bar is a small utility bar that has help/info/preference icons.

import { ViewContainerColumn, ViewContainerRow } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewInfoButton, ViewInfoPopup } from "./info";
import { ViewPreferenceButton, ViewPreferencePopup } from "./preference";
import { ViewHelpButton } from "./help";
import { useReactState } from "./react";
import { ViewButtonIcon, ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";

// CONTAINER

export const ViewContextContainer = ({
  closeEnabled,
  children,
  to,
  infoText,
  expandSet,
  expandState,
}: any) => {
  const [showState, showSet] = useReactState(false);
  const [infoState, infoSet] = useReactState(false);
  return (
    <ViewContainerRow
      style={
        {
          // height: 40,
          // margin:5
        }
      }
    >
      {/* Buttons */}
      {showState && <ViewInfoButton set={() => infoSet((old) => !old)} />}
      {showState && <ViewHelpButton />}
      {showState && expandSet && (
        <ViewContextExpand expandState={expandState} expandSet={expandSet} />
      )}
      {showState && <ViewPreferenceButton />}
      {/* Popups */}
      {infoState && <ViewInfoPopup infoText={infoText} children={children} />}
      {/* <ViewPreferencePopup children={children} /> */}
      {/* Toggle */}
      {showState && closeEnabled && <ViewContextClose />}
      <ViewContextButton showSet={showSet} />
    </ViewContainerRow>
  );
};

// CLOSE
export const ViewContextClose = ({ onClose }: any) => {
  return (
    <ViewButtonIcon
      onPress={onClose}
      iconName="x"
      iconSource={"Feather"}
      iconSize={24}
      buttonColor={"transparent"}
      iconColor={`rgb(80,80,80)`}
    />
  );
};
// BUTTON

export const ViewContextButton = ({ showSet }: any) => {
  return (
    <ViewButtonIcon
      id={"toggle_other_context_buttons"}
      onPress={() => showSet((old: boolean) => !old)}
      iconStyle={{ paddingTop: 2 }}
      buttonColor={"transparent"}
      iconSource={`Entypo`}
      iconName={"dots-three-vertical"}
      iconColor={`rgb(80,80,80)`}
      iconSize={20}
    />
  );
};

// EXPAND

export const ViewContextExpand = ({ expandSet, expandState }: any) => {
  // Expand/Collapse the current View.
  return (
    <ViewButtonPressable
      style={{
        justifyContent: "center",
      }}
      onPress={() => expandSet((old: boolean) => !old)}
    >
      <ViewIconMain
        name={expandState ? "md-caret-up-circle" : "md-caret-down-circle"}
        source={"Ionicons"}
        color={"rgba(80,80,80,1)"}
        size={27}
      />
    </ViewButtonPressable>
  );
};

// STATE

export const useContextState = () => {
  //TODO (just return true for now)
  return { data: { enabled: true } };
};

// UNIVERSAL

export const ViewContextUniversal = ({ children, to }: any) => {
  // A component to set the help/info/preferences universally across the app.
  return (
    <ViewContainerColumn>
      <ViewContainerRow style={{ backgroundColor: "white" }}>
        <ViewHelpButton set={"todo"} />
        <ViewTypographyText>Toggle/Universal Help</ViewTypographyText>
      </ViewContainerRow>
      <ViewContainerRow style={{ backgroundColor: "white" }}>
        <ViewInfoButton set={"todo"} />
        <ViewTypographyText>Toggle/Universal Info</ViewTypographyText>
      </ViewContainerRow>
      <ViewContainerRow style={{ backgroundColor: "white" }}>
        <ViewPreferenceButton set={"todo"} />
        <ViewTypographyText>Toggle/Universal Preferences</ViewTypographyText>
      </ViewContainerRow>
    </ViewContainerColumn>
  );
};
