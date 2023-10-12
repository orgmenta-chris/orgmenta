import { shareAsync, SharingOptions, isAvailableAsync } from "expo-sharing";
import { ViewContainerRow, ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";

// OPEN

export const asyncShareOpen = shareAsync;

// OPTIONS

export type TypeShareOptions = SharingOptions;

// AVAILABLE

export const asyncShareAvailable = isAvailableAsync; // returns boolean

// CONTAINER

export const ViewShareContainer = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewContainerRow>
        <ViewTypographyText>ViewShareContainer placeholder.</ViewTypographyText>
      </ViewContainerRow>
      <ViewContainerRow>
        <ViewShareIcon />
        <ViewShareIcon />
        <ViewShareIcon />
      </ViewContainerRow>
    </ViewContainerStatic>
  );
};

// ICON

export const ViewShareIcon = (props: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographyText>ViewShareIcon placeholder.</ViewTypographyText>
    </ViewContainerStatic>
  );
};
