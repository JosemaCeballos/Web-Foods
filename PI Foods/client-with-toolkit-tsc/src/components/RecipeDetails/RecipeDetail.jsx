import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import * as actions from "../../redux/actions/index";
import "./RecipeDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function RecipeDetail(props) {
  let { id } = useParams();
  let dispatch = useDispatch();
  let detail = useSelector((state) => state.recipeDetail);
  let msg = useSelector((state) => state.errorMsg);
  React.useEffect(() => {
    dispatch(actions.getAllRecipesById(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <div className="about-recipe">
        <Link to="/home">
          <button className="custom-button">Back Home</button>
        </Link>
        {detail.length > 0 ? (
          Object.keys(detail).length > 0 && (
            <div key={detail[0].id} className="main">
              <h1>{detail[0].name} </h1>
              <div className="img-content">
                <img src={detail[0].image} alt="food" />
              </div>
              <h3>Health Score: {detail[0].healthScore}</h3>
              <h3>Type of Diets</h3>
              <p>
                {detail[0].diets ? detail[0].diets + "," : detail[0].types}{" "}
              </p>
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
              <Link to={`/put/recipe/${detail[0].id}`}>
                <button className="custom-button">Want to change?</button>
              </Link>
            </div>
          )
        ) : !detail.length ? (
          <p>{msg}</p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default RecipeDetail;
