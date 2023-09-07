import React from "react";
import { Map, Marker, GeoJson } from "pigeon-maps";
import worlMap from "../../../assets/custom.geo.json";

const PegionMaps = (props: any) => {
  const { customerAddress } = props; // this data could be geocoded into lat and long coordinates for them to be rendered on the map

  const geojson = worlMap;

  return (
    <Map height={600} defaultZoom={2.5}>
      <GeoJson
        data={geojson}
        styleCallback={(feature: any, hover: any) => {
          if (feature.geometry.type === "LineString") {
            return { strokeWidth: "1", stroke: "black" };
          }
          return {
            fill: "#d4e6ec99",
            strokeWidth: "1",
            stroke: "white",
            r: "20",
          };
        }}
      />
      <Marker width={50} anchor={[13.75396, 100.50224]} color="gray" />
      <Marker width={50} anchor={[-1.292066, 36.821945]} color="gray" />
    </Map>
  );
};

export default PegionMaps;
