import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerStatic,
} from "./container";
import { ViewButtonCore, ViewButtonIcon } from "./button";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";
import { useWindowDimensions } from "./window";
import { useReactState, useReactMemo } from "./react";
import { UtilityGesturePan } from "./gesture";
import { UtilityStylesheetMain } from "./stylesheet";

export const ViewDraggableModal = ({
  // visible,
  onClose,
  lockWindow = true,
  // grid='none' //todo
  children,
}: any) => {
  const window = useWindowDimensions();
  const [position, setPosition] = useReactState({ x: 0, y: 0 });
  const [dragging, setDragging] = useReactState(false);
  // console.log("dragging", dragging);
  const handleDrag = (dx: any, dy: any) => {
    let newX = position.x + dx;
    let newY = position.y + dy;
    if (lockWindow) {
      const modalWidth = 400; // Replace this with the actual width of the Draggable component (stop it going out of bounds)
      const modalHeight = 400; // Replace this with the actual height of the Draggable component (stop it going out of bounds)
      const maxPosX = window.width - modalWidth;
      const maxPosY = window.height - modalHeight;
      if (newX < 0) {
        newX = 0; // Limit the X coordinate within the parent component
      } else if (newX > maxPosX) {
        newX = maxPosX;
      }
      if (newY < 0) {
        newY = 0; // Limit the Y coordinate within the parent component
      } else if (newY > maxPosY) {
        newY = maxPosY;
      }
    }
    setPosition({ x: newX, y: newY });
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
        onPanResponderRelease: (_, { dx, dy }) => {
          setDragging(false);
          if (position.x + dx < 0 || position.y + dy < 0) {
            setPosition({ x: 0, y: 0 });
          }
        },
      }),
    [position.x, position.y]
  );
  return (
    <ViewContainerStatic
      style={{
        width: 400,
        height: 400,
        backgroundColor: "rgb(100,100,100)",
        borderRadius: 5,
        padding: 5,
        position: "absolute",
        zIndex: 9999999, // keep the modal on top of any other components on Web
        elevation: 9999999, // keep the modal on top of any other components on Android
        top: position.y,
        left: position.x,
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
        <ViewTypographySubheading
          style={{ paddingLeft: 10 }}
          selectable={false}
        >
          Header (Drag me)
        </ViewTypographySubheading>
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
      <ViewTypographyText
      >
        Content goes here.
      </ViewTypographyText>
        {children}
      </ViewContainerColumn>
    </ViewContainerStatic>
  );
};


// Playground for creating 'snap to grid'
// const ratioX = (position.y/window.height)*100;
// const snapX = Math.floor(ratioX / 20) * 20;
// let num = position.y; // replace with your variable containing the percentage value
// const threshold = 0.1; // set the threshold for 5%
// const multiples = [20, 40, 60, 80]; // set the multiples to round to
// for (const multiple of multiples) {
//   const diff = Math.abs(position.y - multiple);
//   const maxDiff = multiple * threshold;
//   if (diff <= maxDiff) {
//     num = Math.floor(position.y / 20) * 20;
//     break;
//   }
// }
// console.log(num)
