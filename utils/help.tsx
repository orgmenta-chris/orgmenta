// help / info module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)

import { useState } from "react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewIconMain } from "./icon";
import { ViewRouterLinkthemed } from "./router";
import { Pressable } from "react-native";

export const ViewHelpPopup = ({ children, state }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>Maybe just use a UI library's tooltip for this rather than spinning own</ViewTypographyText>
      <ViewTypographyText>{children}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

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
        // NOT YET IMPLEMENTED (need to get the tooltip, outside of the parent component)
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
    </ViewContainerStatic>
  );
};
export const ViewHelpContainer = ({ children, to }: any) => {
  const [state, set] = useState(false);
  return (
    <ViewContainerStatic>
      <ViewHelpIcons set={set} to={to} />
      {state && <ViewHelpPopup children={children} state={state} />}
    </ViewContainerStatic>
  );
};
