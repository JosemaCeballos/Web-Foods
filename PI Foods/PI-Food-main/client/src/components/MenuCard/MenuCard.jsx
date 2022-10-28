import React from "react";
import { Link } from "react-router-dom";
import "./MenuCard.css";

function MenuCard(props) {
  return (
    <div className="card-container">
      <Link to={`/recipe/${props.id}`}>
        <div className="row">
          <div className="card">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>Type of Diet:</h5>
            <ul>
              {props.diets.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuCard;
