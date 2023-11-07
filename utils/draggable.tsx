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

// todo: resizable bugs
// todo: pushing other elements down / right (as optional prop)
// todo: test on mobile
// todo: performance, any relevenat memoization

import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import { ViewButtonIcon } from "./button";
import { useWindowDimensions } from "./window";
import { useReactState, useReactMemo, useReactEffect } from "./react";
import { UtilityGesturePan } from "./gesture";
import { Platform, Pressable } from "react-native";
import { UtilityPlatformMain } from "./platform";
import { ViewTypographyText } from "./typography";

export const ViewDraggableModalold = ({
  onClose, // function to run when the close-button is pressed
  lockWindow = true, // whether to prevent the modal from going outside the window
  head, // anything to put in the head of the component
  children, // anything to put in the body of the component
  rows, // number of rows in the parent grid
  columns, // number of columns in the parent grid
  parentDimensions, // x & y of the parent container
  cellsX, //how many cells wide the modal should be
  cellsY, //how many cells high the modal should be
  initialX, // which cell (X) the modal should start in.
  initialY, // which cell (Y) the modal should start in.
}: any) => {
  const [position, setPosition] = useReactState({ x: 0, y: 0 });
  const [positionSnapped, setPositionSnapped] = useReactState({
    x: position.x,
    y: position.y,
  });
  // Calculate dimensions:
  const cellWidth = parentDimensions?.width / columns;
  const cellHeight = parentDimensions?.height / rows;
  const window = useWindowDimensions();
  const [dragging, setDragging] = useReactState(false); // not being used yet, but will be used to indicate when to make the grid appear, make the dragged component appear on top of others if needed (w/elevation+zindex), change colors, move other objects etc.
  // Set initial position:
  // useReactEffect(() => {
  //   if (cellWidth && cellHeight) {
  //     setPositionSnapped({ x: cellWidth * initialX, y: cellHeight * initialY });
  //     setPosition({ x: cellWidth * initialX, y: cellHeight * initialY });
  //   }
  // }, [cellWidth, cellHeight, initialX, initialY]);
  const modalWidth = cellsX * cellWidth || 400;
  const modalHeight = cellsY * cellHeight || 400;
  // Function to handle the dragging operation
  const handleDrag = (dx: number, dy: number) => {
    let newX = position.x + dx;
    let newY = position.y + dy;
    let snappedX = columns ? Math.round(newX / cellWidth) * cellWidth : newX;
    let snappedY = rows ? Math.round(newY / cellHeight) * cellHeight : newY;
    if (lockWindow) {
      const maxPosX = (parentDimensions?.width || window.width) - modalWidth;
      const maxPosY = (parentDimensions?.height || window.height) - modalHeight;
      newX = Math.min(Math.max(newX, 0), maxPosX);
      newY = Math.min(Math.max(newY, 0), maxPosY);
    }
    setPosition({ x: newX, y: newY });
    setPositionSnapped({ x: snappedX, y: snappedY });
  };
  // The pan (drag/swipe) event functions
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
          padding: 5
        }}
      >
        {children}
      </ViewContainerColumn>
    </ViewContainerStatic>
  );
};

