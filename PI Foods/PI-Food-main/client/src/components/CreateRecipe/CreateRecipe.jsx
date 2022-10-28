import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import "./CreateRecipe.css";

function CreateRecipe() {
  const dispatch = useDispatch();

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image:
      "https://image.shutterstock.com/image-photo/error-404-page-website-not-260nw-476878477.jpg",
    healthScore: 0,
    summary: "",
    steps: "",
    diets: [],
  });

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    if (!newRecipe.diets.includes(e.target.value)) {
      setNewRecipe({
        ...newRecipe,
        diets: [...newRecipe.diets, e.target.value],
      });
    }
  };

  function dispatchData(newRecipe) {
    dispatch(actions.createRecipe(newRecipe));
  }

  function getDiets() {
    dispatch(actions.getDiets());
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getDiets();
          dispatchData(newRecipe);
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
        <select
          onChange={handleSelect}
          name="diets"
          value={newRecipe.diets}
          className="form-input"
        >
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
        <input type="submit" className="btn-submit"></input>
      </form>
    </div>
  );
}

export default CreateRecipe;
