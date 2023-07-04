import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  let content;

  if (!isGeolocationAvailable) {
    content = <div>Your browser does not support Geolocation</div>;
  } else if (!isGeolocationEnabled) {
    content = <div>Geolocation is not enabled</div>;
  } else if (coords) {
    content = (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{coords.speed}</td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    content = <div>Getting the location data&hellip; </div>;
  }

  return content;
};

export default Demo;
