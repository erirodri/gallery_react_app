import React from "react";

const Card = ({ img }) => {
  return (
    <div className="card m-1" style={{ width: "20rem" }}>
      <img className="card-img-top" src={img} alt="png" />
    </div>
  );
};

export default Card;
