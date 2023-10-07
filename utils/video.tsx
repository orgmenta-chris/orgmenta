import { useState, useRef } from "react";
import { View, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

// PLAYER

export const ViewVideoPlayer = ({ uri }: any) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Button
          title={(status as any).isPlaying ? "Pause" : "Play"}
          onPress={() =>
            (status as any).isPlaying
              ? (video.current as any).pauseAsync()
              : (video.current as any).playAsync()
          }
        />
      </View>
    </View>
  );
};

// EXAMPLE

// Test Video Player View
export const ViewVideoExamole = () => {
  return (
    <ViewVideoPlayer
      uri={"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
    />
  );
};
