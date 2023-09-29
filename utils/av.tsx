import React, { useEffect, useState, useRef } from "react";
import { View, Button } from "react-native";
import { Audio, Video, ResizeMode } from "expo-av";

export const UseSoundPlayer = ({}: any) => {
  const [sound, setSound] = useState(null);

  const playSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Hello.mp3")
    );
    // @ts-ignore
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  };

  const stopSound = () => {
    console.log("Stopping Sound");
    setSound(null);
    console.log("Sound Stopped");
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          // @ts-ignore
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        marginVertical: 10,
      }}
    >
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
};

export const UseSoundRecorder = ({}: any) => {
  const [recording, setRecording] = useState();

  const startRecording = async () => {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      // @ts-ignore
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    // @ts-ignore
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    // @ts-ignore
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    alert("Recording stopped and stored at \n\n" + uri);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
};

export const UseVideoPlayer = ({}: any) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Video
        ref={video}
        style={{ width: 300, height: 200 }}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
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
          // @ts-ignore
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            // @ts-ignore
            status.isPlaying
              ? // @ts-ignore
                video.current.pauseAsync()
              : // @ts-ignore
                video.current.playAsync()
          }
        />
      </View>
    </View>
  );
};
