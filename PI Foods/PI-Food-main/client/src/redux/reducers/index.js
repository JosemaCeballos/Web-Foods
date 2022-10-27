import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  GET_DIETS,
  CREATE_RECIPE,
} from "../actions/index.js";

const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case GET_RECIPE_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.concat(action.payload)
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
