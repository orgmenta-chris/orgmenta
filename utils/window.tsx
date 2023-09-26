// A 'window' is the screen dimensions available to the UI.
// includes the window itself, its dimensions, safe area view, 
// USED TO INCLUDE: a (mobile-only) status bar. <-- MOVED TO STATUSBAR.TSX

import { View, Dimensions, useWindowDimensions as originalUseWindowDimensions, SafeAreaView} from 'react-native';
import { getStatusbarDimensions } from './statusbar';

export const ViewWindowMain = (props:any) => {
    const windowDimensions = useWindowDimensions();
    const statusbarDimensions = getStatusbarDimensions();
    return (
        <ViewWindowSafearea style={{flex:1, backgroundColor:'gray'}}>
            <View style={{height:windowDimensions.height+statusbarDimensions.height, width:"100%", overflow:'hidden'}}>
                {props.children}
            </View>
        </ViewWindowSafearea>
    )
}


// DIMENSIONS

export const useWindowDimensions = originalUseWindowDimensions; // use this hook if possible

export const getWindowDimensions = Dimensions; // else you can use this function instead


// SAFE AREA

export const ViewWindowSafearea = SafeAreaView


// STATUSBAR

// export type TypeWindowStatusbar = StatusBarProps

// export const ViewWindowStatusbar = (props:any) => {
//     return (
//         <StatusBar 
//             style={'light'} 
//             // backgroundColor="#0c4a73" 
//         />
//     )
// }

// export const getWindowStatusbarheight = () => { // <-- THIS IS AN EXAMPLE OF WHEN TO SPLIT OUT INTO A NEW FILE (see )
//     const platform_os = Platform.OS;
//     if (platform_os === 'web') { return 0 }
//     if (platform_os === 'ios') { return 0 } // iOS uses safeAreaView instead.
//     else { return 24 } // this is a hack to ensure that it doesn't cover the statusbar on android. This may not cover some custom roms.
// }


