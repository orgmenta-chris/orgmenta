import { useWindowDimensions } from "./window";
import { ViewContainerStatic } from "./container";

export const ViewPageMain = ({ children, marginEnabled = true }: any) => {
  const windowDimensions = useWindowDimensions();
  return (
    <ViewContainerStatic
      style={{
        flex: 1,
        marginLeft: marginEnabled && windowDimensions.width > 768 ? "15%" : 0,
        marginRight: marginEnabled && windowDimensions.width > 768 ? "15%" : 0,
      }}
    >
      {children}
    </ViewContainerStatic>
  );
};
