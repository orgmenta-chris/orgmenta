import { useThemeToken, TypeThemeMain } from "./theme";
import { validateObjectIsobject } from "./object";
import { mergeStylesheetMain } from "./stylesheet";
import { useReactState, useReactEffect } from "./react";
import { Text, TextProps, TextStyle, StyleProp } from "react-native";
// Main

export type TypeTypographyText = TextProps;

export const ViewTypographyText = Text;

// Themed

export type TypeTypographyTextthemed = TypeTypographyText & {
  children?: React.ReactNode;
  theme_token?: string;
  textString?:String;
  style?: StyleProp<TextStyle> & { [key: string]: any };
};

export const ViewTypographyTextthemed = ({
  children,
  theme_token,
  style,
  textString,
  ...rest
}: TypeTypographyTextthemed) => {
  const theme = useThemeToken(theme_token || "text") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TextStyle);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as any) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {textString}{children}
    </Text>
  );
};

export const ViewTypographyHeading = ({
  children,
  theme_token,
  style,
  textString,
  ...rest
}: TypeTypographyTextthemed) => {
  const theme = useThemeToken(theme_token || "heading") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TextStyle);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as any) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {textString}{children}
    </Text>
  );
};

export const ViewTypographySubheading = ({
  children,
  theme_token,
  style,
  ...rest
}: TypeTypographyTextthemed) => {
  const theme = useThemeToken(theme_token || "subheading") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TextStyle);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as any) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {children}
    </Text>
  );
};

export const ViewTypographySubsubheading = ({
  children,
  theme_token,
  style,
  ...rest
}: TypeTypographyTextthemed) => {
  const theme = useThemeToken(theme_token || "subsubheading") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TextStyle);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as any) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {children}
    </Text>
  );
};

// LABEL

export const ViewTypographyLabel = ({
  style,
  ...props
}: TypeTypographyLabel) => {
  // Just a normal Text, but not selectable (more convinient that using ViewTypographyText and specifying selectable)
  return (
    <ViewTypographyText {...props} style={[style, { flexDirection: "row" }]} />
  );
};

export type TypeTypographyLabel = TypeTypographyText;

// CYCLING

export const ViewTypographyCycling = ({
  texts,
  ...rest
}: TypeTypographyCycling) => {
  // Text that cycles through multiple options (no animation, just cycles through an array of values).
  const [index, setIndex] = useReactState(0);
  useReactEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex: any) => (prevIndex + 1) % texts.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return <ViewTypographyText {...rest}>{texts[index]}</ViewTypographyText>;
};

export type TypeTypographyCycling = TypeTypographyText & {
  texts: string[];
  style: TextStyle;
};
