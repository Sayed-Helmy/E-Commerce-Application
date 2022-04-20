import React, { useState, useContext } from "react";

const MapContext = React.createContext();

function MapProvider({ children }) {
  const [map, setMapFly] = useState(null);

  const value = { map, setMapFly };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}

function useMap() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
}

export { MapProvider, useMap };
