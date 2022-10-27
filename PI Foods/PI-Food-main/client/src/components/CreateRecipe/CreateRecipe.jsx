import React from "react";

function CreateRecipe() {
  return (
    <div>
      <form>
        <p>Name:</p>
        <input type="text" name="name"></input>
        <p>Image:</p>
        <input type="text" name="image"></input>
        <p>Health Score:</p>
        <input type="number" name="healthScore"></input>
        <p>Summary:</p>
        <input type="text" name="summary"></input>
        <p>Steps:</p>
        <input type="text" name="steps"></input>
        <p>Diets</p>
        <select>
          <option>Add diet type</option>
        </select>
      </form>
    </div>
  );
}

export default CreateRecipe;
