import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  GET_DIETS,
  CREATE_RECIPE,
  FILTER_BY_DIETS,
  FILTER_BY_ORDER,
  ORDER_BY_SCORE,
  ERROR_MSSG,
} from "../actions/index.js";

const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: [],
  stateToFilters: [],
  msg: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        stateToFilters: action.payload,
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
        recipes: state.recipes.concat(action.payload),
        stateToFilters: state.stateToFilters.concat(action.payload),
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_BY_ORDER:
      const recipeInOrder =
        action.payload === "Filter by Order"
          ? state.recipes
          : action.payload === "up"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: recipeInOrder,
      };
    case FILTER_BY_DIETS:
      const allRecipes2 = state.stateToFilters;
      const filterByDiets = allRecipes2.filter((recipe) => {
        if (recipe.diets.length > 0) {
          if (recipe.diets.find((element) => element === action.payload))
            return recipe;
        }
        return 0;
      });
      return {
        ...state,
        recipes:
          action.payload === "Filter by type"
            ? state.stateToFilters
            : filterByDiets,
      };
    case ORDER_BY_SCORE:
      const orderByScore =
        action.payload === "Hsc"
          ? state.recipes.sort((a, b) => {
              if (a.healthScore - b.healthScore < 0) return 1;
              else return -1;
            })
          : state.recipes.sort((a, b) => {
              if (a.healthScore - b.healthScore > 0) return 1;
              else return -1;
            });
      return {
        ...state,
        recipes:
          action.payload === "Order by score"
            ? state.stateToFilters
            : orderByScore,
      };
    case ERROR_MSSG:
      return {
        ...state,
        msg: action.payload,
        recipes: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
