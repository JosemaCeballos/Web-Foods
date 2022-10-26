import React from 'react'
import {Link} from 'react-router-dom'

function RecipeDetail(props) {
  return (
    <div className="card">
      <h3>
        <Link to={`/movie/${props.id}`}>{props.name}</Link>
      </h3>
      <img src={props.image} alt={props.name} />
      <p>Types of Diets: {props.diets}</p>
    </div>
  )
}

export default RecipeDetail