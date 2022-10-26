import React from "react";
import { Link } from "react-router-dom";

function MenuCard(props) {
  return (
    <div>
      <h3>
        <Link to={`/recipe/${props.id}`}>{props.name}</Link>
      </h3>
      <img src={props.image} alt={props.name} />
      <p>Type of Diet: ${props.types}</p>
    </div>
  );
}

export default MenuCard;
