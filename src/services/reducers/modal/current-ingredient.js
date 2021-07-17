import { DESELECT_ITEM, SELECT_ITEM } from "../../actions/modal/current-ingredient";

const initialState = {};

export const currentIngredientReducer = (state=initialState, action) => {
  switch(action.type) {
    case SELECT_ITEM: {
      return action.payload;
    }
    case DESELECT_ITEM: {
      return initialState;
    }
    default:
      return state;
  }
}