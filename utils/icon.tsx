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
