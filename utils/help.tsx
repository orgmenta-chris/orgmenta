// help module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)
// Need to absract the bar (to 'toolbar'), the info (to 'info') and settings (to 'settings)

import { ViewButtonIcon } from "./button";

// ICONS

export const ViewHelpButton = () => {
  return (
    <ViewButtonIcon
      id={'toggle_other_context_buttons'}
      iconStyle={{paddingTop: 2}}
      buttonColor={'transparent'}
      iconSource={`Entypo`}
      iconName={"help"}
      iconColor={`rgb(80,80,80)`}
      iconSize={20}
    />
  );
};

// STATE

export const useHelpState = () => {
  //TODO (just return true for now)
  return { data: { enabled: true } };
};
