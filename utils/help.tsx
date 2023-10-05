// help / info module.
// Components will have info icons that the user can click on for assistance (and link to a help page?)

import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { ViewIconMain } from "./icon";
import { ViewRouterLinkthemed } from "./router";

export const ViewHelpPopup = ({ children, state }: any) => {
  return (
    <View>
      <Text>Maybe just use a UI library's tooltip for this rather than spinning own</Text>
      <Text>{children}</Text>
    </View>
  );
};

export const ViewHelpIcons = ({ children, set, to }: any) => {
  return (
    <View
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
        onPress={() => set((old: any) => !old)}
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
    </View>
  );
};
export const ViewHelpMain = ({ children, to }: any) => {
  const [state, set] = useState(false);
  return (
    <View>
      <ViewHelpIcons set={set} to={to} />
      {state && <ViewHelpPopup children={children} state={state} />}
    </View>
  );
};
