import React from "react";

const KlasementCard = (props) => {
  return (
    <div className={`col s12 m4 ${props.offset} center-align k `}>
      <div
        className={`card  ${
          props.className != null ? props.className : "blue-grey lighten-5"
        } rounded`}
      >
        <div className="card-content  black-text">{props.children}</div>
      </div>
    </div>
  );
};

export default KlasementCard;
