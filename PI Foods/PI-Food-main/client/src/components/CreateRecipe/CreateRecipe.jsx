import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import "./CreateRecipe.css";

export function validate(newRecipe) {
  let errors = {};
  if (!newRecipe.name) {
    errors.name = "Required a name";
  } else if (!/([A-Z])\w+/.test(newRecipe.name)) {
    errors.name =
      "In name, the first letter must be capital and must have more than one letter ";
  }

  if (isNaN(Number(newRecipe.healthScore))) {
    errors.healthScore = "Health Score must be a number";
  } else if (newRecipe.healthScore > 100) {
    errors.healthScore = "Health Score must be less than 100";
  } else if (newRecipe.healthScore < 0) {
    errors.healthScore = "Health Score must be more than 0";
  }

  if (!newRecipe.summary) {
    errors.summary = "Required a summary";
  }

  if (!newRecipe.steps) {
    errors.steps = "Required steps";
  }
  return errors;
}

function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    healthScore: 0,
    summary: "",
    steps: "",
    diets: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...newRecipe,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setNewRecipe({
      ...newRecipe,
      diets: [...newRecipe.diets, e.target.value],
    });
  };

  function handleDelete(e) {
    setNewRecipe({
      ...newRecipe,
      diets: newRecipe.diets.filter((acc) => acc !== e),
    });
  }

  function dispatchData(newRecipe) {
    dispatch(actions.createRecipe(newRecipe));
  }

  function getDiets() {
    dispatch(actions.getDiets());
  }

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getDiets();
            dispatchData(newRecipe);
            setTimeout(() => history.push("/home"), 2000);
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
          {errors.name && <p className="danger">{errors.name}</p>}
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
          {errors.healthScore && <p className="danger">{errors.healthScore}</p>}
          <label className="form-label">Summary:</label>
          <textarea
            name="summary"
            value={newRecipe.summary}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Enter the Summary..."
          ></textarea>
          {errors.summary && <p className="danger">{errors.summary}</p>}
          <label className="form-label">Steps to do it:</label>
          <textarea
            name="steps"
            value={newRecipe.steps}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Enter the steps to do the recipe..."
          ></textarea>
          {errors.steps && <p className="danger">{errors.steps}</p>}
          <label className="form-label">
            Type of Diets(You can select more than one by clicking again):
          </label>
          <select onChange={handleSelect} name="diets" className="form-input">
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
              <button className="delete" onClick={() => handleDelete(e)}>
                X
              </button>
            </div>
          ))}
          {!newRecipe.name ? (
            <input type="submit" className="btn-submit" disabled></input>
          ) : errors.name ||
            errors.diets ||
            errors.summary ||
            errors.healthScore ||
            errors.steps ? (
            <input type="submit" className="btn-submit" disabled></input>
          ) : (
            <input type="submit" className="btn-submit"></input>
          )}
        </form>
      </div>
    </>
  );
}

export default CreateRecipe;
