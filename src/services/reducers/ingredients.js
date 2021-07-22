import { SAVE_INGREDIENTS, INGREDIENTS_REQUEST, INGREDIENTS_ERROR, INGREDIENTS_SUCCESS} from "../actions/ingredients";

const initialState = {
  loading: false,
  error: false,
  data: []
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_REQUEST: {
      return {...state, loading: true, error: false};
    }
    case INGREDIENTS_SUCCESS: {
      return {...state, loading: false, error: false};
    }
    case INGREDIENTS_ERROR: {
      return {...state, loading: false, error: true, data: initialState};
    }
    case SAVE_INGREDIENTS: {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return state;
    }
  }
}