// A context bar is a small utility bar that has help/info/preference icons.

import { ViewContainerRow, ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewInfoButton } from "./info";
import { ViewPreferenceButton, ViewPreferencePopup } from "./preference";
import { ViewHelpButton, ViewHelpPopup } from "./help";

import { useReactState } from "./react";

// CONTAINER

export const ViewContextContainer = ({ children, to }: any) => {
  const [state, set] = useReactState(false);
  return (
    <ViewContainerRow>
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
