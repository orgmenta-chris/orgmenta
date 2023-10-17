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
import { ViewContextContainer } from "./context";
import { deleteQueryerQuery, useQueryerClient } from "./queryer";
import { ViewContainerRow, ViewContainerScroll } from "./container";
import { ViewShieldButton, ViewShieldUniversal } from "./shield";
import { TypeNotificationBody, ViewNotificationExample } from "./notification"; // C to check naming conventions. Also need to check how to use this?
import { ViewAttributeCreate } from "./attribute";
import { ViewFrameworkPage } from "./module";
import { doObjectNesting } from "./object";
import { data } from "./framework";
import { useBrowseArray } from "./browse";
import {
  ViewPackageItem,
  UtilityPackageList,
  filterPackageList,
} from "./package";
import { ViewKanbanContainer } from "./kanban";

export const ViewTestPage = () => {
  // // const aux = useAuxiliaryArray({ filter_array: [] });
  // const packageDeclarations = UtilityPackageList["action"];
  // if (!packageDeclarations) {
  //   console.error(`Module ${packageDeclarations} not found`);
  //   return null;
  // }
  // console.log("package", packageDeclarations);
  return __DEV__ ? (
    <ViewPageMain>
      <ViewContainerScroll>
      <ViewKanbanContainer/>
        {/* <ViewPackageItem packageName="action" /> */}
        <ViewFrameworkPage
          data={
            doObjectNesting(
              (data as any)?.filter(
                (x: any) => x.id > 9 || x.nickname === "business"
              )
            )?.[0]
          }
        />
        {/* Barcode Scanner (working) */}
        {/* <ViewBarcodeReader /> */}

        {/* Camera (working) */}
        {/* <ViewCameraMain /> */}

        {/* Clipboard copy (working) */}
        {/* <ViewClipboardCopy /> */}

        {/* Notification component (working) */}
        <ViewNotificationExample
          testMode
          // {...notificationBody}
        />
        <ViewAttributeCreate />
        {/* <ViewTypographyText>Example Sound Player:</ViewTypographyText>
        <ViewSoundPlayer /> */}

        {/* <ViewTypographyText>Example Sound Recorder:</ViewTypographyText>
        <ViewSoundRecorder /> */}

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
      </ViewContainerScroll>
    </ViewPageMain>
  ) : (
    <ViewTypographyHeading>Access Denied</ViewTypographyHeading>
  );
};
