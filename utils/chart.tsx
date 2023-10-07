import { ViewContainerScroll } from "./container";
import { ViewTypographyText } from "./typography";

export const ViewChartMain = (props: any) => {
  return (
    <ViewContainerScroll
      style={{ backgroundColor: "white", flexDirection: "column", flex: 1 }}
    >
      <ViewTypographyText>ViewChartMain todo</ViewTypographyText>
    </ViewContainerScroll>
  );
};
