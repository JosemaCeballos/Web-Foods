import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  GET_DIETS,
  CREATE_RECIPE,
  FILTER_BY_DIETS,
  FILTER_BY_ORDER,
  ORDER_BY_SCORE,
  FILTER_BY_TYPE_ID,
  FILTER_BY_SEARCHBAR,
  CLEAN_FILTERS,
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
          ? state.stateToFilters.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              else return -1;
            })
          : state.stateToFilters.sort((a, b) => {
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
        action.payload === "Hsc"
          ? state.stateToFilters.sort((a, b) => {
              if (a.healthScore - b.healthScore < 0) return 1;
              else return -1;
            })
          : state.stateToFilters.sort((a, b) => {
              if (a.healthScore - b.healthScore > 0) return 1;
              else return -1;
            });
      return {
        ...state,
        recipes:
          action.payload === "Filter by Order"
            ? state.stateToCleanFilters
            : orderByScore,
      };
    case FILTER_BY_TYPE_ID:
      const filterById = action.payload
        ? action.payload === "idApi"
          ? state.stateToFilters.filter((recipe) =>
              recipe.hasOwnProperty("idApi")
            )
          : state.stateToFilters.filter((recipe) => recipe.hasOwnProperty("id"))
        : action.payload === "id"
        ? state.stateToFilters.filter((recipe) => recipe.hasOwnProperty("id"))
        : state.stateToFilters.filter((recipe) =>
            recipe.hasOwnProperty("idApi")
          );
      return {
        ...state,
        recipes: filterById,
      };
    case FILTER_BY_SEARCHBAR:
      const filterSearchBar = state.stateToFilters.filter((recipe) => {
        if (recipe.name.toLowerCase().includes(action.payload)) return recipe;
      });
      return {
        ...state,
        recipes: filterSearchBar,
      };
    case CLEAN_FILTERS:
      const cleanState = state.stateToCleanFilters;
      return {
        ...state,
        recipes: action.payload === "clean" ? cleanState : [],
      };
    default:
      return state;
  }
};

export default rootReducer;
