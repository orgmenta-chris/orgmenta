// The component 'ViewIconMain' allows you to use any of the icons available to expo (see the '@expo/vector-icons' import).
// https://icons.expo.fyi/
// Example usage:
// <ViewIconMain
// name={expanded?'caretup':'caretdown'}
// source={'AntDesign'}
// color={'gray'}
// size={10}
// <ViewIconMain
// name={expanded?'caretup':'caretdown'}
// source={'AntDesign'}
// color={'gray'}
// size={10}
// />

import * as Font from "expo-font";
import React, { memo } from "react";
import { ViewStyle } from "react-native";
import * as Font from "expo-font";
import React, { memo } from "react";
import { ViewStyle } from "react-native";
import {
  AntDesign,
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
  Octicons,
  Entypo,
} from "@expo/vector-icons";

// Preload

async function PreloadIconsMain() {
    await Font.loadAsync({
        ...AntDesign.font,
        ...Fontisto.font,
        ...MaterialIcons.font,
        ...MaterialCommunityIcons.font,
        ...Ionicons.font,
        ...FontAwesome.font,
        ...FontAwesome5.font,
        ...Feather.font,
        ...Octicons.font,
        ...Entypo.font,
    });
}
PreloadIconsMain(); // run immediately upon app running so as to preload all of the icons. Note that this isn't holding up the rendering of anything (function over form) so icons may still be shown before this is completed.

// Components

export const mapIconComponents: any = {
    AntDesign,
    Fontisto,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    FontAwesome,
    FontAwesome5,
    Feather,
    Octicons,
    Entypo,
};

// Main

export interface interfaceIconMain {
    source: keyof typeof mapIconComponents;
    name: string;
    size?: number;
    color?: string;
    padding?: number;
    style?: ViewStyle;
}

export const ViewIconMain: React.FC<interfaceIconMain> = memo(
  ({ source, name, size = 22, color = "white", padding, style }) => {
    const Icon = mapIconComponents[source] || mapIconComponents["Ionicons"];
    return (
      <Icon
        name={name}
        size={size}
        color={color}
        style={{ padding, ...style }}
      />
    );
  }
);
