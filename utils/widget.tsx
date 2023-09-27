// A widget is a container component that has options that appear on hover/click.

import { ViewRouterLink } from "./router";

import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ViewIconMain from "../components/displays/icons/ViewIconMain";

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
  const [showOptions, setOptions] = useState(false);
  const [showInfo, setInfo] = useState(false);
  return (
    <Pressable
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
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "gray",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Text style={{ padding: 5 }}>{title}</Text>
          <Text style={{ fontStyle: "italic", padding: 5 }}>{summary}</Text>
        </View>
      )}

      {/* Widget icons (show on hover / press of the entire widget) */}
      {showOptions && (
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 0,
            width: "100%",
          }}
        >
          {/* Divider */}
          <View style={{ flexGrow: 1 }}></View>

          {/* Info */}
          {(title || summary) && (
            <Pressable
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
            </Pressable>
          )}

          {/* Help / Documentation */}
          {help && (
            <Pressable
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
            </Pressable>
          )}

          {/* Collapse / Expand */}
          {collapsible && (
            <Pressable
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
            </Pressable>
          )}

          {/* Menu Icon */}
          <Pressable
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
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};
