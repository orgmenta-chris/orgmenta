// Placeholder.
// Note that this only records the app/website, not the OS.
// ScreenRecorder may need to be used by Orgmenta 
// ScreenRecorder may need to be used by Clients in order to show something to their colleagues (record a custom workflow), to orgmenta support (log bugs) or to their customers (show how to do something in the customer portal)
// todo: https://github.com/yutasuzuki/react-native-record-screen
// Record or screenshot the screen.
// We could also add https://docs.expo.dev/versions/latest/sdk/screen-capture/ in order to prevent certain pages from being captured
// e.g. to help with security certification (iso:27001 etc.) we might want to prevent recording on any page with a password, unless the password is hidden.

import { useReactState } from './react';
import { ViewContainerStatic } from './container';
import { ViewTypographyText } from './typography';
import { ViewButtonPressable } from './button';
import { UtilityPlatformMain } from './platform';
import RecordScreen from 'react-native-record-screen';

let mediaRecorder: MediaRecorder | null = null;
let recordedChunks: BlobPart[] = [];

// Web-specific recording
export const startWebRecording = async () => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: { cursor: 'always' },
    audio: false,
  });
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };
  mediaRecorder.start();
};

export const stopWebRecording = () => {
  if (mediaRecorder) {
    mediaRecorder.stop();
    const blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });
    recordedChunks = [];
    const url = URL.createObjectURL(blob);
    // Do something with the URL
  }
};

// Start recording
export const startRecording = async () => {
  if (UtilityPlatformMain.OS === 'web') {
    await startWebRecording();
  } else {
    try {
      const result = await RecordScreen.startRecording();
    } catch (error) {
      console.error('RecordScreen.startRecording failed:', error);
    }
  }
};

// Stop recording
export const stopRecording = async () => {
  if (UtilityPlatformMain.OS === 'web') {
    stopWebRecording();
  } else {
    try {
      await RecordScreen.stopRecording();
    } catch (error) {
      console.error("RecordScreen.stopRecording failed:", error);
    }
  };  
};

export const ViewScreenRecorder = () => {
  const [status, setStatus] = useReactState<{ isRecording?: boolean }>({});
  return (
    <ViewContainerStatic style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ViewButtonPressable
        onPress={async () => {
          if (status.isRecording) {
            await stopRecording();
            setStatus({ isRecording: false });
          } else {
            await startRecording();
            setStatus({ isRecording: true });
          }
        }}
      >
        <ViewTypographyText>{status.isRecording ? 'Stop' : 'Start'}</ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};
