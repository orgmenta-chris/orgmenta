import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraType } from "expo-camera";

export const ViewBarcodeReader = ({}: any) => {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [startCamera, setStartCamera] = React.useState(false);

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

  useEffect(() => {
    __startCamera();
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
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
        style={StyleSheet.absoluteFillObject}
      />
      {scanned ? (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      ) : (
        <Button title="Scan Bar Code / QR Code" disabled={true} />
      )}
    </View>
  );
};

export const ViewCameraMain = ({}: any) => {
  const [type, setType] = useState(CameraType.back);
  const [startCamera, setStartCamera] = React.useState(false);

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
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      {startCamera && (
        <View style={{ marginBottom: 10 }}>
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
          <Button title="Flip Camera" onPress={toggleCameraType} />
        </View>
      )}

      <View
        style={{
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
          gap: 5,
        }}
      >
        {startCamera && <Button title="Take Picture" onPress={__takePicture} />}
        {!startCamera && (
          <Button title="Start Camera" onPress={__startCamera} />
        )}
      </View>
    </View>
  );
};
