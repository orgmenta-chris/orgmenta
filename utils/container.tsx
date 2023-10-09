// Placeholder (no theme/styling yet introduced.)

import { ScrollView, ScrollViewProps, View, ViewProps } from "react-native";

// SCROLL

export const ViewContainerScroll = ScrollView;

export type TypeContainerScroll = ScrollViewProps;

// STATIC

export const ViewContainerStatic = View;

export type TypeContainerStatic = ViewProps;

// ROW

export const ViewContainerRow = ({ style, ...props }: TypeContainerRow) => {
  // Just a normal View, but horizontal (more convinient that using ViewContainerStatic and specifying flexDirection)
  return <ViewContainerStatic {...props} style={[style, { flexDirection: "row" }]} />;
};

export type TypeContainerRow = TypeContainerStatic;
