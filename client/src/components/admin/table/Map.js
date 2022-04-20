import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  Popup,
} from "react-leaflet";
import { CRS } from "leaflet";
import MarkerButton from "./MarkerButton";
import { useMap } from "./map-context";

const Map = ({ props }) => {
  //const [mapFly, setMapFly] = useState(null);
  const { map, setMapFly } = useMap();

  return (
    <>
      <div
        style={{
          height: "50%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          padding: "16px",
        }}
      >
        <MapContainer
          doubleClickZoom={false}
          id="mapId"
          zoom={0}
          center={[234.5, 672.5]}
          crs={CRS.Simple}
          whenCreated={(theMap) => setMapFly(theMap)}
        >
          {console.log("the map:", map)}
          <ImageOverlay
            url="https://i.imgur.com/0Q6klqp.png"
            bounds={[
              [0, 0],
              [469, 1355],
            ]}
          />

          <Marker position={[200.5, 672.5]}>
            <Popup>WD113</Popup>
          </Marker>
          <Marker position={[260, 900]}>
            <Popup>Single Bed Includision Ward</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div
        style={{
          flexDirection: "column",
          width: "100px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        {/* <MarkerButton btnLabel="Transmitter 1" pos={[260, 900]} map={mapFly} />
        <MarkerButton
          btnLabel="Transmitter 2"
          pos={[200.5, 672.5]}
          map={mapFly}
        /> */}
      </div>
    </>
  );
};

export default Map;
