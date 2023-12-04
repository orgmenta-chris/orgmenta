import MapView from "react-native-maps";
import { View } from "react-native";
import { ViewContainerScroll } from "./container";
import { useEffect, useState } from "react";
import { ViewInputText } from "./input";

export const ViewMapMobile = () => {
  const location = { latitude: 37.78825, longitude: -122.4324 };
  return (
    <View style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
      <MapView
        provider="google"
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};

export interface coordinates {
  latitude: number;
  longitude: number;
}

export const geoCodeAddress = async (address: any) => {
  const res = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=1955fdf281ab2472d3c19e4c0519df53&query=${address}`
  );

  return res.json();
};

export const ViewAddressPicker = () => {
  const [address, setAddress] = useState(
    "1600 Pennsylvania Ave NW, Washington DC"
  );

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const location: coordinates = { latitude: 37.78825, longitude: -122.4324 };

  useEffect(() => {
    const getAddressOnMap = async () => {
      const newAddress = await geoCodeAddress(address);

      console.log(newAddress);
    };

    getAddressOnMap();
  }, [address]);

  return (
    <ViewContainerScroll>
      <ViewInputText
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
      />

      <MapView
        provider="google"
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </ViewContainerScroll>
  );
};

// Todo:
// DONE: https://developers.google.com/maps/documentation/javascript/get-api-key
// const apikey = process.env.GOOGLE_MAPS_API_KEY
// Integrate API key into the map.
// NOTDONE: https://github.com/react-native-web-community/react-native-web-maps
// https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
