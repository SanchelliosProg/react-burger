import { MAKE_ORDER, ORDER_FAILED, ORDER_LOADED, SAVE_ORDER } from "../actions/order"

const initialState = {
  loading: false,
  error: false,
  data: {}
}

export const makeOrder = (chosen) => {
  const ids = chosen.map(item => item._id);
  
  return function(dispatch) {
    dispatch({
      type: MAKE_ORDER
    });

    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        "ingredients": ids
    })
    })
      .then((resp) => {
        if (resp.ok) {
          dispatch({type: ORDER_LOADED});
          return resp.json();
        } else {
          dispatch({type: ORDER_FAILED});
          return Promise.reject(`Ошибка ${resp.status}`);
        }
      })
      .then((body) => {
        dispatch({type: SAVE_ORDER, payload: body});
      }).catch(e => {
        dispatch({type: ORDER_FAILED});
        console.log('Error while fetching data: ', e);
      });

  }
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case MAKE_ORDER: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ORDER_LOADED: {
      return {
        ...state,
        loading: false
      }
    }
    case SAVE_ORDER: {
      return {
        ...state,
        data: action.payload
      }
    }
    case ORDER_FAILED: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default: {
      return state
    }
  } 
}