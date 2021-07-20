import { SAVE_INGREDIENTS, INGREDIENTS_REQUEST, INGREDIENTS_ERROR, INGREDIENTS_SUCCESS} from "../actions/ingredients";

const initialState = {
  loading: false,
  error: false,
  data: []
};

export const getIngredients = () => {
  return function(dispatch) {
    dispatch({type: INGREDIENTS_REQUEST});
    fetch("https://norma.nomoreparties.space/api/ingredients", { method: "GET" })
      .then((resp) => {
        if (resp.ok) {
          dispatch({type: INGREDIENTS_SUCCESS});
          return resp.json();
        } else {
          dispatch({type: INGREDIENTS_ERROR});
          return Promise.reject(`Ошибка ${resp.status}`);
        }
      })
      .then((body) => {
        dispatch({type: SAVE_INGREDIENTS, payload: body.data});
      }).catch(e => {
        dispatch({type: INGREDIENTS_ERROR});
        console.log('Error while fetching data: ', e);
      });
  }
}

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