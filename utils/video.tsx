import { useReactState, useReactRef } from "./react";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { ViewContainerStatic, ViewContainerRow } from "./container";
import { Video, ResizeMode } from "expo-av";

// PLAYER

export const ViewVideoPlayer = ({ uri }: any) => {
  const video = useReactRef(null);
  const [status, setStatus] = useReactState({});
  return (
    <ViewContainerStatic style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Video
        ref={video}
        style={{ width: 300, height: 200 }}
        source={{
          uri: uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <ViewContainerRow
        style={{
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <ViewButtonPressable
          onPress={() =>
            (status as any).isPlaying
              ? (video.current as any).pauseAsync()
              : (video.current as any).playAsync()
          }
        ><ViewTypographyText>{(status as any).isPlaying ? "Pause" : "Play"}</ViewTypographyText>
        </ViewButtonPressable>

      </ViewContainerRow>
    </ViewContainerStatic>
  );
};

// EXAMPLE

// Test Video Player ViewContainerStatic
export const ViewVideoExamole = () => {
  return (
    <ViewVideoPlayer
      uri={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
    />
  );
};
