import React from "react";
 const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} alt="photo" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">
            some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="{props.link}" className="btn">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
