import { StyleProp, StyleSheet, StyleSheetProperties } from "react-native";

// MAIN

// Main stylesheet object with methods
export const UtilityStylesheetMain = StyleSheet;

// General function to merge multiple style objects into a single stylesheet object
export const mergeStylesheetMain = (...styles: TypeStylesheetMain[]): {} => {
  return Object.assign({}, ...styles);
};

export type TypeStylesheetMain =
  | StyleSheetProperties
  | StyleProp<{ [key: string]: any }>[];

// STYLE

export type TypeStylesheetStyle = StyleProp<Record<string, any>>;
