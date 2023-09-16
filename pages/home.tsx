// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.

import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import DocumentPicker from "../components/picker/DocumentPicker";
import useTokenStore from "../states/api/storeToken";
import { callMsGraph } from "../api/graphApiCall";

export default function Home() {
  const [pickedDocument, setPickedDocument] = useState([]);

  const token = useTokenStore((state: any) => state.token);

  const upload = (name: any, file: any) => {
    /*
    NOTE: If you are wondering why this function is void, 
    it is because after testing the upload function, 
    I decided to remove it again as I tried implementing the function using a react-query mutation.
    */
    return;
  };

  const fetchData = async (token: string) => {
    const data = await callMsGraph(token);

    console.log(data);
  };

  return (
    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)',borderColor: 'rgba(0, 0, 0, 0.15)', borderWidth: 1, flexDirection: "column", width:"100%", alignItems:'center' }}>
      <Image
        style={{
          width: 500,
          height: 200,
        }}
        source={{
          uri: require('../assets/logo/full/color.png'),
        }}
      />
      <Text>(if logged in) Set home page: [options]</Text>
      <Text>Sales Pitch goes here</Text>
      <Text>Product Information goes here</Text>

      <br />
      <br />

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
        <Button
          title="Upload Document"
          onPress={() =>
            upload(pickedDocument[0]?.name, pickedDocument[0]?.uri)
          }
        />
      </View>

      <br />

      <View>
        <Button title="Test Fetch Data" onPress={() => fetchData(token)} />
      </View>
    </View>
  );
}
