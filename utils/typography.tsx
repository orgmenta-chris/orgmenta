import { useThemeToken, TypeThemeMain } from "./theme";
import { validateObjectIsobject } from "./object";
import { mergeStylesheetMain } from "./stylesheet";
import { Text, TextProps, TextStyle, StyleProp } from "react-native";

// Main

export type TypeTypographyText = TextProps;

export const ViewTypographyText = Text;

// Themed

export type TypeTypographyTextthemed = TypeTypographyText & {
  children?: React.ReactNode;
  theme_token?: string;
  style?: StyleProp<TextStyle> & { [key: string]: any };
};

export const ViewTypographyTextthemed = ({
  children,
  theme_token,
  style,
  ...rest
}: TypeTypographyTextthemed) => {
  const theme = useThemeToken(theme_token || "text") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TextStyle);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as TextStyle) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {children}
    </Text>
  );
};

export const ViewTypographyHeading = ({
  children,
  theme_token,
  style,
  ...rest
}: TypeTypographyTextthemed) => {
  const theme = useThemeToken(theme_token || "heading") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TextStyle);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as TextStyle) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {children}
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
    isStyleObject ? (style as TextStyle) : {}
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
    isStyleObject ? (style as TextStyle) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <Text {...propsMerged}>
      {/* Text passed through as children must be within a text element.*/}
      {children}
    </Text>
  );
};
