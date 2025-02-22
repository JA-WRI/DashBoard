'use client'
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

export default function MapChart() {
  return (
    <div className="w-full h-[450px] overflow-hidden">
      <div className="w-full h-full" style={{ clipPath: 'inset(0 0 20% 0)' }}>
        <ComposableMap
          projectionConfig={{ scale: 100 }}  // Zoom level
          width={800} 
          height={450}
          style={{
            width: "100%",
            height: "100%",
          }}
          projection="geoMercator"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}
