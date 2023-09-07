import React from "react";
import * as DocPicker from "expo-document-picker";
import { View, Button } from "react-native";

// MVP document picker, this can be duplicated and modified to create different pickers for different file formats.
// using expo-document-picker: https://docs.expo.dev/versions/latest/sdk/document-picker/

// Component takes the following props: setPickedDocument() - setter function to get the uploaded documents, ref useState()

const DocumentPicker = (props: any) => {
  const { setPickedDocument } = props;

  const pickDocument = async () => {
    try {
      const result = await DocPicker.getDocumentAsync({
        type: [
          "application/pdf", // PDF documents
          "text/plain", // Plain text files
          "application/vnd.ms-excel", // Excel spreadsheets
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Word documents (.docx)
          "application/vnd.openxmlformats-officedocument.presentationml.presentation", // PowerPoint presentations (.pptx)
          "application/zip", // ZIP archives
          "application/octet-stream", // Generic binary files
          "application/vnd.rar", // RAR archives
          "application/x-msdownload", // Executable files
          "application/json", // JSON configuration files
        ],
        multiple: true,
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
    <View>
      <Button title="Pick a Document" onPress={pickDocument} />
    </View>
  );
};

export default DocumentPicker;
