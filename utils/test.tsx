import { ViewPageMain } from "./page";
import { ViewTypographyHeading } from "./typography";
import { ViewInputRichmain } from "./input";
import { useAuxiliaryArray } from "./auxiliary";
import { ViewCryptoExample } from "./crypto";
import { ViewVaultExample } from "./vault";
import { ViewSvgArrowmain, ViewSvgArrowhead } from "./svg";
import { ViewBarcodeReader, ViewCameraMain } from "./camera";
import { ViewClipboardCopy } from "./clipboard";
import { TypeNotificationBody, UseNotification } from "./notification";
import { ViewSoundPlayer, ViewSoundRecorder } from "./audio";
import { ViewVideoPlayer } from "./video";
import { ViewScreenRecorder } from "./recorder";
import { ViewHelpContainer } from "./help";

import { Text, ScrollView } from "react-native";

export const ViewTestPage = () => {
  const aux = useAuxiliaryArray({ filter_array: [] });
  return __DEV__ ? (
    <ViewPageMain>
      <ScrollView>
        <ViewHelpContainer to={"testing123"} />
        <ViewTypographyHeading>Testing</ViewTypographyHeading>
        <Text>ViewTestPage Placeholder</Text>
        <Text>{JSON.stringify(aux, null, 2)}</Text>
        <ViewInputRichmain />

        {/* Barcode Scanner (working) */}
        {/* <ViewBarcodeReader /> */}

        {/* Camera (working) */}
        {/* <ViewCameraMain /> */}

        {/* Clipboard copy (working) */}
        {/* <ViewClipboardCopy /> */}

        {/* Notification component (working) */}
        {/* <UseNotification 
          // {...notificationBody} 
        /> */}

        <Text>Example Sound Player:</Text>
        <ViewSoundPlayer />

        <Text>Example Sound Recorder:</Text>
        <ViewSoundRecorder />

        {/* Play video (working) */}
        <ViewVideoPlayer />

        {/* Screen Recorder CG (NOT working yet)*/}
        {/* <ViewScreenRecorder/> */}

        {/* Crypto CG (NOT working yet)*/}
        {/* <ViewCryptoExample/> */}
      </ScrollView>
    </ViewPageMain>
  ) : (
    <ViewTypographyHeading>Access Denied</ViewTypographyHeading>
  );
};
