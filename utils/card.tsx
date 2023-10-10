import {
  ViewTypographySubheading,
  ViewTypographyText,
} from "../utils/typography";
import { ViewRouterLinkthemed } from "../utils/router";
import { ViewIconMain } from "../utils/icon";
import { ViewButtonPressable } from "./button";
import { ViewContainerStatic } from "./container";
import { useReactState } from "./react";

// Expandable

export const ViewCardExpandable = (props: any) => {
  const [expanded, expandedToggle] = useReactState(props.startExpanded);
  return (
    <ViewContainerStatic
      style={{
        flex: props.flex,
        padding: 5,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <ViewContainerStatic
        style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
      >
        {/* Header Title */}
        <ViewContainerStatic style={{ flex: 1 }}>
          {props.headerlink ? (
            <ViewCardHeaderlink {...props} />
          ) : (
            <ViewCardHeaderplain {...props} expandedToggle={expandedToggle} />
          )}
        </ViewContainerStatic>
        {/* Header Icon */}
        <ViewButtonPressable
          onPress={() => expandedToggle((oldValue: any) => !oldValue)}
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <ViewIconMain
            name={expanded ? "caretdown" : "caretright"}
            source={"AntDesign"}
            color={"gray"}
          />
        </ViewButtonPressable>
      </ViewContainerStatic>
      {/* Body */}
      {expanded && (
        <ViewContainerStatic style={{ flex: 1, padding: 10 }}>
          {props.body || (
            <ViewTypographyText>CardBody Missing</ViewTypographyText>
          )}
        </ViewContainerStatic>
      )}
    </ViewContainerStatic>
  );
};

// Non-expandable card

export const ViewCardMain = (props: any) => {
  return (
    <ViewContainerStatic
      style={{
        padding: 5,
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <ViewContainerStatic
        style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
      >
        {/* Header Title */}
        <ViewContainerStatic style={{ flex: 1 }}>
          {props.headerlink ? (
            <ViewCardHeaderlink {...props} />
          ) : (
            <ViewCardHeaderplain {...props} />
          )}
        </ViewContainerStatic>
      </ViewContainerStatic>
      {/* Body */}
      <ViewContainerStatic style={{ flex: 1, padding: 10 }}>
        {props.body || (
          <ViewTypographyText>CardBody Missing</ViewTypographyText>
        )}
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};

// Header

export const ViewCardHeaderplain = (props: any) => {
  return (
    <ViewButtonPressable
      onPress={() => props.expandedToggle((oldValue: any) => !oldValue)}
      style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
    >
      <ViewTypographySubheading selectable={false} numberOfLines={1}>
        {props.header || "Card Header Missing"}
      </ViewTypographySubheading>
    </ViewButtonPressable>
  );
};

export const ViewCardHeaderlink = (props: any) => {
  return (
    <ViewContainerStatic style={{ flex: 1 }}>
      <ViewRouterLinkthemed
        style={{
          flex: 3,
          textDecoration: "none",
        }}
        to={props.headerlink}
      >
        <ViewTypographySubheading selectable={false} numberOfLines={1}>
          {props.header}
        </ViewTypographySubheading>
      </ViewRouterLinkthemed>
    </ViewContainerStatic>
  );
};
