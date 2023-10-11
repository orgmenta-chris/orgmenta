// Create, view, download or otherwise use pfs.
// Current issue: when printing on web, webpage headers and footers (date, page number, page title) are printed.
// A potential workaround for this is to use pdf-lib (example implementation below.)

import { UtilityPlatformMain } from "./platform";
import { ViewTypographyText } from "./typography";
import {
  ViewContainerStatic,
  ViewContainerRow,
  ViewContainerColumn,
} from "./container";
import { ViewButtonPressable } from "./button";
import { asyncShareOpen } from "./share";
import { asyncPrintFile } from "./print";
import { useWindowDimensions } from "./window";
import RenderHtml from "react-native-render-html";
import { Modal } from "react-native";
import { PDFDocument, rgb, Color } from "pdf-lib"; // possible future 'invoice generation' alternative depending on limitations of current solution.

export const examplePdfHtml = {
  html: `
      <html>
        <head>
          <style>
            @page {
              margin: 1000;
            }
          </style>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body style="text-align: center;">
          <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
            Hello Expo!
          </h1>
          <img
            src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
            style="width: 90vw;" />
        </body>
      </html>
    `,
};

export const asyncPdfOpenwindow = async (source: any, title: any = "test") => {
  const newWindow: any = window.open("", "_blank"); // may replace this in the future with an actual orgmenta url (that doesn't have any header/components other than the pdf contents)
  newWindow.document.open();
  newWindow.document.write(source.html);
  newWindow.document.close();
  newWindow.onload = () => {
    const style = newWindow.document.createElement("style"); // Create a style element for custom print styles
    style.type = "text/css";
    style.media = "print";
    style.textContent = `
      @page { size: auto; margin: 0mm; } /* Remove headers from printing */
      @page :footer { display: none; } /* Remove footers from printing */
    `;
    newWindow.document.head.appendChild(style); // Append the style element to the new window's document
  };
};

export const asyncPdfPrint = async (source: any) => {
  // Mobile (working)
  if (UtilityPlatformMain.OS !== "web") {
    const { uri } = await asyncPrintFile(source);
    await asyncShareOpen(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  } else {
    const newWindow: any = window.open("", "_blank");
    newWindow.document.open();
    newWindow.document.write(source.html);
    newWindow.document.close();
    newWindow.onload = () => {
      const style = newWindow.document.createElement("style"); // Create a style element for custom print styles
      style.type = "text/css";
      style.media = "print";
      style.textContent = `
        @page { size: auto; margin: 0mm; } /* Remove headers from printing */
        @page :footer { display: none; } /* Remove footers from printing */
      `;
      newWindow.document.head.appendChild(style); // Append the style element to the new window's document
      newWindow.print(); // Trigger the print dialog
    };
  }
};

export const ViewFileModal = ({ statePdfModal, setPdfModal }: any) => {
  const source = examplePdfHtml;
  const { width } = useWindowDimensions();
  return (
    <ViewContainerColumn>
      <Modal
        animationType="slide" // You can use 'slide', 'fade', or 'none'
        transparent={true} // Make the modal background transparent
        visible={statePdfModal}
        onRequestClose={setPdfModal} // Android back button behavior
      >
        <ViewContainerStatic
          key={"pdf-container"}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ViewContainerStatic
            key={"pdf-body"}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <ViewContainerStatic
              style={{
                backgroundColor: "white",
                padding: 10,
                marginBottom: 10,
              }}
            >
              <RenderHtml contentWidth={width} source={source} />
            </ViewContainerStatic>
            <ViewContainerRow key={"pdf-buttons"}>
              <ViewButtonPressable
                style={{
                  backgroundColor: "#127ab9",
                  margin: 10,
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={() => asyncPdfPrint(source)}
              >
                <ViewTypographyText style={{ color: "white" }}>
                  {UtilityPlatformMain.OS === "web"
                    ? "Save Document"
                    : "Share Document"}
                </ViewTypographyText>
              </ViewButtonPressable>
              {UtilityPlatformMain.OS === "web" && (
                <ViewButtonPressable
                  style={{
                    backgroundColor: "#127ab9",
                    margin: 10,
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={() => asyncPdfOpenwindow(source)}
                >
                  <ViewTypographyText style={{ color: "white" }}>
                    Open In New Window
                  </ViewTypographyText>
                </ViewButtonPressable>
              )}
              <ViewButtonPressable
                style={{
                  backgroundColor: "#127ab9",
                  margin: 10,
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={setPdfModal}
              >
                <ViewTypographyText style={{ color: "white" }}>
                  Close
                </ViewTypographyText>
              </ViewButtonPressable>
            </ViewContainerRow>
          </ViewContainerStatic>
        </ViewContainerStatic>
      </Modal>
    </ViewContainerColumn>
  );
};
