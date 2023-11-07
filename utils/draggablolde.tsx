// Draggable component.
// Note: useWindowDimensions is used if the parent container's dimensions aren't passed as props (not recommended!)
// Put the following in the parent and pass parentDimensions to this component for a better UX:
// const [parentDimensions, setParentDimensions] = useReactState({
//   width: 0,
//   height: 0,
// });
// const handleLayout = (event: any) => {
//   const { width, height } = event.nativeEvent.layout;
//   setParentDimensions({ width, height });
// };

// todo: resizable modals (use a similar panresponder and handledrag function)
// todo: test on mobile
// todo: performance, any relevenat memoization

import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import { ViewButtonIcon } from "./button";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";
import { useWindowDimensions } from "./window";
import { useReactState, useReactMemo, useReactEffect } from "./react";
import { UtilityGesturePan } from "./gesture";

export const ViewDraggableModal = ({
  onClose,
  lockWindow = false, // whether to prevent the modal from going outside the window
  head,
  children,
  rows,
  columns,
  parentDimensions,
  cellsX, //how many cells wide the modal should be
  cellsY, //how many cells high the modal should be
  initialX, // which cell (X) the modal should start in.
  initialY, // which cell (Y) the modal should start in.
}: any) => {
  const cellWidth = parentDimensions?.width / columns;
  const cellHeight = parentDimensions?.height / rows;
  // const window = useWindowDimensions();
  const [position, setPosition] = useReactState({ x: 0, y: 0 });
  const [positionSnapped, setPositionSnapped] = useReactState({
    x: position.x,
    y: position.y,
  });
  const [dragging, setDragging] = useReactState(false); // not being used yet, but will be used to indicate when to make the grid appear, change colors, move other objects etc.
  // useReactEffect(() => {
  //   if (cellWidth && initialX && cellHeight && initialY) {
  //     setPositionSnapped({ x: cellWidth * initialX, y: cellHeight * initialY });
  //     setPosition({ x: cellWidth * initialX, y: cellHeight * initialY });
  //   }
  // }, [cellWidth, cellHeight, initialX, initialY]);
  const modalWidth = cellsX * cellWidth || 400;
  const modalHeight = cellsY * cellHeight || 400;
  const handleDrag = (dx: number, dy: number) => {
    let newX = position.x + dx;
    let newY = position.y + dy;
    let snappedX = columns ? Math.round(newX / cellWidth) * cellWidth : newX;
    let snappedY = rows ? Math.round(newY / cellHeight) * cellHeight : newY;
    if (lockWindow) {
      const maxPosX = (parentDimensions?.width) - modalWidth;
      const maxPosY = (parentDimensions?.height) - modalHeight;
      // const maxPosX = (parentDimensions?.width || window.width) - modalWidth;
      // const maxPosY = (parentDimensions?.height || window.height) - modalHeight;
      newX = Math.min(Math.max(newX, 0), maxPosX);
      newY = Math.min(Math.max(newY, 0), maxPosY);
    }
    setPosition({ x: newX, y: newY });
    setPositionSnapped({ x: snappedX, y: snappedY });
  };
  const panResponder = useReactMemo(
    () =>
      UtilityGesturePan.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          setDragging(true);
        },
        onPanResponderMove: (_, { dx, dy }) => {
          handleDrag(dx, dy);
        },
        onPanResponderTerminationRequest: () => true,
        onPanResponderRelease: (_, { dx, dy }) => {
          setDragging(false);
        },
        onPanResponderTerminate: (_, { dx, dy }) => {
          setDragging(false);
        },
      }),
    [position.x, position.y]
  );
  return (
    <ViewContainerStatic
      style={{
        width: modalWidth,
        height: modalHeight,
        backgroundColor: "rgb(100,100,100)",
        borderRadius: 5,
        padding: 5,
        position: "absolute",
        zIndex: 9999999, // keep the modal on top of any other components on Web
        elevation: 9999999, // keep the modal on top of any other components on Android
        top: positionSnapped.y,
        left: positionSnapped.x,
      }}
      {...panResponder.panHandlers}
    >
      <ViewContainerRow
        style={{
          backgroundColor: "rgb(200,200,200)",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <ViewContainerRow style={{ paddingLeft: 10 }}>{head}</ViewContainerRow>
        <ViewButtonIcon
          onPress={onClose}
          iconName="x"
          iconSource={"Feather"}
          iconSize={24}
        />
      </ViewContainerRow>

      <ViewContainerColumn
        style={{
          backgroundColor: "rgb(220,220,220)",
          flex: 1,
        }}
      >
        {children}
      </ViewContainerColumn>
    </ViewContainerStatic>
  );
};
