import { useEffect, useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import { Audio } from "expo-av";

// Player

export const ViewSoundPlayer = () => {
  const [audioFile, setAudioFile] = useState<any | null>(null);
  const { playSound, stopSound, clearSound, isPlaying } = useSoundPlayer(audioFile);

  useEffect(() => {
    setAudioFile(require("../assets/Hello.mp3"));
    return () => {
      clearSound();
    };
  }, []);

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
      <Button disabled={isPlaying || !audioFile} title="Play Sound" onPress={playSound} />
      <Button disabled={!isPlaying} title="Stop Sound" onPress={stopSound} />
      <Button title="Clear Sound" onPress={() => {
        clearSound();
        setAudioFile(null);
      }} disabled={!audioFile} />

    </View>
  );
};

export const useSoundPlayer = (audioFile: any) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    setIsPlaying(true);
    const { sound } = await Audio.Sound.createAsync(audioFile);
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  };

  const stopSound = () => {
    if (sound) {
      sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
  };

  const clearSound = () => {
    if (sound) {
      sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return { playSound, stopSound, clearSound, isPlaying };
};

// Recorder

export const ViewSoundRecorder = () => {
  const { recording, startRecording, stopRecording, clearRecording, getURI, uri } = useSoundRecording();
  const { playSound, stopSound, isPlaying } = useSoundPlayer({ uri });
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Button
        title={"Start Recording"}
        onPress={startRecording}
        disabled={!!recording}
      />
      <Button
        title={"Stop Recording"}
        onPress={stopRecording}
        disabled={!recording}
      />
      <Button disabled={!uri || isPlaying} title="Play Recording" onPress={playSound} />
      <Button disabled={!uri || !isPlaying} title="Stop Playback" onPress={stopSound} />
      <Button disabled={!uri} title="Clear Recording" onPress={clearRecording} />
    </View>
  );
};

export const useSoundRecording = () => {
  const [recording, setRecording] = useState<Audio.Recording | MediaRecorder | null>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startRecording = async () => {
    setIsPlaying(true); // Set to true when recording starts
    try {
      if (Platform.OS === 'web') {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(mediaStream);
        const chunks: any[] = [];
        mediaRecorder.ondataavailable = (event) => {
          chunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: 'audio/wav' });
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
      if (Platform.OS === 'web') {
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

  return { recording, startRecording, stopRecording, clearRecording, isPlaying, uri };
};



// export const useSoundRecording = () => {
//   const [recording, setRecording] = useState<Audio.Recording | MediaRecorder | null>(null);
//   const [uri, setUri] = useState<string | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const startRecording = async () => {
//     try {

//       if (Platform.OS === 'web') {
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
//       if (Platform.OS === 'web') {
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