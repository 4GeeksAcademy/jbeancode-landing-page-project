import React from "react";

export const Card = ({name, about, buttonTitle}) => {
  return (
    <div className="card mb-4">
      <img
        src="https://i.etsystatic.com/20553578/r/il/70f1ba/3258604881/il_fullxfull.3258604881_7i19.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{about}</p>
        <a href="#" className="btn btn-primary">
          {buttonTitle}
        </a>
      </div>
    </div>
  );
};
