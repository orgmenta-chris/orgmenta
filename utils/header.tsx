import { ReactNode } from "react";
import { getStatusbarDimensions } from "./statusbar";
import { UtilityPlatformMain } from "./platform";
import { View } from "react-native";

// Main

type TypeHeaderMain = {
  children: ReactNode;
};

// full Header component (currently hardcoded, no props)
export const ViewHeaderMain = ({ children }: TypeHeaderMain) => {
  const statusbarDimensions = getStatusbarDimensions();
  const headerDimensions = getHeaderDimensions();
  return (
    <View
      style={{
        gap: 25,
        paddingLeft: headerDimensions.padding + 5,
        paddingRight: headerDimensions.padding + 5,
        paddingTop: statusbarDimensions.height,
        height: headerDimensions.height,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#0c4a73",
        borderBottomColor: "black",
        borderBottomWidth: 1,
      }}
    >
      {children}
    </View>
  );
};

// Dimensions

// Or just use this helper function if you want to roll your own
// hardcoded at the moment, no props.
export const getHeaderDimensions = () => {
  const platform_os = UtilityPlatformMain.OS;
  if (platform_os === "web") {
    return { height: 55, padding: 0 };
  }
  if (platform_os === "ios") {
    return { height: 70, padding: 0 };
  } // iOS uses safeAreaView instead (so we just need padding, no actual statusbar height needed)
  if (platform_os === "android") {
    return { height: 85, padding: 5 };
  } // this is a hack to ensure that it doesn't cover the statusbar on android. This may not cover some custom roms. (statusbar height + padding needed)
  else {
    return { height: 70, padding: 0 };
  } // Unknown as to whether this fallback would ever be used (depends on future changes to react-native Platform)
};

// Section

// Sections for the header
export type TypeHeaderSection = {
  children: ReactNode;
  flex?: number;
  padding?: number;
};

export const ViewHeaderSection = ({
  children,
  flex,
  padding,
}: TypeHeaderSection) => {
  return (
    <View style={{ flex: flex || 1, padding: padding || 5, height: "100%" }}>
      {children}
    </View>
  );
};
