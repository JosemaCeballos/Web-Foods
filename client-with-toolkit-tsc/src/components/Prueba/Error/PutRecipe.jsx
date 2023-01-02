import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  putRecipeById,
  getDiets,
  getAllRecipesById,
} from "../../../redux/actions/index";
import { useParams } from "react-router-dom";

function PutRecipe() {
  let { id } = useParams();
  const dispatch = useDispatch();
  let detail = useSelector((state) => state.recipeDetail);
  const msg = useSelector((state) => state.recipeChangedMsg);

  const [newRecipe, setNewRecipe] = useState({
    name: detail[0].name,
    image: detail[0].image,
    healthScore: detail[0].healthScore,
    summary: detail[0].summary,
    steps: detail[0].steps,
    diets: detail[0].diets,
  });

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setNewRecipe({
      ...newRecipe,
      diets: [...newRecipe.diets, e.target.value],
    });
  };

  React.useEffect(() => {
    dispatch(getAllRecipesById(id));
  }, [dispatch, id]);

  function dispatchData(newRecipe, id) {
    dispatch(putRecipeById(newRecipe, id));
  }

  function getDiet() {
    dispatch(getDiets());
  }
  return (
    <div>
      <Navbar />

      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getDiet();
            dispatchData(id, newRecipe);
          }}
          className="form"
        >
          <div className="form-header">
            <h1 className="form-title">Create your recipe!</h1>
          </div>
          <label className="form-label">Name of your recipe:</label>
          <input
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Write the name here..."
          ></input>
          <label className="form-label">Recipe image url:</label>
          <input
            type="text"
            name="image"
            value={newRecipe.image}
            onChange={handleChange}
            placeholder="Image Url of your recipe..."
            className="form-input"
          ></input>
          <label className="form-label">Health Score:</label>
          <input
            type="number"
            name="healthScore"
            value={newRecipe.healthScore}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter the score..."
          ></input>
          {msg.length ? <h2 className="sucessMsg">{msg}</h2> : null}
          <label className="form-label">Summary:</label>
          <textarea
            name="summary"
            value={newRecipe.summary}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Enter the Summary..."
          ></textarea>
          <label className="form-label">Steps to do it:</label>
          <textarea
            name="steps"
            value={newRecipe.steps}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Enter the steps to do the recipe..."
          ></textarea>
          <label className="form-label">
            Type of Diets(You can select more than one by clicking again):
          </label>
          <select name="diets" className="form-input" onChange={handleSelect}>
            <option disabled>Add diet type</option>
            <option>gluten free</option>
            <option>pescatarian</option>
            <option>whole 30</option>
            <option>dairy free</option>
            <option>primal</option>
            <option>lacto ovo vegetarian</option>
            <option>fodmap friendly</option>
            <option>vegan</option>
            <option>ketogenic</option>
            <option>paleolithic</option>
          </select>
          {newRecipe.diets.map((e) => (
            <div key={e}>
              <button className="form-input-diets">{e}</button>
            </div>
          ))}

          <input type="submit" className="btn-submit"></input>
        </form>
      </div>
    </div>
  );
}

export default PutRecipe;
