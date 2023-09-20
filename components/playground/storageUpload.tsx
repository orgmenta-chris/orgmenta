import { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { url } from "../../api/authConfig";
import { callMsGraphGET } from "../../api/graphApiCall";
import useTokenStore from "../../states/api/storeToken";
import { ParseCSV, fileUpload } from "../../utils/storage";
import DocumentPicker from "../picker/DocumentPicker";
import Papa from "papaparse";
import { decode } from "base64-arraybuffer-es6";

const testCSVData = `Name,Age,Location
John,30,New York
Alice,25,Los Angeles
Bob,35,San Francisco`;

// A document picker and uploader to supabase storage (proof of concept)
export const ViewStorageUpload = ({}: any) => {
  const [pickedDocument, setPickedDocument] = useState([]);
  const [parsedCSV, setParsedCSV] = useState([]);

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

  const parseCSV = async (data: any[], config: ParseCSV) => {
    data.map(async (document: any) => {
      try {
        console.log(document);

        const base64Data = document.uri.replace("data:text/csv;base64,", "");

        // Decode base64 to a text CSV string
        const csvText = atob(base64Data);

        Papa.parse(csvText, config);
      } catch (error) {
        throw new Error(error);
      }
    });
  };

  useEffect(() => {
    const config: ParseCSV = {
      header: true,
      skipEmptyLines: true,
      complete: (result: any) => {
        console.log(result);

        const myArray = {
          name: pickedDocument[0]?.name,
          data: result.data,
        };

        const newData = [...parsedCSV, myArray];

        setParsedCSV(newData);

        if (parsedCSV) {
          console.log(JSON.stringify(parsedCSV));
        }
      },
      error: (error: any) => {
        throw new Error(error);
      },
    };

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
