// Placeholder for pressable shared/enhanced functionality & styling.
// Note: react-native button and touchable opacity are no longer supported, please ensure Pressable is used

import { Pressable, PressableProps } from "react-native";
import { ViewIndicatorSpinner } from "./indicator";
import { ViewTypographySubheading, ViewTypographySubsubheading, ViewTypographyText } from "./typography";
import { ViewContainerColumn, ViewContainerStatic } from "./container";
import { ViewRouterLinkthemed } from "./router";

// PRESSABLE

// The main pressable component
// export const ViewButtonPressable = Pressable;

// Provide default styling if none specified (TODO: use theme proper.)
export const ViewButtonPressable:any = ({
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
// Temp/placeholder
export const ViewButtonContainer = ({ buttonText, isLoading, ...rest }: any) => {
  return (
    <ViewButtonPressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "lightblue",
        gap: 5,
        marginHorizontal: 12,
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
      {...rest}
    >
      <ViewTypographyText style={{ textAlign: "center" }}>
        {buttonText}
      </ViewTypographyText>
      <ViewTypographyText>
        {isLoading ? <ViewIndicatorSpinner /> : null}
      </ViewTypographyText>
    </ViewButtonPressable>
  );
};
// Example usage (not tested yet)
{/* <ViewButtonContainer
onPress={() => signin.mutate()}
title={`Sign In`}
isLoading={signin.isLoading}
/> */}


// Alternative button (CG assigned, placeholder)
export const ViewButtonLink = ({to, buttonText, buttonSubtext, isLoading, ...rest }: any) => {
  return (
          <ViewRouterLinkthemed to={to}>
            <ViewContainerStatic
              style={{
                flex: 1,
                height: 50,
                margin: 10,
                marginHorizontal: "20%",
                borderRadius: 5,
                backgroundColor: "white",
              }}
            >
              <ViewTypographySubheading
                style={{ flex: 1, textAlign: "center" }}
              >
                {buttonText}
              </ViewTypographySubheading>
              <ViewTypographySubsubheading
                style={{ flex: 1, textAlign: "center", fontStyle: "italic" }}
              >
                {buttonSubtext}
              </ViewTypographySubsubheading>
            </ViewContainerStatic>
          </ViewRouterLinkthemed>
  );
};
