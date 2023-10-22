import { useReactEffect, useReactState } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { UtilityPlatformMain } from "./platform";
import { Audio } from "expo-av";

// Player

export const ViewAudioPlayer = () => {
  const [audioFile, setAudioFile] = useReactState<any | null>(null);
  const { playSound, stopSound, clearSound, isPlaying } =
    useAudioPlayer(audioFile);

  useReactEffect(() => {
    setAudioFile(require("../assets/Hello.mp3"));
    return () => {
      clearSound();
    };
  }, []);

  return (
    <ViewContainerStatic
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        marginVertical: 10,
      }}
    >
      <ViewButtonPressable
        disabled={isPlaying || !audioFile}
        onPress={playSound}
      >
        <ViewTypographyText>Play Sound</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable disabled={!isPlaying} onPress={stopSound}>
        <ViewTypographyText>Stop Sound</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable
        onPress={() => {
          clearSound();
          setAudioFile(null);
        }}
        disabled={!audioFile}
      >
        <ViewTypographyText>Clear Sound</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

export const useAudioPlayer = (audioFile: any) => {
  const [audioState, audioSet] = useReactState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useReactState(false);

  const playSound = async () => {
    setIsPlaying(true);
    const { sound } = await Audio.Sound.createAsync(audioFile);
    audioSet(sound);
    await sound.playAsync();
    setIsPlaying(true);
  };

  const stopSound = () => {
    if (audioState) {
      audioState.unloadAsync();
      audioSet(null);
      setIsPlaying(false);
    }
  };

  const clearSound = () => {
    if (audioState) {
      audioState.unloadAsync();
      audioSet(null);
      setIsPlaying(false);
    }
  };

  useReactEffect(() => {
    return () => {
      if (audioState) {
        audioState.unloadAsync();
      }
    };
  }, [audioState]);

  return { playSound, stopSound, clearSound, isPlaying };
};

// Recorder

export const ViewAudioRecorder = () => {
  const {
    recording,
    startRecording,
    stopRecording,
    clearRecording,
    // getURI,
    uri,
  } = useAudioRecording();
  const { playSound, stopSound, isPlaying } = useAudioPlayer({ uri });
  return (
    <ViewContainerStatic style={{ flex: 1, flexDirection: "row" }}>
      <ViewButtonPressable onPress={startRecording} disabled={!!recording}>
        <ViewTypographyText>Start Recording</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable onPress={stopRecording} disabled={!recording}>
        <ViewTypographyText>Stop Recording</ViewTypographyText>
      </ViewButtonPressable>
      {/* <ViewTypographyText>{JSON.stringify(getURI)}</ViewTypographyText> */}
      <ViewButtonPressable disabled={!uri || isPlaying} onPress={playSound}>
        <ViewTypographyText>Play Recording</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable disabled={!uri || !isPlaying} onPress={stopSound}>
        <ViewTypographyText>Stop Playback</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable disabled={!uri} onPress={clearRecording}>
        <ViewTypographyText>Clear Recording</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

export const useAudioRecording = () => {
  const [recording, setRecording] = useReactState<
    Audio.Recording | MediaRecorder | null
  >(null);
  const [uri, setUri] = useReactState<string | null>(null);
  const [isPlaying, setIsPlaying] = useReactState(false);

  const startRecording = async () => {
    setIsPlaying(true); // Set to true when recording starts
    try {
      if (UtilityPlatformMain.OS === "web") {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(mediaStream);
        const chunks: any[] = [];
        mediaRecorder.ondataavailable = (event) => {
          chunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setUri(audioUrl);
        };

        mediaRecorder.start();
        setRecording(mediaRecorder);
      } else {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    setIsPlaying(false); // Set to false when recording stops
    try {
      if (UtilityPlatformMain.OS === "web") {
        if (recording instanceof MediaRecorder) {
          recording.stop();
        }
      } else {
        await (recording as any).stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
        });
        const audioUri = (recording as any).getURI();
        setUri(audioUri);
      }
      setRecording(null);
    } catch (err) {
      console.error("Failed to stop recording", err);
    }
  };

  const clearRecording = () => {
    setIsPlaying(false); // Set to false when recording is cleared
    setRecording(null);
    setUri(null);
  };

  return {
    recording,
    startRecording,
    stopRecording,
    clearRecording,
    isPlaying,
    uri,
  };
};

// export const useSoundRecording = () => {
//   const [recording, setRecording] = useReactState<Audio.Recording | MediaRecorder | null>(null);
//   const [uri, setUri] = useReactState<string | null>(null);
//   const [isPlaying, setIsPlaying] = useReactState(false);

//   const startRecording = async () => {
//     try {

//       if (UtilityPlatformMain.OS === 'web') {
//         const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         const mediaRecorder = new MediaRecorder(mediaStream);
//         const chunks: any[] = [];
//         mediaRecorder.ondataavailable = (event) => {
//           chunks.push(event.data);
//         };

//         mediaRecorder.onstop = () => {
//           const audioBlob = new Blob(chunks, { type: 'audio/wav' });
//           const audioUrl = URL.createObjectURL(audioBlob);
//           setUri(audioUrl);
//         };

//         mediaRecorder.start();
//         setRecording(mediaRecorder);
//       } else {
//         await Audio.requestPermissionsAsync();
//         await Audio.setAudioModeAsync({
//           allowsRecordingIOS: true,
//           playsInSilentModeIOS: true,
//         });
//         const { recording } = await Audio.Recording.createAsync(
//           Audio.RecordingOptionsPresets.HIGH_QUALITY
//         );
//         setRecording(recording);
//       }
//       setIsPlaying(false);
//     } catch (err) {
//       console.error("Failed to start recording", err);
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       if (UtilityPlatformMain.OS === 'web') {
//         if (recording instanceof MediaRecorder) {
//           recording.stop();
//         }
//       } else {
//         await (recording as any).stopAndUnloadAsync();
//         await Audio.setAudioModeAsync({
//           allowsRecordingIOS: false,
//         });
//         const audioUri = (recording as any).getURI();
//         setUri(audioUri);
//       }
//       setRecording(null);
//     } catch (err) {
//       console.error("Failed to stop recording", err);
//     }
//   };

//   const clearRecording = () => {
//     setRecording(null);
//     setUri(null);
//     setIsPlaying(false);
//   };

//   return { recording, startRecording, stopRecording, clearRecording, isPlaying, uri };
// };
