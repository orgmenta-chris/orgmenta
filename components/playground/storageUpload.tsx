import { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { url } from "../../api/authConfig";
import { callMsGraphGET } from "../../api/graphApiCall";
import useTokenStore from "../../states/api/storeToken";
import { ParseCSV, fileUpload, parseCSV } from "../../utils/storage";
import DocumentPicker from "../picker/DocumentPicker";

// A document picker and uploader to supabase storage (proof of concept)
export const ViewStorageUpload = ({}: any) => {
  const [pickedDocument, setPickedDocument] = useState([]);

  const token = useTokenStore((state: any) => state.token);

  const upload = fileUpload({
    name: "exampledocument",
    file: pickedDocument[0],
  });

  const endpoint = `${url}/me`;

  const fileTypes = {
    type: [
      "application/pdf", // PDF documents
      "text/csv", // image files
    ],
  };

  const multiple = false;

  const fetchData = async (token: string) => {
    const data = await callMsGraphGET(token, endpoint);
    // console.log(data);
  };

  const config: ParseCSV = {
    header: true,
    skipEmptyLines: true,
    complete: (result: any) => {
      const myArray = {
        // @ts-ignore
        name: pickedDocument[0]?.name,
        data: result.data,
      };
      
      console.log(myArray);
    },
    error: (error: any) => {
      throw new Error(error);
    },
  };

  useEffect(() => {
    parseCSV(pickedDocument, config);
  }, [pickedDocument]);

  return (
    <View
      style={{
        position: "absolute",
        padding: 10,
        backgroundColor: "yellow",
        right: 0,
        bottom: 0,
      }}
    >
      <Text>Testing area</Text>
      <DocumentPicker
        setPickedDocument={setPickedDocument}
        type={fileTypes}
        multiple={multiple}
      />
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
          disabled={pickedDocument.length === 0}
          onPress={() => upload.mutate()}
        />
      </View>

      <br />

      <View>
        <Button title="Test Fetch Data" onPress={() => fetchData(token)} />
      </View>
    </View>
  );
};

export default ViewStorageUpload;
