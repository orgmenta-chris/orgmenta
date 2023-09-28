import  { useEffect, useState } from "react";
import { Map, Marker, GeoJson } from "pigeon-maps";

const PigeonMaps = (props: any) => {
  const { customerAddress } = props; // this data could be geocoded into lat and long coordinates for them to be rendered on the map

  const [worldMapJSON, setWorldMapJSON] = useState(null);

  const fetchWorldMap = async () => {
    try {
      const response = await fetch(
        "https://ik.imagekit.io/vg0ett8n6/custom.geo.json?updatedAt=1693968485445"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWorldMapJSON(data);
    } catch (error) {
      console.error("Error fetching world map data:", error);
    }
  };

  // this function essentially converts the user addresses into coordinates that can be used to render markers on the map.
  const goeCodeAddresses = () => {
    // todo
  };

  useEffect(() => {
    fetchWorldMap();
  }, []);

  return (
    <Map height={600} defaultZoom={2.5}>
      <GeoJson
        data={worldMapJSON}
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

export default PigeonMaps;
