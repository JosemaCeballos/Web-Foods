import React from "react";
import * as actions from "../../redux/actions/index";
import "./RecipeDetail.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function RecipeDetail(props) {
  let dispatch = useDispatch();
  let detail = useSelector((state) => state.recipeDetail);
  React.useEffect(() => {
    dispatch(actions.getAllRecipesById(props.match.params.id));
    console.log(detail);
  }, []);

  return (
    <div className="bg">
      {Object.keys(detail).length > 0 && (
        <div key={detail[0].idApi || detail[0].id}>
          <h1>{detail[0].name} </h1>
          <img src={detail[0].image} alt="food" />
          <h2>Type of Diets</h2>
          <p>{detail[0].types} </p>
          <h2>Summary:</h2>
          <p>{detail[0].summary} </p>
          <h2>Steps:</h2>
          <p>{`${detail[0].steps ? detail[0].steps : "Does not have step to do it :("}`} </p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
