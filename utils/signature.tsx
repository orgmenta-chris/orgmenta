//https://www.npmjs.com/package/react-native-signature-canvas
// https://github.com/YanYuanFE/react-native-signature-canvas/issues/203 (update issue to resolve)

import React, { useRef, useState } from "react";
import SignatureScreen from "react-native-signature-canvas";
import { ViewContainerStatic } from "./container";
import { ViewInputText } from "./input";

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

export const ViewSignatureCanvas = ({
  // onSignatureComplete,
  // text,
  // onOK,
}: any) => {
  const ref = useRef(null);

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature: any) => {
    console.log(signature);
    // onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
    // @ts-ignore
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data: any) => {
    console.log(data);
  };

  const [text, setText] = useState("")

  return (
    <ViewContainerStatic>
      <ViewInputText
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setText}
        value={text}
        placeholder="Signature"
      />
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        onGetData={handleData}
        autoClear={true}
        descriptionText={text}
      />
    </ViewContainerStatic>
  );
};
