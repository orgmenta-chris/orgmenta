import { ViewPageMain } from "./page";
import { ViewTypographyHeading, ViewTypographyText } from "./typography";
import { ViewInputRichmain } from "./input";
import { useAuxiliaryArray } from "./auxiliary";
import { ViewCryptoExample } from "./crypto";
import { ViewVaultExample } from "./vault";
import { ViewSvgArrowmain, ViewSvgArrowhead } from "./svg";
import { ViewBarcodeReader, ViewCameraMain } from "./camera";
import { ViewClipboardCopy } from "./clipboard";
import { ViewSoundPlayer, ViewSoundRecorder } from "./audio";
import { ViewVideoPlayer } from "./video";
import { ViewScreenRecorder } from "./recorder";
import { ViewHelpContainer } from "./help";
import { ViewContainerScroll } from "./container";
import { ViewShieldContainer, ViewShieldUniversal } from "./shield";
import { TypeNotificationBody, UseNotification } from "./notification"; // Chris to check naming conventions. Also need to check how to use this?

export const ViewTestPage = () => {
  const aux = useAuxiliaryArray({ filter_array: [] });
  return __DEV__ ? (
    <ViewPageMain>
      <ViewContainerScroll>

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

        {/* <ViewTypographyText>Example Sound Player:</ViewTypographyText>
        <ViewSoundPlayer /> */}

        {/* <ViewTypographyText>Example Sound Recorder:</ViewTypographyText>
        <ViewSoundRecorder /> */}

        {/* Play video (working) */}
        {/* <ViewVideoPlayer /> */}

        {/* Screen Recorder Chris (NOT working yet)*/}
        {/* <ViewScreenRecorder/> */}

        {/* Crypto Chris (NOT working yet)*/}
        {/* <ViewCryptoExample/> */}
        
        {/* Shield Chris (Working) */}
        {/* <ViewShieldUniversal/>
        <ViewShieldContainer id={'test1'} />
        <ViewShieldContainer id={'test2'} /> */}

        {/* Help Chris (in progress ) */}
        {/* <ViewHelpContainer to={"testing123"} />
        <ViewTypographyHeading>Testing</ViewTypographyHeading> */}

        {/* Richtext Chris (in progress) */}
        {/* <ViewInputRichmain /> */}


      </ViewContainerScroll>
    </ViewPageMain>
  ) : (
    <ViewTypographyHeading>Access Denied</ViewTypographyHeading>
  );
};
