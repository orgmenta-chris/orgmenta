import { useWindowDimensions } from "./window";
import { ViewContainerStatic } from "./container";
import { useReactEffect } from "./react";
import { UtilityPlatformMain } from "./platform";

// MAIN

export const ViewPageMain = ({ children, marginEnabled = true }: any) => {
  // const windowDimensions = useWindowDimensions();
  return (
    <ViewContainerStatic
      style={{
        margin: 10,
        flex: 1,
        backgroundColor: "rgba(220,220,220,1)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(180,180,180,1)",
      }}
    >
      {children}
    </ViewContainerStatic>
  );
};

// SECTION

export const ViewPageSection = ({ children }: any) => {
  // Placeholder.
  // const windowDimensions = useWindowDimensions();
  return (
    <ViewContainerStatic
      style={{
        margin: 10,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {children}
    </ViewContainerStatic>
  );
};

// TITLE

export const usePageTitle = (pageTitle: string) => {
  return useReactEffect(() => {
    if (pageTitle && UtilityPlatformMain.OS==='web') {
      document.title = pageTitle;
    }
  }, [pageTitle]);
};
