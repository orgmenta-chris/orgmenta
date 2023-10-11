import { useReactState, useReactEffect } from "./react";
import { ViewContainerStatic } from "./container";
import { ViewButtonPressable } from "./button";
import { ViewTypographyText } from "./typography";
import { UtilityStylesheetMain } from "./stylesheet";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraType } from "expo-camera";

export const ViewBarcodeReader = ({}: any) => {
  const [scanned, setScanned] = useReactState(false);
  const [hasPermission, setHasPermission] = useReactState(null);
  const [startCamera, setStartCamera] = useReactState(false);

  const __startCamera = async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      alert("Access denied");
    }
  };

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    // @ts-ignore
    setHasPermission(status === "granted");
  };

  useReactEffect(() => {
    __startCamera();
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <ViewTypographyText>Requesting for camera permission</ViewTypographyText>
    );
  }
  if (hasPermission === false) {
    return <ViewTypographyText>No access to camera</ViewTypographyText>;
  }

  return (
    <ViewContainerStatic
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      {startCamera && (
        <Camera
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            height: 500,
          }}
          type={CameraType.back}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
        />
      )}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={UtilityStylesheetMain.absoluteFillObject}
      />
      {scanned ? (
        <ViewButtonPressable onPress={() => setScanned(false)}>
          <ViewTypographyText>Tap to Scan Again</ViewTypographyText>
        </ViewButtonPressable>
      ) : (
        <ViewButtonPressable disabled={true}>
          <ViewTypographyText>Scan Bar Code / QR Code</ViewTypographyText>
        </ViewButtonPressable>
      )}
    </ViewContainerStatic>
  );
};

export const ViewCameraMain = ({}: any) => {
  const [type, setType] = useReactState(CameraType.back);
  const [startCamera, setStartCamera] = useReactState(false);

  let camera: Camera;

  const __startCamera = async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      alert("Access denied");
    }
  };

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    alert("Photo taken! The uri is: \n\n" + photo.uri);

    // NOTE: In this function we have not done anything with the photo (photo uri) - we are only showing that the photo has been taken.
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  return (
    <ViewContainerStatic
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      {startCamera && (
        <ViewContainerStatic style={{ marginBottom: 10 }}>
          <Camera
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              height: 500,
            }}
            type={type}
            ref={(r) => {
              // @ts-ignore
              camera = r;
            }}
          ></Camera>
          <ViewButtonPressable onPress={toggleCameraType}><ViewTypographyText>Flip Camera</ViewTypographyText></ViewButtonPressable>
        </ViewContainerStatic>
      )}

      <ViewContainerStatic
        style={{
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
          gap: 5,
        }}
      >
        {startCamera && (
          <ViewButtonPressable onPress={__takePicture}>
          <ViewTypographyText>Take Picture</ViewTypographyText></ViewButtonPressable>
        )}
        {!startCamera && (
          <ViewButtonPressable onPress={__startCamera}><ViewTypographyText>Start Camera</ViewTypographyText></ViewButtonPressable>
        )}
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};
