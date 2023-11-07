import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import { ViewDraggableBox } from "./draggable";
import { useReactRef, useReactState } from "./react";
import { ViewTypographySubheading } from "./typography";
import { ViewChartAreastacked, ViewChartPiestandard } from "./chart";
export const ViewGridContainer = ({ rows, columns, children, parentDimensions, setParentDimensions, containerHeight }: any) => {
  // const [parentDimensions, setParentDimensions] = useReactState({
  //   width: 0,
  //   height: 0,
  // });
  const handleLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setParentDimensions({ width, height });
  };
  return (
    <ViewContainerStatic
      onLayout={handleLayout}
      style={{
        height: containerHeight,
        // flex: 1,
        margin: 5,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: "lightblue",
      }}
    >
      {Array.from({ length: rows }).map((x, i) => (
        <ViewContainerRow key={"row" + i} style={{ flex: 1 }}>
          {Array.from({ length: columns }).map((x, i) => (
            <ViewContainerColumn
              key={"column" + i}
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderColor: "lightblue",
              }}
            />
          ))}
        </ViewContainerRow>
      ))}
      {/* example modals */}
      {children}
      {/* <ViewDraggableBox
        parentDimensions={parentDimensions}
        rowWidth={69}
        rows={10}
        columns={15}
        cellsX={4} //how many cells wide the modal should be
        cellsY={4} //how many cells high the modal should be
        initialX={2}
        initialY={3}
        head={  
          <ViewTypographySubheading
            style={{ paddingLeft: 10 }}
            selectable={false}
          >
            Example AreaChart
          </ViewTypographySubheading>
        }
      >
        <ViewChartAreastacked />
      </ViewDraggableBox>
      <ViewDraggableBox
        parentDimensions={parentDimensions}
        rowWidth={69}
        rows={10}
        columns={15}
        cellsX={4} //how many cells wide the modal should be
        cellsY={4} //how many cells high the modal should be
        initialX={1}
        initialY={4}
        head={
          <ViewTypographySubheading
            style={{ paddingLeft: 10 }}
            selectable={false}
          >
            Example PieChart
          </ViewTypographySubheading>
        }
      >
        <ViewChartPiestandard />
      </ViewDraggableBox> */}
    </ViewContainerStatic>
  );
};
