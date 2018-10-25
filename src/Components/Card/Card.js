import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = props => {
  return (
    <Link to={`/product/${props._id}`}>
      <div className="card">
        <img height="100" src={props.img_url} alt="" />
        <span>{props.title}</span>
        <span>${props.price}</span>
      </div>
    </Link>
  );
};
export default Card;
