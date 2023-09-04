// The component 'ViewIconMain' allows you to use any of the icons available to expo (see the '@expo/vector-icons' import).
// https://icons.expo.fyi/
// Example usage:
// <ViewIconMain 
    // name={expanded?'caretup':'caretdown'}
    // source={'AntDesign'}
    // color={'gray'}
    // size={10}
// />


import React, { memo } from 'react';
import { ViewStyle } from 'react-native';
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
} from '@expo/vector-icons';


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
  style?: ViewStyle;
}

export const ViewIconMain: React.FC<interfaceIconMain> = memo(({ source, name, size = 22, color = 'white', style }) => {
  const Icon = mapIconComponents[source] || mapIconComponents['Ionicons'];
  return <Icon name={name} size={size} color={color} style={{ height: '100%', ...style }} />;
});
