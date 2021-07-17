import { OPEN_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, SHUT_DOWN_MODAL, TOGGLE_MODAL } from "../../actions/modal/modal";

const initialState = {
  isOpened: false,
  currentView: 'none'
};

export const modalReduecer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return !state;
    }
    case OPEN_ORDER_DETAILS: {
      return {
        ...state,
        isOpened: true,
        currentView: 'OrderDetails'
      }
    }
    case OPEN_INGREDIENT_DETAILS: {
      return {
        ...state,
        isOpened: true,
        currentView: 'IngredientDetails'
      }
    }
    case SHUT_DOWN_MODAL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
