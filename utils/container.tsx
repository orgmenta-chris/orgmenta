// Placeholder (no theme/styling yet introduced.)

import { ScrollView, ScrollViewProps, View, ViewProps } from "react-native";

// SCROLL

export const ViewContainerScroll = ScrollView;

export type TypeContainerScroll = ScrollViewProps;

// STATIC

export const ViewContainerStatic = View;

export type TypeContainerStatic = ViewProps;

// ROW

// possibly replace this with just passing in 'row' and 'column' boolean props to the standard Static and Scroll components
export const ViewContainerRow = ({ style, ...props }: TypeContainerRow) => {
  // Just a normal View, but horizontal (more convinient that using ViewContainerStatic and specifying flexDirection, and is easy to read and grok that it is a row)
  return (
    <ViewContainerStatic {...props} style={[style, { flexDirection: "row" }]} />
  );
};

export type TypeContainerRow = TypeContainerStatic;

// COLUMN

// possibly replace this with just passing in 'row' and 'column' boolean props to the standard Static and Scroll components
export const ViewContainerColumn = ({ style, ...props }: TypeContainerRow) => {
  // Just a normal View, but horizontal (more convinient that using ViewContainerStatic and specifying flexDirection, and is easy to read and grok that it is a row)
  return (
    <ViewContainerStatic {...props} style={[style, { flexDirection: "column" }]} />
  );
};

export type TypeContainerColumn = TypeContainerStatic;