export const ViewDraggableBox = ({ testingMode, head, children, onClose, ...rest }: any) => {
  const {
    positionSnapped : movePosition,
    dragging,
    // modalWidth,
    // modalHeight,
    panResponder: movePanResponder
  } = useDraggableMove(rest);
  const {
    positionSnapped:resizePosition,
    resizing,
    modalWidth,
    modalHeight,
    panResponder: resizePanResponder
  } = useDraggableResize(rest);
  // console.log('dragging',dragging)
  // console.log('resizing',resizing,resizePosition )
  return (<>
    <ViewContainerStatic
      style={{  
        width: modalWidth + resizePosition.x-10,
        height: modalHeight + resizePosition.y-10,
        backgroundColor: "rgb(100,100,100)",
        borderRadius: 5,
        margin: 5,
        padding: 5,
        position: "absolute",
        zIndex: 9999999,
        elevation: 9999999,
        top: movePosition.y,
        left: movePosition.x,
      }}
      {...movePanResponder.panHandlers}
    >
      <ViewContainerRow
        style={{
          backgroundColor: "rgb(200,200,200)",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        {head}
        {/* <ViewContainerRow style={{ paddingLeft: 10 }}>{head}</ViewContainerRow> */}
        {/* <ViewButtonIcon
          onPress={onClose}
          iconName="x"
          iconSource={"Feather"}
          iconSize={24}
        /> */}
      </ViewContainerRow>

      <ViewContainerColumn
        style={{
          backgroundColor: "rgb(220,220,220)",
          flex: 1,
          padding: 5,
          position: 'relative', // Added for positioning the resize handle
        }}
      >
        {children}
        {testingMode && <ViewTypographyText>
          {`
          modalWidth:${modalWidth}
          modalHeight:${modalHeight}
          resizePositionX:${resizePosition.x}
          resizePositionY:${resizePosition.y}
          `}
          </ViewTypographyText>}
      </ViewContainerColumn>
      <ViewContainerStatic
          style={[
            {
              width: 50,
              height: 50,
              position: 'absolute',
              bottom: 0,
              right: 0,
              borderBottomWidth: 5,
              borderRightWidth: 5,
              // width: modalWidth,
              // height: modalHeight,
              // backgroundColor: "green",
              // borderRadius: 5,
              // backgroundColor: 'rgb(150,150,150)', // Different shade for visibility
              borderTopLeftRadius: 5,
            },
            // Apply cursor style only for web
            Platform.OS === 'web' ? { cursor: 'nwse-resize' } : {}
          ]}
          {...resizePanResponder.panHandlers}>

        </ViewContainerStatic>
    </ViewContainerStatic>
    
  </>);
};



export const useDraggableMove = ({
  onClose, // function to run when the close-button is pressed
  lockWindow = true, // whether to prevent the modal from going outside the window
  head, // anything to put in the head of the component
  children, // anything to put in the body of the component
  rows, // number of rows in the parent grid
  columns, // number of columns in the parent grid
  parentDimensions, // x & y of the parent container
  cellsX, //how many cells wide the modal should be
  cellsY, //how many cells high the modal should be
  initialX, // which cell (X) the modal should start in.
  initialY, // which cell (Y) the modal should start in.
}: any) => {
  const [position, setPosition] = useReactState({ x: 0, y: 0 });
  const [positionSnapped, setPositionSnapped] = useReactState({
    x: position.x,
    y: position.y,
  });
  // Calculate dimensions:
  const cellWidth = parentDimensions?.width / columns;
  const cellHeight = parentDimensions?.height / rows;
  // const window = useWindowDimensions();
  const [dragging, setDragging] = useReactState(false); // not being used yet, but will be used to indicate when to make the grid appear, make the dragged component appear on top of others if needed (w/elevation+zindex), change colors, move other objects etc.
  // Set initial position:
  useReactEffect(() => {
    if (cellWidth  && cellHeight) {
      setPositionSnapped({ x: cellWidth * initialX, y: cellHeight * initialY });
      setPosition({ x: cellWidth * initialX, y: cellHeight * initialY });
    }
  }, [cellWidth, cellHeight, initialX, initialY]);
  const modalWidth = cellsX * cellWidth || 400;
  const modalHeight = cellsY * cellHeight || 400;
  // Function to handle the dragging operation
  const handleDrag = (dx: number, dy: number) => {
    let newX = position.x + dx;
    let newY = position.y + dy;
    let snappedX = columns ? Math.round(newX / cellWidth) * cellWidth : newX;
    let snappedY = rows ? Math.round(newY / cellHeight) * cellHeight : newY;
    if (lockWindow) {
      const maxPosX = (parentDimensions?.width) - modalWidth;
      const maxPosY = (parentDimensions?.height) - modalHeight;
      newX = Math.min(Math.max(newX, 0), maxPosX);
      newY = Math.min(Math.max(newY, 0), maxPosY);
    }
    setPosition({ x: newX, y: newY });
    setPositionSnapped({ x: snappedX, y: snappedY });
  };
  // The pan (drag/swipe) event functions
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
  return {
    position,
    positionSnapped,
    dragging,
    modalWidth,
    modalHeight,
    panResponder
  }
};

export const useDraggableResize = ({
  lockWindow = true,
  rows,
  columns,
  parentDimensions,
  cellsX,
  cellsY,
  initialX,
  initialY,
}: any) => {
  const [position, setPosition] = useReactState({ x: 0, y: 0 });
  const [positionSnapped, setPositionSnapped] = useReactState({
    x: position.x,
    y: position.y,
  });
  // Calculate dimensions:
  const cellWidth = parentDimensions?.width / columns;
  const cellHeight = parentDimensions?.height / rows;
  const window = useWindowDimensions();
  const [resizing, setResizing] = useReactState(false); // not being used yet, but will be used to indicate when to make the grid appear, make the dragged component appear on top of others if needed (w/elevation+zindex), change colors, move other objects etc.
  // Set initial position:
  // useReactEffect(() => {
  //   if (cellWidth && initialX && cellHeight && initialY) {
  //     // setPositionSnapped({ x: cellWidth * initialX, y: cellHeight * initialY });
  //     // setPosition({ x: cellWidth * initialX, y: cellHeight * initialY });
  //   }
  // }, [cellWidth, cellHeight, initialX, initialY]);
  const modalWidth = cellsX * cellWidth || 400;
  const modalHeight = cellsY * cellHeight || 400;
  // Function to handle the dragging operation
  const handleDrag = (dx: number, dy: number) => {
    let newX = position.x + dx;
    let newY = position.y + dy;
    let snappedX = columns ? Math.round(newX / cellWidth) * cellWidth : newX;
    let snappedY = rows ? Math.round(newY / cellHeight) * cellHeight : newY;
    if (lockWindow) {
      const maxPosX = (parentDimensions?.width || window.width) - modalWidth;
      const maxPosY = (parentDimensions?.height || window.height) - modalHeight;
      newX = Math.min(Math.max(newX, 0), maxPosX);
      newY = Math.min(Math.max(newY, 0), maxPosY);
    }
    setPosition({ x: newX, y: newY });
    setPositionSnapped({ x: snappedX, y: snappedY });
  };
  // The pan (drag/swipe) event functions
  const panResponder = useReactMemo(
    () =>
      UtilityGesturePan.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          setResizing(true);
        },
        onPanResponderMove: (_, { dx, dy }) => {
          handleDrag(dx, dy);
        },
        onPanResponderTerminationRequest: () => true,
        onPanResponderRelease: (_, { dx, dy }) => {
          setResizing(false);
        },
        onPanResponderTerminate: (_, { dx, dy }) => {
          setResizing(false);
        },
      }),
    [position.x, position.y]
  );
  return {
    position,
    positionSnapped,
    resizing,
    modalWidth,
    modalHeight,
    panResponder
  }
};

