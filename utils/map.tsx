import MapView from "react-native-maps";
import { View } from "react-native";
import { ViewContainerScroll, ViewContainerStatic } from "./container";
import { useEffect, useState } from "react";
import { ViewInputText } from "./input";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { UtilityPlatformMain } from "./platform";
import { ViewButtonPressable } from "./button";
import { ViewTypographyText } from "./typography";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// @ts-ignore
import { STAGING_GOOGLE_PLACES_API_KEY } from "@env";

export const ViewMapMobile = ({ latitude, longitude }: any) => {
  return (
    <View style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
      <MapView
        provider="google"
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
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

export const ViewMapWeb = ({ latitude, longitude }: any) => {
  const [hue, setHue] = useState(0);

  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <ViewContainerStatic>
      <Map
        provider={osm}
        height={550}
        defaultCenter={[latitude, longitude]}
        defaultZoom={11}
      >
        <ZoomControl />
        <Marker
          width={50}
          anchor={[latitude, longitude]}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
      </Map>
    </ViewContainerStatic>
  );
};

export const ViewAddressPicker = () => {
  const [address, setAddress] = useState();

  const [latitude, setLatitude] = useState(37.78825);
  const [longitude, setLongitude] = useState(-122.4324);

  const [postcode, setPostcode] = useState("SW1A 2AB");
  const [street, setStreet] = useState("");

  const location: coordinates = { latitude: 37.78825, longitude: -122.4324 };

  const getAddressOnMap = async () => {
    const newAddress = await geoCodeAddress(address);

    // console.log(newAddress);

    const newLatitude = newAddress.data[0].latitude;
    const newLongitude = newAddress.data[0].longitude;

    setLatitude(newLatitude);
    setLongitude(newLongitude);

    console.log(latitude);
    console.log(longitude);
  };

  const searchStreetName = async () => {
    const url = new URL("https://uk-postcode.p.rapidapi.com/search");

    const parameters = {
      street,
    };

    url.search = new URLSearchParams(parameters).toString();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "db7c4a8f07msh1f9753b83296f08p1c0a1fjsn4921f44b5d64",
        "X-RapidAPI-Host": "uk-postcode.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      const result = await response.json();

      console.log(result);

      setAddress(result);
    } catch (error) {
      throw error;
    }
  };

  const getPostCode = async () => {
    const url = new URL("https://uk-postcode.p.rapidapi.com/getpostcode");

    const parameters = {
      postcode,
    };

    url.search = new URLSearchParams(parameters).toString();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "db7c4a8f07msh1f9753b83296f08p1c0a1fjsn4921f44b5d64",
        "X-RapidAPI-Host": "uk-postcode.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      const result = await response.json();

      console.log(result);

      const streetName = result[0].streetName;

      setStreet(streetName);

      await searchStreetName();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // getAddressFromPostCode();
    // getAddressOnMap();
  }, [postcode]);

  return (
    <ViewContainerScroll>
      {/* <ViewInputText
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        value={postcode}
        onChangeText={setPostcode}
        placeholder="Enter postcode"
      /> */}

      <GooglePlacesAutocomplete
        placeholder="Type a place"
        onPress={(data, details = null) => console.log(data, details)}
        query={{ key: STAGING_GOOGLE_PLACES_API_KEY }}
        fetchDetails={true}
        onFail={(error) => console.log(error)}
        onNotFound={() => console.log("no results")}
        listEmptyComponent={() => (
          <ViewContainerStatic style={{ flex: 1 }}>
            <ViewTypographyText selectable={false}>
              No results were found
            </ViewTypographyText>
          </ViewContainerStatic>
        )}
      />

      {/* {address &&
        // @ts-ignore
        address.map((address: any, index: number) => {
          return (
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
              onPress={}
            >
              <ViewTypographyText
                selectable={false}
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingBottom: 10,
                }}
              >
                {address.}
              </ViewTypographyText>
            </ViewButtonPressable>
          );
        })} */}

      {UtilityPlatformMain.OS === "web" ? (
        <ViewMapWeb latitude={latitude} longitude={longitude} />
      ) : (
        <ViewMapMobile latitude={latitude} longitude={longitude} />
      )}
    </ViewContainerScroll>
  );
};

// Todo:
// DONE: https://developers.google.com/maps/documentation/javascript/get-api-key
// const apikey = process.env.GOOGLE_MAPS_API_KEY
// Integrate API key into the map.
// NOTDONE: https://github.com/react-native-web-community/react-native-web-maps
// https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
