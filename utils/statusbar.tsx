// A 'statusbar' is a mobile-only top bar (ios, android, apple TV etc.). It is not present on web.

import { StatusBarProps, StatusBar } from "expo-status-bar";
import { UtilityPlatformMain } from "./platform";
import { UtilityPlatformMain } from "./platform";
import { StatusBar as StatusbarRN, Dimensions, View } from "react-native";

// Main

export type TypeStatusbarMain = StatusBarProps & {
  buffer?: boolean; // whether to push the content down (true) or let content overlap the statusbar (false - default)
};

// The actual statusbar component
export const ViewStatusbarMain = (props: TypeStatusbarMain) => {
  return (
    <StatusBar
      style={"light"}
      // backgroundColor="#0c4a73"
    />
  );
};

// Height

// Provide a buffer component to prevent other elements from overlapping the statusbar
export const ViewStatusbarDimensions = (props: TypeStatusbarMain) => {
    const statusbarDimensions = getStatusbarDimensions();
    return (
        <>
            {props.buffer && UtilityPlatformMain.OS !== "web" && (
                <View
                    style={{
                        height: statusbarDimensions.height,
                        paddingTop: statusbarDimensions.padding,
                        width: "100%",
                    }}
                />
            )}
        </>
    );
};

// Or just use this helper function if you want to do it with padding or margin, instead of using the above component
export const getStatusbarDimensions = () => {
    const platform_os = UtilityPlatformMain.OS;
    if (platform_os === "web") {
        return { height: 0, padding: 0 };
    }
    if (platform_os === "ios") {
        return { height: 0, padding: 5 };
    } // iOS uses safeAreaView instead (so we just need padding, no actual statusbar height needed)
    if (platform_os === "android") {
        return { height: StatusbarRN.currentHeight || 24, padding: 5 };
    } // this is a hack to ensure that it doesn't cover the statusbar on android. This may not cover some custom roms. (statusbar height + padding needed)
    else {
        return { height: 50, padding: 5 };
    } // Unknown as to whether this fallback would ever be used (depends on future changes to react-native Platform)
};

// Constants

// const STATUSBAR_DEFAULT_HEIGHT = 20;
// const STATUSBAR_X_HEIGHT = 44;
// const STATUSBAR_IP12_HEIGHT = 47;
// const STATUSBAR_IP12MAX_HEIGHT = 47;
// const STATUSBAR_IP14PRO_HEIGHT = 49;

// const X_WIDTH = 375;
// const X_HEIGHT = 812;

// const XSMAX_WIDTH = 414;
// const XSMAX_HEIGHT = 896;

// const IP12_WIDTH = 390;
// const IP12_HEIGHT = 844;

// const IP12MAX_WIDTH = 428;
// const IP12MAX_HEIGHT = 926;

// const IP14PRO_WIDTH = 393;
// const IP14PRO_HEIGHT = 852;

// const IP14PROMAX_WIDTH = 430;
// const IP14PROMAX_HEIGHT = 932;

// const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get("window");

// let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
// let isIPhoneX_v = false;
// let isIPhoneXMax_v = false;
// let isIPhone12_v = false;
// let isIPhone12Max_v = false;
// let isIPhoneWithMonobrow_v = false;
// let isIPhoneWithDynamicIsland_v = false;

// if (UtilityPlatformMain.OS === "ios" && !UtilityPlatformMain.isPad && !UtilityPlatformMain.isTV) {
//   if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
//     isIPhoneWithMonobrow_v = true;
//     isIPhoneX_v = true;
//     statusBarHeight = STATUSBAR_X_HEIGHT;
//   } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
//     isIPhoneWithMonobrow_v = true;
//     isIPhoneXMax_v = true;
//     statusBarHeight = STATUSBAR_X_HEIGHT;
//   } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
//     isIPhoneWithMonobrow_v = true;
//     isIPhone12_v = true;
//     statusBarHeight = STATUSBAR_IP12_HEIGHT;
//   } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
//     isIPhoneWithMonobrow_v = true;
//     isIPhone12Max_v = true;
//     statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
//   } else if (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) {
//     isIPhoneWithDynamicIsland_v = true;
//     statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
//   } else if (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT) {
//     isIPhoneWithDynamicIsland_v = true;
//     statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
//   }
// }

// export const isIPhoneX = () => isIPhoneX_v;
// export const isIPhoneXMax = () => isIPhoneXMax_v;
// export const isIPhone12 = () => isIPhone12_v;
// export const isIPhone12Max = () => isIPhone12Max_v;
// export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;
// export const isIPhoneWithDynamicIsland = () => isIPhoneWithDynamicIsland_v;

// export const  getStatusBarHeight(skipAndroid?:boolean){
//   return Platform.select({
//     ios: statusBarHeight,
//     android: skipAndroid ? 0 : StatusbarRN.currentHeight,
//     default: 0,
//   });
// }
