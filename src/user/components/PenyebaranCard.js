import React from "react";
import numeral from "numeral";

const PenyebaranCard = ({ col, id, data, active, onClick }) => {
  return (
    <div className={`col ${col != null ? "s6" : "s12"} m4 center-align`}>
      <div
        onClick={onClick}
        id={id}
        className={`card ${active ? id : "blue-grey lighten-5"} rounded`}
      >
        <div className="card-content  ">
          <h2 className="flow-text"> {numeral(data).format("0,0")} </h2>
          <p className="cd">{id}</p>
        </div>
      </div>
    </div>
  );
};

export default PenyebaranCard;
