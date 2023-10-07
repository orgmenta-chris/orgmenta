// A 'window' is the screen dimensions available to the UI.
// includes the window itself, its dimensions, safe area view,
// USED TO INCLUDE: a (mobile-only) status bar. <-- MOVED TO STATUSBAR.TSX

import {
  View,
  Dimensions,
  useWindowDimensions as originalUseWindowDimensions,
  SafeAreaView,
} from "react-native";
import { getStatusbarDimensions } from "./statusbar";

// CONTAINER

export const ViewWindowContainer = (props: any) => {
  const windowDimensions = useWindowDimensions();
  const statusbarDimensions = getStatusbarDimensions();
  return (
    <ViewWindowSafearea style={{ flex: 1, backgroundColor: "gray" }}>
      <View
        style={{
          height: windowDimensions.height + statusbarDimensions.height,
          width: "100%",
          overflow: "hidden",
        }}
      >
        {props.children}
      </View>
    </ViewWindowSafearea>
  );
};

// DIMENSIONS

export const useWindowDimensions = originalUseWindowDimensions; // use this hook if possible

export const getWindowDimensions = Dimensions; // else you can use this function instead

// SAFEAREA

export const ViewWindowSafearea = SafeAreaView; // Ensure that the window doesn't overlap ios device notification bar
