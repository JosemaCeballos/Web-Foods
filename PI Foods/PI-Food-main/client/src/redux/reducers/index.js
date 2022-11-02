import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  GET_DIETS,
  CREATE_RECIPE,
  FILTER_BY_DIETS,
  FILTER_BY_ORDER,
  ORDER_BY_SCORE,
} from "../actions/index.js";

const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: [],
  stateToFilters: [],
  stateToCleanFilters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        stateToFilters: action.payload,
        stateToCleanFilters: action.payload,
      };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case GET_RECIPE_BY_NAME:
      const recipeByName = state.stateToCleanFilters;
      return {
        ...state,
        recipes: action.payload,
        stateToFilters: recipeByName,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.concat(action.payload),
        stateToFilters: state.stateToFilters.concat(action.payload),
        stateToCleanFilters: state.stateToCleanFilters.concat(action.payload),
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_BY_ORDER:
      const recipeInOrder =
        action.payload === "up"
          ? state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              else return -1;
            })
          : state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              else return -1;
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
        action.payload === "Filter by Order"
          ? state.recipes
          : action.payload === "Hsc"
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
        recipes: orderByScore,
      };
    default:
      return state;
  }
};

export default rootReducer;
