import { StyleProp } from "react-native";
import { StyleProp } from "react-native";

export type TypeStylesheetMain = StyleProp<Record<string, any>> & {
  [key: string]: any;
};

// General function to merge multiple style objects into a single stylesheet object
export const mergeStylesheetMain = (...styles: TypeStylesheetMain[]): {} => {
  return Object.assign({}, ...styles);
};
