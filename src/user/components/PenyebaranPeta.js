import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../shared/UtilsElement/Utils";

const PenyebaranPeta = ({ provinsi, Tipe }) => {
  const TengahIndonesia = { lat: -3.843571, lng: 117.665106 };
  

  return (
    <div className="col s12 center-align blue-grey lighten-5 rounded black-text  ">
      <div className="card peta rounded">
        <MapContainer center={TengahIndonesia} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {showDataOnMap(provinsi, Tipe)}
        </MapContainer>
      </div>
    </div>
  );
};

export default PenyebaranPeta;
