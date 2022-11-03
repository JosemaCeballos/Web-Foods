import React from "react";
import * as actions from "../../redux/actions/index";
import "./RecipeDetail.css";
import { useDispatch, useSelector } from "react-redux";

function RecipeDetail(props) {
  let dispatch = useDispatch();
  let detail = useSelector((state) => state.recipeDetail);
  React.useEffect(() => {
    dispatch(
      actions.getAllRecipesById(
        props.match.params.id || props.match.params.idApi
      )
    );
  }, [dispatch, props.match.params.id, props.match.params.idApi]);

  return (
    <div className="about-recipe">
      {Object.keys(detail).length > 0 && (
        <div key={detail[0].idApi || detail[0].id} className="main">
          <div className="img-content">
            <img src={detail[0].image} alt="food" />
          </div>
          <h1>{detail[0].name} </h1>
          <h3>Type of Diets</h3>
          <p>{detail[0].diets ? detail[0].diets + "," : detail[0].types} </p>
          <h3>Summary:</h3>
          <p>{detail[0].summary}</p>
          <h3>Steps:</h3>
          <p>
            {`${
              detail[0].steps
                ? detail[0].steps
                : "Does not have step to do it :("
            }`}{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
