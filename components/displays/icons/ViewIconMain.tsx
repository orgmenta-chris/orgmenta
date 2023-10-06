import  { memo } from "react";
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

interface interfaceIconMain {
  source: keyof typeof mapIconComponents;
  name: string;
  size?: number;
  color?: string;
  padding?: number;
  style?: ViewStyle;
}

const ViewIconMain: React.FC<interfaceIconMain> = memo(
  ({ source, name, size = 22, color = "white", padding, style }) => {
    const Icon = mapIconComponents[source] || mapIconComponents["Ionicons"];
    return (
      <Icon
        name={name}
        size={size}
        color={color}
        style={{ height: "100%", padding, ...style }}
      />
    );
  }
);

export default ViewIconMain;
