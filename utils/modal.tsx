import { ViewIconMain } from "./icon";
import { getHeaderDimensions } from "./header";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { useQueryerClient, useQueryerQuery } from "./queryer";

// CONTAINER

// The main modal view - use this comprehensive component to get all of the available modal features
export const ViewModalContainer = ({
  height,
  pinnable,
  collapsible,
  children,
  modalName,
  backdrop,
  ...rest
}: TypeModalContainer) => {
  const modalState: any = useModalState(modalName);
  if (modalState?.data?.visible) {
    return (
      <>
        {backdrop && !modalState?.data?.pinned && (
          <ViewModalBackdrop modalName={modalName} />
        )}
        <ViewModalBody
          modalName={modalName}
          height={height}
          pinnable={pinnable}
          collapsible={collapsible}
          {...rest}
        >
          {children}
        </ViewModalBody>
      </>
    );
  } else {
    return <></>;
  }
};

export type TypeModalContainer = {
  height?: number;
  margin?: number;
  padding?: number;
  pinnable?: boolean;
  backdrop?: boolean;
  children: React.ReactNode;
  [key: string]: any;
};

// VISIBILITY

// Whether or not a modal is being shown on screen
export const useModalVisibility = (modalName: string) => {
  const queryClient = useQueryerClient();
  return () => {
    queryClient.setQueryData(["modal", modalName], (oldData: any) => {
      return { ...oldData, visible: !oldData?.visible };
    });
  };
};

// PINNED

// Whether or not a modal is embedded into the page, or floating above it on another surface
export const useModalPinned = (modalName: string) => {
  const queryClient = useQueryerClient();
  return () => {
    queryClient.setQueryData(["modal", modalName], (oldData: any) => {
      return { ...oldData, pinned: !oldData?.pinned };
    });
  };
};

// STATE

// Get the modal state - which has 'pinned', 'visibility' and other properties
export const useModalState = (modalName: string) => {
  // const queryClient = useQueryerClient();
  const query = useQueryerQuery({
    queryKey: ["modal", modalName],
    queryFn: () => null,
    // initialData: () => queryClient.getQueryData(['modal', modalName]) || null,
    // staleTime: Infinity // This means the data will never become stale automatically
    refetchOnWindowFocus: false,
  });
  return query;
};

// CONTROLS

// The modal controls that appear in the modal to pin/unpin, show/hide etc.
export const ViewModalControls = ({
  modalName,
  pinButton,
  collapseButton,
}: any) => {
  return (
    <ViewContainerStatic
      style={{
        margin: 5,
        gap: 5,
        right: 0,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      {pinButton && (
        <ViewButtonPressable onPress={useModalVisibility(modalName)}>
          <ViewIconMain name={"caretup"} source={"AntDesign"} color="black" />
        </ViewButtonPressable>
      )}
      {collapseButton && (
        <ViewButtonPressable onPress={useModalPinned(modalName)}>
          <ViewIconMain
            name={"pin"}
            source={"MaterialCommunityIcons"}
            color="black"
          />
        </ViewButtonPressable>
      )}
    </ViewContainerStatic>
  );
};

// BODY

// The modal content container, i.e. the visible part of the modal
export const ViewModalBody = ({
  height,
  modalName,
  pinnable,
  collapsible,
  children,
  top,
  bottom,
  width,
  snapto,
}: TypeModalContainer) => {
  const headerDimensions = getHeaderDimensions();
  const topBuffer = top || headerDimensions.height;
  return (
    <ViewContainerStatic
      style={{
        alignSelf: "center",
        backgroundColor: "white",
        flexDirection: "column",
        flex: 1,
        height: height,
        minWidth: width || 200,
        width: width || 200,
        top: topBuffer || 0,
        bottom: bottom || 0,
        left: snapto === "left" ? 0 : "auto",
        right: snapto === "right" ? 0 : "auto",
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <ViewContainerStatic style={{ flex: 1 }}>{children}</ViewContainerStatic>
      <ViewModalControls
        modalName={modalName}
        pinButton={pinnable}
        collapseButton={collapsible}
      />
    </ViewContainerStatic>
  );
};

// Backdrop (if the modal isn't pinned and 'backdrop' is enabled, then this overlay behind the modal body will appear and when clicked will close the modal)

export const ViewModalBackdrop = ({ modalName }: any) => {
  return (
    <ViewButtonPressable
      onPress={useModalVisibility(modalName)}
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    />
  );
};

// Examples

// (Example component to show the modal state toggle functionality)
export const ViewModalState = ({ modalName }: any) => {
  const modalState = useModalState(modalName);
  return (
    <>
      <ViewModalToggle />
      <ViewTypographyText>
        {JSON.stringify(modalState?.data, null, 2)}
      </ViewTypographyText>
    </>
  );
};

// (Example button to toggle the modal state value)
export const ViewModalToggle = ({ modalName }: any) => {
  return (
    <ViewButtonPressable onPress={useModalVisibility(modalName)}>
      <ViewTypographyText>Toggle</ViewTypographyText>
    </ViewButtonPressable>
  );
};

// META /INFO

// Temp (Chris experimental)
const metaModalInfo = {
  description:
    "A UI widget to appear floating on a different surface to other components",
  notes:
    "This modal is an alternative to React Native's own modal component, which has limitations to it that this module solves",
  todo: [
    "When pinned, embed the modal (switch off modal mode) into the parent view (i.e. switch off position: absolute)",
    "Positioning and sizing: Allow for the modal to be rendered in specific sizes and locations via props passed through",
  ],
};
