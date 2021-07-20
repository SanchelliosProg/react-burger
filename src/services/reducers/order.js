import { ORDER_REQUEST, ORDER_ERROR, ORDER_SUCCESS, SAVE_ORDER } from "../actions/order"

const initialState = {
  loading: false,
  error: false,
  data: {}
}

export const makeOrder = (chosen) => {
  const ids = chosen.map(item => item._id);
  
  return function(dispatch) {
    dispatch({
      type: ORDER_REQUEST
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
          dispatch({type: ORDER_SUCCESS});
          return resp.json();
        } else {
          dispatch({type: ORDER_ERROR});
          return Promise.reject(`Ошибка ${resp.status}`);
        }
      })
      .then((body) => {
        dispatch({type: SAVE_ORDER, payload: body});
      }).catch(e => {
        dispatch({type: ORDER_ERROR});
        console.log('Error while fetching data: ', e);
      });

  }
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case ORDER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    case SAVE_ORDER: {
      return {
        ...state,
        data: action.payload
      }
    }
    default: {
      return state
    }
  } 
}