import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export const getAllRecipes = () => {
  return async function (dispatch) {
    try {
      let recipes = await axios("http://localhost:3001/recipes/");
      console.log(recipes.data);
      return dispatch({ type: GET_ALL_RECIPES, payload: recipes.data });
    } catch (error) {
      console.log(error);
    }
  };
};
