// A context bar is a small utility bar that has help/info/preference icons.

import { ViewContainerColumn, ViewContainerRow } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewInfoButton } from "./info";
import { ViewPreferenceButton, ViewPreferencePopup } from "./preference";
import { ViewHelpButton, ViewHelpPopup } from "./help";
import { useReactState } from "./react";
import { ViewButtonPressable } from "./button";
import { ViewIconMain } from "./icon";

// CONTAINER

export const ViewContextContainer = ({ children, to }: any) => {
  const [showState, showSet] = useReactState(false);
  const [state, set] = useReactState(false);
  return (
    <ViewContainerRow
      style={{
        height: 35,
        margin:5
      }}
    >
      {/* Buttons */}
      {showState && <ViewHelpButton set={set} to={to} />}
      {showState && <ViewInfoButton set={set} to={to} />}
      {showState && <ViewPreferenceButton set={set} to={to} />}
      {/* Popup */}
      {state && <ViewHelpPopup children={children} state={state} />}
      {state && <ViewPreferencePopup children={children} state={state} />}
      {/* Toggle */}
      <ViewContextButton showSet={showSet} />
    </ViewContainerRow>
  );
};

// BUTTON

export const ViewContextButton = ({ showSet }: any) => {
  // Toggles whether you can see the buttons
  return (
    <ViewButtonPressable
      style={{ 
        justifyContent:'center',
      }}
      onPress={() => showSet((old: any) => !old)}
    >
      <ViewIconMain
        name={"dots-three-vertical"}
        source={"Entypo"}
        color={"rgba(80,80,80,1)"}
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
