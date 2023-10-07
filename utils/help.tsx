// help module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)
// Need to absract the bar (to 'toolbar'), the info (to 'info') and settings (to 'settings)

import { useState } from "react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewIconMain } from "./icon";
import { ViewRouterLinkthemed } from "./router";
import { Pressable } from "react-native";

// POPUP

export const ViewHelpPopup = ({ children, state }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>Maybe just use a UI library's tooltip for this rather than spinning own</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// ICONS

export const ViewHelpIcons = ({ children, set, to }: any) => {
  return (
    <ViewContainerStatic
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        // flex: 1,
        // gap: 5,
        // justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          margin: 5,
        }}
        // NOT YET IMPLEMENTED (need to abstract this out and get the tooltip outside of the parent component)
        // onPress={() => set((old: any) => !old)}
        // onHoverIn={() => set(true)} 
        // onHoverOut={() => set(false)}
      >
        <ViewIconMain
          name={"info-with-circle"}
          source={"Entypo"}
          color={"gray"}
        />
      </Pressable>
      <ViewRouterLinkthemed
        style={{
          margin: 5,
        }}
        to={to}
      >
        <ViewIconMain
          name={"help-with-circle"}
          source={"Entypo"}
          color={"gray"}
        />
      </ViewRouterLinkthemed>
      <Pressable
        style={{
          margin: 5,
        }}
        // NOT YET IMPLEMENTED (need to abstract this out and need to get the 'more'/settings widget outside of the parent component)
        // onPress={() => set((old: any) => !old)}
        // onHoverIn={() => set(true)} 
        // onHoverOut={() => set(false)}
      >
        <ViewIconMain
          name={"ellipsis-horizontal-circle-sharp"}
          source={"Ionicons"}
          color={"gray"}
          size={26}
          style={{top:-2  }}
        />
      </Pressable>
    </ViewContainerStatic>
  );
};

// CONTAINER

export const ViewHelpContainer = ({ children, to }: any) => {
  const [state, set] = useState(false);
  return (
    <ViewContainerStatic>
      <ViewHelpIcons set={set} to={to} />
      {state && <ViewHelpPopup children={children} state={state} />}
      {state && <ViewHelpPopup children={children} state={state} />}
    </ViewContainerStatic>
  );
};
