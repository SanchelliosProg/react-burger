import { SAVE_INGREDIENTS, LOAD_INGREDIENTS, ERROR_ON_LOAD, INGREDIENTS_LOADED} from "../actions/ingredients";

const initialState = {
  loading: false,
  error: false,
  data: []
};

export const getIngredients = () => {
  return function(dispatch) {
    dispatch({type: LOAD_INGREDIENTS});
    fetch("https://norma.nomoreparties.space/api/ingredients", { method: "GET" })
      .then((resp) => {
        if (resp.ok) {
          dispatch({type: INGREDIENTS_LOADED});
          return resp.json();
        } else {
          dispatch({type: ERROR_ON_LOAD});
          return Promise.reject(`Ошибка ${resp.status}`);
        }
      })
      .then((body) => {
        dispatch({type: SAVE_INGREDIENTS, payload: body.data});
      }).catch(e => {
        dispatch({type: ERROR_ON_LOAD});
        console.log('Error while fetching data: ', e);
      });
  }
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INGREDIENTS: {
      return {...state, loading: true, error: false};
    }
    case INGREDIENTS_LOADED: {
      return {...state, loading: false, error: false};
    }
    case ERROR_ON_LOAD: {
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