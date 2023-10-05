import { ViewPageMain } from "../utils/page";
import { ViewTypographyTextheading } from "../utils/typography";
import { ViewInputRichmain } from "../utils/input";
import { Text, ScrollView } from "react-native";
import { useAuxiliaryArray } from "../utils/auxiliary";

import { ViewCryptoExample } from "../utils/crypto";
import VaultFunctions from "../components/playground/vaultFunctions";
import { ViewSvgArrowmain, ViewSvgArrowhead } from "../utils/svg";
import { ViewBarcodeReader, ViewCameraMain } from "../utils/camera";
import { ViewClipboardCopy } from "../utils/clipboard";
import { TypeNotificationBody, UseNotification } from "../utils/notification";
import {
  ViewSoundPlayer,
  ViewSoundRecorder,
  UseVideoPlayer,
} from "../utils/av";
import { ViewScreenRecorder } from "../utils/recorder";
import { ViewHelpMain } from "../utils/help";

export const ViewTestPage = () => {
  const aux = useAuxiliaryArray({ filter_array: [] });
  return __DEV__ ? (
    <ViewPageMain>
      <ScrollView>
        <ViewHelpMain to={"testing123"} />
        <ViewTypographyTextheading>Testing</ViewTypographyTextheading>
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

        {/* Play sound (working) */}
        {/* <ViewSoundPlayer /> */}

        {/* Record sound (working) */}
        {/* <ViewSoundRecorder /> */}

        {/* Play video (working) */}
        {/* <UseVideoPlayer /> */}

        {/* Screen Recorder CG (NOT working yet)*/}
        {/* <ViewScreenRecorder/> */}

        {/* Crypto CG (NOT working yet)*/}
        {/* <ViewCryptoExample/> */}
      </ScrollView>
    </ViewPageMain>
  ) : (
    <ViewTypographyTextheading>Access Denied</ViewTypographyTextheading>
  );
};
