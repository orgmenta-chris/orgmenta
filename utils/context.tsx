// A context bar is a small utility bar that has help/info/preference icons.

import { ViewContainerColumn, ViewContainerRow, ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewInfoButton } from "./info";
import { ViewPreferenceButton, ViewPreferencePopup } from "./preference";
import { ViewHelpButton, ViewHelpPopup } from "./help";

import { useReactState } from "./react";

// CONTAINER

export const ViewContextContainer = ({ children, to }: any) => {
  const [state, set] = useReactState(false);
  return (
    <ViewContainerRow style={{backgroundColor:'white'}}>
      {/* Buttons */}
      <ViewHelpButton set={set} to={to} />
      <ViewInfoButton set={set} to={to} />
      <ViewPreferenceButton set={set} to={to} />
      {/* Popup */}
      {state && <ViewHelpPopup children={children} state={state} />}
      {state && <ViewPreferencePopup children={children} state={state} />}
    </ViewContainerRow>
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
    <ViewContainerRow style={{backgroundColor:'white'}}>
      <ViewHelpButton set={'todo'}/>
        <ViewTypographyText>Toggle/Universal Help</ViewTypographyText>
    </ViewContainerRow>
      <ViewContainerRow style={{backgroundColor:'white'}}>
        <ViewInfoButton set={'todo'} />
        <ViewTypographyText>Toggle/Universal Info</ViewTypographyText>
      </ViewContainerRow>
      <ViewContainerRow style={{backgroundColor:'white'}}>
        <ViewPreferenceButton set={'todo'} />
        <ViewTypographyText>Toggle/Universal Preferences</ViewTypographyText>
      </ViewContainerRow>
    </ViewContainerColumn>
  );
};
