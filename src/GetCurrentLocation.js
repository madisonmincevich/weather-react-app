import React from "react";
import "./GetCurrentLocation.css";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function GetCurrentLocation(props) {
  return (
    <div className="GetCurrentLocation">
      <button className="btn" onClick={props.getLocation}>
        <div className="Locationicon">
          <BsFillGeoAltFill />
        </div>
      </button>
    </div>
  );
}
