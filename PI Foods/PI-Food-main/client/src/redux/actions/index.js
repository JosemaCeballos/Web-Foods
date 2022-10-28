import axios from "axios";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";

export const getAllRecipes = () => {
  return async function (dispatch) {
    try {
      let recipes = await axios.get("http://localhost:3001/recipes/");
      return dispatch({ type: GET_ALL_RECIPES, payload: recipes.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllRecipesById = (id) => {
  return async function (dispatch) {
    try {
      let recipeById = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({ type: GET_RECIPE_BY_ID, payload: recipeById.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      let recipeByName = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      return dispatch({ type: GET_RECIPE_BY_NAME, payload: recipeByName.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const diets = await axios.get("http://localhost:3001/diets");
    return dispatch({ type: GET_DIETS, payload: diets.data });
  };
};

export const createRecipe = (recipe) => {
  return async function (dispatch) {
    const createRecipe = await axios.post(
      "http://localhost:3001/recipes/",
      recipe
    );
    return dispatch({ type: CREATE_RECIPE, payload: createRecipe.data });
  };
};
