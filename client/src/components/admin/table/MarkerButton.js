import React from "react";
import { useMap } from "./map-context";

function MarkerButton({ pos }) {
  const { map } = useMap();
  function handleClick() {
    //console.log(flying);

    map.flyTo(pos);
  }

  return (
    // <div style={{ paddingTop: "8px" }}>
    <button onClick={() => handleClick()}>Locate</button>
    // </div>
  );
}

export default MarkerButton;
