//https://www.npmjs.com/package/react-native-signature-canvas
// https://github.com/YanYuanFE/react-native-signature-canvas/issues/203 (update issue to resolve)

import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import { ViewContainerStatic } from "./container";
import { ViewInputText } from "./input";
import {
  SigningField,
  SigningDisplay,
  SigningPathType,
} from "react-native-signing-field";
import { ViewTypographyText } from "./typography";
import { instanceSupabaseClient } from "./supabase";
import { json } from "react-router-dom";
import { ViewButtonPressable } from "./button";

// export const ViewSignatureCanvas = ({ text, onOK }: any) => {
//   const ref = useReactRef();

//   // Called after ref.current.readSignature() reads a non-empty base64 string
//   const handleOK = (signature: any) => {
//     console.log(signature);
//     // onOK(signature); // Callback from Component props
//   };

//   // Called after ref.current.readSignature() reads an empty string
//   const handleEmpty = () => {
//     console.log("Empty");
//   };

//   // Called after ref.current.clearSignature()
//   const handleClear = () => {
//     console.log("clear success!");
//   };

//   // Called after end of stroke
//   const handleEnd = () => {
//     (ref as any).current.readSignature();
//   };

//   // Called after ref.current.getData()
//   const handleData = (data:any) => {
//     console.log(data);
//   };

//   return (
//     <SignatureScreen
//       // ref={ref}
//       onEnd={handleEnd}
//       onOK={handleOK}
//       onEmpty={handleEmpty}
//       onClear={handleClear}
//       onGetData={handleData}
//       autoClear={true}
//       descriptionText={text  || ''}
//     />
//   );
// };

interface ViewSignatureCanvasProps {
  onSignatureComplete: (signature: string) => void;
}

export const ViewSignatureCanvas = ({ text, onOK }: any) => {
  // const ref = useRef();

  // // Called after ref.current.readSignature() reads a non-empty base64 string
  // const handleOK = (signature: any) => {
  //   console.log(signature);
  //   onOK(signature); // Callback from Component props
  // };

  // // Called after ref.current.readSignature() reads an empty string
  // const handleEmpty = () => {
  //   console.log("Empty");
  // };

  // // Called after ref.current.clearSignature()
  // const handleClear = () => {
  //   console.log("clear success!");
  // };

  // // Called after end of stroke
  // const handleEnd = () => {
  //   const obj = ref.current;

  //   obj.readSignature();
  // };

  // // Called after ref.current.getData()
  // const handleData = (data: any) => {
  //   console.log(data);
  // };

  // return (
  //   <ViewContainerStatic>
  //     <SignatureScreen
  //       ref={ref}
  //       onEnd={handleEnd}
  //       onOK={handleOK}
  //       onEmpty={handleEmpty}
  //       onClear={handleClear}
  //       onGetData={handleData}
  //       autoClear={true}
  //       descriptionText={text}
  //     />
  //   </ViewContainerStatic>
  // );

  const [signing, setSigning] = React.useState<SigningPathType>([]);

  const saveSignature = async () => {
    const signature = JSON.stringify({signing})

    const { data, error } = await instanceSupabaseClient
      .from("entities_orgmenta")
      .insert([{ title: "User Signature", description: signature }])
      .select();

    if (data) console.log(data);

    if (error) throw error
  };

  useEffect(() => {
    console.log(signing);
  }, [signing]);

  return (
    <ViewContainerStatic style={styles.container}>
      <ViewTypographyText> Signing Field </ViewTypographyText>
      <SigningField
        style={styles.signingField}
        setSigning={setSigning}
        // resetFieldButton={<Text>RESET</Text>} -- allows user to define the reset button
      />
      <ViewTypographyText> Signing Being Displayed </ViewTypographyText>
      <SigningDisplay
        signing={signing}
        style={styles.signingDisplay}
        strokeWidth={1}
      />
      <ViewButtonPressable
        style={{
          flex: 1,
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "black",
          backgroundColor: "lightblue",
        }}
        onPress={saveSignature}
      >
        <ViewTypographyText
          selectable={false}
          style={{ fontWeight: "bold", textAlign: "center", paddingBottom: 10 }}
        >
          Save to DB
        </ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  signingField: {
    // Your specific styles for SigningField
  },
  signingDisplay: {
    // Your specific styles for SigningDisplay
  },
});
