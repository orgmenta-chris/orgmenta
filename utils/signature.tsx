//https://www.npmjs.com/package/react-native-signature-canvas
// https://github.com/YanYuanFE/react-native-signature-canvas/issues/203 (update issue to resolve)

import { useReactRef } from "./react";
import SignatureScreen from "react-native-signature-canvas";

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
import React, { useRef } from 'react';

interface ViewSignatureCanvasProps {
  onSignatureComplete: (signature: string) => void;
}

export const ViewSignatureCanvas: React.FC<ViewSignatureCanvasProps> = ({ onSignatureComplete }) => {
  const ref = useRef(null);

  const handleSignature = (signature: string) => {
    onSignatureComplete(signature);
  };

  return (
    <SignatureScreen
      // onOK={handleSignature}
      // descriptionText="Please sign below"
      // clearText="Clear"
      // confirmText="Confirm"
    />
  );
};

export default ViewSignatureCanvas;