import MapView from "react-native-maps";
import { View } from "react-native";


export const ViewMapMobile = () => {
  const location = { latitude: 37.78825, longitude: -122.4324 }
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



// Todo:
// DONE: https://developers.google.com/maps/documentation/javascript/get-api-key
// const apikey = process.env.GOOGLE_MAPS_API_KEY
// Integrate API key into the map.
// NOTDONE: https://github.com/react-native-web-community/react-native-web-maps