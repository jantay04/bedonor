import React, { FC } from "react";
import MapComponent from "./Marker.jsx";

const BaseMap: FC = () => {
  return (
    <div className="flex justify-center">
      <MapComponent />
    </div>
  );
};

export default BaseMap;
