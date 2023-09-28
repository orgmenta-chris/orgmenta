import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraType } from "expo-camera";

export const BarCodeReaderComponent = ({}: any) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      // @ts-ignore
      setHasPermission(status === "granted");
    };

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
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export const CameraComponent = ({}: any) => {
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
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const CameraPreview = ({ photo }: any) => {
    console.log("photo", photo);
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {startCamera && (
        <View style={{ marginBottom: 10 }}>
          <Camera
            style={styles.camera}
            type={type}
            ref={(r) => {
              // @ts-ignore
              camera = r;
            }}
          ></Camera>
          <Button title="Flip Camera" onPress={toggleCameraType} />
        </View>
      )}

      <View style={styles.buttonContainer}>
        {startCamera && <Button title="Take Picture" onPress={__takePicture} />}
        {!startCamera && (
          <Button title="Start Camera" onPress={__startCamera} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 500,
  },
  buttonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 5,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});
