import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map2 = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-70, -2],
        scale: 1600
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies
        geography="src/assets/map/feature.json"
        fill="#5858582b"
        stroke="#00c3ff"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-2.99, 53.4566]}
        dx={-60}
        dy={45}
        connectorProps={{
          stroke: "#ff006a",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-10" y='10' textAnchor="end" alignmentBaseline="middle" fill="#ffffff" fontSize='20px' fontWeight='bold'>
          {"Liverpool"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map2;
