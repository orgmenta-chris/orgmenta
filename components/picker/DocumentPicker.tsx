// MIGRATED TO FILE.TSX

// import React from "react";
// import * as DocPicker from "expo-document-picker";
// import { View, Button } from "react-native";

// // MVP document picker, this can be duplicated and modified to create different pickers for different file formats.
// // using expo-document-picker: https://docs.expo.dev/versions/latest/sdk/document-picker/

// // Component takes the following props: setPickedDocument() - setter function to get the uploaded documents, ref useState()

// const DocumentPicker = (props: any) => {
//   const { setPickedDocument, type, multiple } = props;

//   const pickDocument = async () => {
//     try {
//       const result = await DocPicker.getDocumentAsync({
//         ...type,
//         multiple,
//       });

//       if (!result.canceled) {
//         setPickedDocument(result.assets);
//       } else {
//         setPickedDocument([]);
//       }
//     } catch (error) {
//       console.error("Error picking document:", error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Pick a Document" onPress={pickDocument} />
//     </View>
//   );
// };

// export default DocumentPicker;
