import { ORDER_REQUEST, ORDER_ERROR, ORDER_SUCCESS, SAVE_ORDER } from "../actions/order"

const initialState = {
  loading: false,
  error: false,
  data: {}
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