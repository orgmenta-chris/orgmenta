import { ViewPageMain } from "./page";
import { ViewTypographyHeading, ViewTypographyText } from "./typography";
// import { ViewInputRichmain } from "./input";
import { useAuxiliaryArray } from "./auxiliary";
// import { ViewCryptoExample } from "./crypto";
// import { ViewVaultExample } from "./vault";
// import { ViewSvgArrowmain, ViewSvgArrowhead } from "./svg";
// import { ViewBarcodeReader, ViewCameraMain } from "./camera";
// import { ViewClipboardCopy } from "./clipboard";
// import { ViewAudioPlayer, ViewAudioRecorder } from "./audio";
// import { ViewVideoPlayer } from "./video";
// import { ViewScreenRecorder } from "./recorder";
// import { ViewContextContainer } from "./context";
// import { deleteQueryerQuery, useQueryerClient } from "./queryer";
import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerScroll,
} from "./container";
// import { ViewShieldButton, ViewShieldUniversal } from "./shield";
import { TypeNotificationBody, ViewNotificationExample } from "./notification"; // C to check naming conventions. Also need to check how to use this?
// import { ViewAttributeCreate } from "./attribute";
// import { ViewFrameworkPage } from "./module";
// import { doObjectNesting } from "./object";
// import { arrayFrameworkBusiness } from "./framework";
// import { useBrowseArray } from "./browse";
// import { ViewKanbanContainer } from "./kanban";
// import { ViewThreadComponent } from "./thread";
// import { Example } from "./richtext";
import { ViewZustandExample } from "./zustand";
// import { ViewSignatureCanvas } from "./signature";
import { ViewDraggableBox } from "./draggable";
import { MSGraph } from "../api/graphFunctions";
import useTokenStore from "../states/api/storeToken";
import { ViewVaultExample } from "./vault";
import {ViewSignatureCanvas} from "./signature";
import { ViewRichText } from "./richtext";

export const ViewTestPage = () => {
  const token = useTokenStore((state: any) => state.token);
  const aux = useAuxiliaryArray({ filter_array: [] });
  return __DEV__ ? (
    <ViewPageMain>
      <ViewContainerScroll>
        {/* <ViewFrameworkPage
          data={
            doObjectNesting(
              (arrayFrameworkBusiness as any)?.filter(
                (x: any) => x.id > 9 || x.nickname === "business"
              )
            )?.[0]
          }
        /> */}
        {/* Barcode Scanner (working) */}
        {/* <ViewBarcodeReader /> */}

        {/* Camera (working) */}
        {/* <ViewCameraMain /> */}

        {/* Clipboard copy (working) */}
        {/* <ViewClipboardCopy /> */}

        {/* Notification component (working) */}
        {/* <ViewNotificationExample
          testMode
          // {...notificationBody}
        /> */}
        {/* <ViewAttributeCreate /> */}
        {/* <ViewTypographyText>Example Sound Player:</ViewTypographyText>
        <ViewAudioPlayer /> */}

        {/* <ViewTypographyText>Example Sound Recorder:</ViewTypographyText>
        <ViewAudioRecorder /> */}

        {/* Play video (working) */}
        {/* <ViewVideoPlayer /> */}

        {/* Screen Recorder C (NOT working yet)*/}
        {/* <ViewScreenRecorder/> */}

        {/* Crypto C (NOT working yet)*/}
        {/* <ViewCryptoExample/> */}

        {/* Shield C (Working) */}
        {/* <ViewShieldUniversal/>
        <ViewShieldButton id={'test1'} />
        <ViewShieldButton id={'test2'} /> */}

        {/* Help C (in progress ) */}
        {/* <ViewHelpContainer to={"testing123"} />
        <ViewTypographyHeading>Testing</ViewTypographyHeading> */}

        {/* Richtext C (in progress) */}
        {/* <ViewInputRichmain /> */}

        {/* Chat Loisa (in progress) */}
        {/* {/* <ViewThreadComponent /> */}
        {/* <MSGraph token={token} /> */}
        {/* <ViewVaultExample /> */}
        {/* <ViewSignatureCanvas /> */}
        <ViewRichText />
      </ViewContainerScroll>
    </ViewPageMain>
  ) : (
    <ViewTypographyHeading>Access Denied</ViewTypographyHeading>
  );
};
