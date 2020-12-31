import React from "react";

const HomeCard = ({ styles, src, href, alt, paraf }) => {
  return (
    <div
      className="col s12 m6 l4 homecard center-align black-text "
      style={styles}
    >
      <div className="card rounded">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator ac" src={src} alt={alt} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {alt}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <a href={href}>Read More</a>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {alt}
            <i className="material-icons right">close</i>
          </span>
          <p>{paraf}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
