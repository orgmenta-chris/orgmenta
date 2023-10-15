// Placeholder for pressable shared/enhanced functionality & styling.
// Note: react-native button and touchable opacity are no longer supported, please ensure Pressable is used

import {
  ViewTypographySubheading,
  ViewTypographySubsubheading,
  ViewTypographyText,
} from "./typography";
import { ViewIndicatorSpinner } from "./indicator";
import { ViewContainerColumn, ViewContainerStatic } from "./container";
import { ViewRouterLinkthemed } from "./router";
import { Pressable, PressableProps } from "react-native";
import { useReactState } from "./react";
import { ViewIconMain } from "./icon";

// PRESSABLE

// The main pressable component
export const ViewButtonCore = Pressable;

// Provide default styling if none specified (TODO: use theme proper.)
export const ViewButtonPressable: any = ({
  disabled,
  children,
  style,
  ...rest
}: any) => {
  style = style || { backgroundColor: "lightblue", margin: 2, padding: 5 };
  return (
    <Pressable
      style={style}
      disabled={disabled} // hook 'disabled' prop up to styles once theming is in place
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export type TypeButtonPressable = PressableProps;

// CONTAINER

export const ViewButtonContainer = ({
  buttonText,
  isLoading,
  ...rest
}: any) => {
  const [shadowState, shadowSet] = useReactState(false);
  return (
    <ViewButtonCore
      style={{
        ...styleButtonMain,
        shadowOffset: { width: 0, height: shadowState ? 5 : 0 },
        shadowOpacity: shadowState ? 0.4 : 0,
        elevation: shadowState ? 2 : 10,
      }}
      {...rest}
    >
      <ViewTypographyText style={{ textAlign: "center" }}>
        {buttonText}
      </ViewTypographyText>
      <ViewTypographyText>
        {isLoading ? <ViewIndicatorSpinner /> : null}
      </ViewTypographyText>
    </ViewButtonCore>
  );
};

// Alternative button (CG assigned, placeholder)
export const ViewButtonLink = ({
  to,
  buttonText,
  buttonSubtext,
  isLoading,
  button_name,
  button_source,
  ...rest
}: any) => {
  const [shadowState, shadowSet] = useReactState(false);
  return (
    <ViewRouterLinkthemed to={to} style={{ flex: 1 }}>
      <ViewButtonCore
        style={{
          ...styleButtonMain,
          flexDirection: "row",
          shadowOffset: { width: 0, height: shadowState ? 5 : 0 },
          shadowOpacity: shadowState ? 0.4 : 0,
          elevation: shadowState ? 2 : 10,
        }}
        onHoverIn={() => shadowSet(true)}
        onHoverOut={() => shadowSet(false)}
      >
        {button_name && (
          <ViewIconMain
            name={button_name}
            source={button_source}
            color="black"
            size={30}
            style={{paddingVertical:10}}
          />
        )}
        <ViewContainerColumn style={{flex:1}}>
          <ViewTypographySubheading style={{ flex: 1, textAlign: "center"}}>
            {buttonText}
          </ViewTypographySubheading>
          <ViewTypographySubsubheading
            style={{ flex: 1, textAlign: "center", fontStyle: "italic" }}
          >
            {buttonSubtext}
          </ViewTypographySubsubheading>
        </ViewContainerColumn>
      </ViewButtonCore>
    </ViewRouterLinkthemed>
  );
};

// MAIN

export const styleButtonMain = {
  // General style. (Why/Why not) should this use StyleSheet?
  flex: 1,
  margin: 5,
  borderRadius: 5,
  backgroundColor: "#F8F8F8",
  padding: 5,
  shadowColor: "#000",
  shadowRadius: 10,
};
