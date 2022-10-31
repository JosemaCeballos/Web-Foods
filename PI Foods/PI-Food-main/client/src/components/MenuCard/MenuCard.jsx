import React from "react";
import { Link } from "react-router-dom";
import "./MenuCard.css";

function MenuCard(props) {
  return (
    <div className="card-container">
      <Link to={`/recipe/${props.id || props.idApi}`} >
        <div className="row">
          <div className="card">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>Type of Diet:</h5>
            <ul>
              {props.types?.map((el) => (
                <li  key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuCard;
