import React from "react";
import { Link } from "react-router-dom";
import "./MenuCard.css";

function MenuCard(props) {
  return (
    <div className="card-container">
      <div className="row">
        <div className="card">
          <img src={props.image} alt={props.name} />
          <h4>
            <a href="ignore">
              <Link to={`/recipe/${props.id}`}>{props.name}</Link>
            </a>
          </h4>
          <p>Type of Diet:</p>
          <p>-{`${props.types}-`}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
