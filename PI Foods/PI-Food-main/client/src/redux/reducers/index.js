import { GET_ALL_RECIPES } from "../actions/index.js";

const initialState = {
  recipes: [],
  detail: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
