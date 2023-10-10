// A widget is a container component that has options that appear on hover/click.

import { ViewRouterLink } from "./router";
import { ViewIconMain } from "./icon";
import { ViewTypographyText } from "./typography";
import { ViewContainerStatic, ViewContainerRow } from "./container";
import { ViewButtonPressable } from "./button";
import { useReactState } from "./react";

// Main

export const ViewWidgetMain = ({
  children,
  title,
  summary,
  collapsible,
  help,
  direction,
  backgroundColor,
  height = 20,
}: any) => {
  const [showOptions, setOptions] = useReactState(false);
  const [showInfo, setInfo] = useReactState(false);
  return (
    <ViewButtonPressable
      // onPress={()=>setOptions((oldValue)=>!oldValue)}
      // onHoverIn={()=>setOptions((oldValue)=>true)}
      // onHoverOut={()=>setOptions((oldValue)=>false)}
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        minHeight: 100,
        minWidth: 100,
        flexDirection: direction,
      }}
    >
      {/* Children (main content ) */}
      {children}

      {/* Widget Info (show on hover / press of the info icon) */}
      {showInfo && (
        <ViewContainerRow
          style={{
            backgroundColor: "gray",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <ViewTypographyText style={{ padding: 5 }}>{title}</ViewTypographyText>
          <ViewTypographyText style={{ fontStyle: "italic", padding: 5 }}>{summary}</ViewTypographyText>
        </ViewContainerRow>
      )}

      {/* Widget icons (show on hover / press of the entire widget) */}
      {showOptions && (
        <ViewContainerRow
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          {/* Divider */}
          <ViewContainerStatic style={{ flexGrow: 1 }}></ViewContainerStatic>

          {/* Info */}
          {(title || summary) && (
            <ViewButtonPressable
              onHoverIn={() => {
                setOptions(true);
                setInfo(true);
              }}
              onHoverOut={() => {
                setInfo(false);
              }}
              onPress={() => {
                setOptions((oldValue) => !oldValue);
                setInfo((oldValue) => !oldValue);
              }}
              style={{ padding: 5, backgroundColor: "gray" }}
            >
              <ViewIconMain
                name={"info"}
                source={"AntDesign"}
                color={"white"}
                size={15}
              />
            </ViewButtonPressable>
          )}

          {/* Help / Documentation */}
          {help && (
            <ViewButtonPressable
              onHoverIn={() => {
                setOptions((oldValue) => true);
              }}
              style={{ padding: 5, backgroundColor: "gray" }}
            >
              <ViewRouterLink
                to="documentation_url_goes_here"
                style={{ textDecoration: "none" }}
              >
                <ViewIconMain
                  name={"help"}
                  source={"Entypto"}
                  color={"white"}
                  size={15}
                />
              </ViewRouterLink>
            </ViewButtonPressable>
          )}

          {/* Collapse / Expand */}
          {collapsible && (
            <ViewButtonPressable
              onHoverIn={() => {
                setOptions((oldValue) => true);
              }}
              style={{ padding: 5, backgroundColor: "gray" }}
            >
              <ViewIconMain
                name={"caret-up"}
                source={"FontAwesome"}
                color={"white"}
                size={15}
              />
            </ViewButtonPressable>
          )}

          {/* Menu Icon */}
          <ViewButtonPressable
            onHoverIn={() => {
              setOptions((oldValue) => true);
            }}
            style={{ padding: 5, backgroundColor: "gray" }}
          >
            <ViewIconMain
              name={"dots-three-vertical"}
              source={"Entypo"}
              color={"white"}
              size={12}
              padding={2}
            />
          </ViewButtonPressable>
        </ViewContainerRow>
      )}
    </ViewButtonPressable>
  );
};
