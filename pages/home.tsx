// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.

import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import DocumentPicker from "../components/picker/DocumentPicker";
import { bucketItems, ensureBucketExists, fileUpload } from "../utils/storage";

export default function Home() {
  const [pickedDocument, setPickedDocument] = useState([]);

  const my_bucket = bucketItems();

  const upload = () =>
    pickedDocument.map((document: any) => {
      fileUpload({ name: document.name, file: document.uri });
    });

  // useEffect(() => {
  //   const bucketName = "default";

  //   ensureBucketExists(bucketName)
  //     .then((bucket) => {
  //       console.log(`Bucket "${bucket.name}" exists or has been created.`);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.message);
  //     });
  // })

  return (
    <View style={{ flexDirection: "column" }}>
      <Text>Orgmenta</Text>
      <Text>(if logged in) Set home page: [options]</Text>
      <Text>Sales Pitch goes here</Text>
      <Text>Product Information goes here</Text>

      <DocumentPicker setPickedDocument={setPickedDocument} />

      {pickedDocument && (
        <View>
          {pickedDocument.map((document: any, index: number) => {
            return (
              <View key={index}>
                <Text>Selected Document:</Text>
                <Text>Name: {document.name}</Text>
                <Text>Type: {document.mimeType}</Text>
              </View>
            );
          })}
        </View>
      )}

      <View style={{ marginTop: 10 }}>
        <Button title="Upload Document" onPress={upload} />
      </View>

      {my_bucket.isSuccess && <Text>I see the bucket</Text>}
    </View>
  );
}
