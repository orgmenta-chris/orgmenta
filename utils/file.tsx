// using expo-document-picker: https://docs.expo.dev/versions/latest/sdk/document-picker/

import { doCsvParse, TypeCsvParse } from "./csv";
import { useStorageUpload } from "./storage";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { useQueryerClient, useQueryerMutation } from "./queryer"; // Todo CG: maybe store in here instead of state? Would prevent issues if the user exited then reentered the app / would persist the data between sessions.
import { useEffect, useState } from "react";
import { Pressable, Button } from "react-native";
import * as DocPicker from "expo-document-picker";

// Picker (pick a file from local)
// At the moment, picking and uploading is across two buttons. However, we want to eventually have the option to do both in one go.
// (so this component should have a prop that can be set to do both at once.)

export const ViewFilePicker = (props: any) => {
  const { setPickedDocument, type, multiple } = props;
  const pickDocument = async () => {
    try {
      const result = await DocPicker.getDocumentAsync({
        ...type,
        multiple,
      });
      if (!result.canceled) {
        setPickedDocument(result.assets);
      } else {
        setPickedDocument([]);
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };
  return (
    <ViewContainerStatic>
      <Button title="Pick a Document" onPress={pickDocument} />
    </ViewContainerStatic>
  );
};

// Upload

export const ViewFileUpload = ({}: any) => {
  const request = requestFileUpload();
  return (
    <ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewFilePicker
          setPickedDocument={request.setPickedDocument}
          type={request.fileTypes}
          multiple={request.multiple}
        />
        {request.pickedDocument && (
          <ViewContainerStatic>
            {request.pickedDocument.map((document: any, index: number) => {
              return (
                <ViewContainerStatic key={index} style={{ maxHeight: 30 }}>
                  <ViewTypographyText>Name: {document.name}</ViewTypographyText>
                  <ViewTypographyText>
                    Type: {document.mimeType}
                  </ViewTypographyText>
                </ViewContainerStatic>
              );
            })}
          </ViewContainerStatic>
        )}
        <Pressable
          style={{
            padding: 5,
            borderWidth: 1,
            backgroundColor:
              request.pickedDocument.length === 0 ? "gray" : "lightblue",
          }}
          disabled={request.pickedDocument.length === 0}
          onPress={() => request.upload.mutate()}
        >
          <ViewTypographyText>Upload</ViewTypographyText>
        </Pressable>
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};

export const requestFileUpload = () => {
  const [pickedDocument, setPickedDocument] = useState([]);
  const upload = useStorageUpload({
    name: "exampledocument",
    file: pickedDocument[0],
  });
  const fileTypes = {
    type: [
      "application/pdf", // PDF documents
      "text/csv", // image files
    ],
  };
  const multiple = false;
  const config: TypeCsvParse = {
    header: true,
    skipEmptyLines: true,
    complete: (result: any) => {
      const myArray = {
        // @ts-ignore
        name: pickedDocument[0]?.name,
        data: result.data,
      };
    },
    error: (error: any) => {
      throw new Error(error);
    },
  };
  // Currently assumes we are uploading a csv (so need to change this if it is a diff. file type?)
  useEffect(() => {
    doCsvParse(pickedDocument, config);
  }, [pickedDocument]);
  return {
    pickedDocument,
    setPickedDocument,
    fileTypes,
    multiple,
    upload,
  };
};

// Example / Testing

// A document picker and uploader to supabase storage (proof of concept)
export const ViewFileExample = ({}: any) => {
  const [pickedDocument, setPickedDocument] = useState([]);
  const upload = useStorageUpload({
    name: "exampledocument",
    file: pickedDocument[0],
  });
  const fileTypes = {
    type: [
      "application/pdf", // PDF documents
      "text/csv", // image files
    ],
  };
  const multiple = false;
  const config: TypeCsvParse = {
    header: true,
    skipEmptyLines: true,
    complete: (result: any) => {
      const myArray = {
        // @ts-ignore
        name: pickedDocument[0]?.name,
        data: result.data,
      };
    },
    error: (error: any) => {
      throw new Error(error);
    },
  };
  useEffect(() => {
    doCsvParse(pickedDocument, config);
  }, [pickedDocument]);
  return (
    <ViewContainerStatic
      style={{
        position: "absolute",
        padding: 10,
        backgroundColor: "blue",
        right: 0,
        bottom: 0,
      }}
    >
      <ViewTypographyText>Testing Area</ViewTypographyText>
      <ViewFilePicker
        setPickedDocument={setPickedDocument}
        type={fileTypes}
        multiple={multiple}
      />
      {pickedDocument && (
        <ViewContainerStatic>
          {pickedDocument.map((document: any, index: number) => {
            return (
              <ViewContainerStatic key={index}>
                <ViewTypographyText>Selected Document:</ViewTypographyText>
                <ViewTypographyText>Name: {document.name}</ViewTypographyText>
                <ViewTypographyText>
                  Type: {document.mimeType}
                </ViewTypographyText>
              </ViewContainerStatic>
            );
          })}
        </ViewContainerStatic>
      )}
      <ViewContainerStatic style={{ marginTop: 10 }}>
        <Button
          title="Upload Document"
          disabled={pickedDocument.length === 0}
          onPress={() => upload.mutate()}
        />
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};
