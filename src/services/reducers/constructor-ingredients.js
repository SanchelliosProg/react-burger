import { ADD_INGREDIENT, REMOVE_BUN, REMOVE_INGREDIENT } from "../actions/constructor-ingredients";
import { nanoid } from "nanoid";
import chosen from '../../utils/chosen';

const initialState = {
  chosen: chosen
};

export const addIngredient = (ingredient) => {
  return function(dispatch) {
    if (ingredient.type === 'bun') {
      for (let i = 0; i < 2; i++) {
        dispatch({
          type: ADD_INGREDIENT,
          payload: ingredient
        });
      }
    } else {
      dispatch({
        type: ADD_INGREDIENT,
        payload: ingredient
      });
    }
  }
}

export const removeIngredient = (ingredient) => {
  return function(dispatch) {
    if (ingredient.type === 'bun') {
      dispatch({
        type: REMOVE_BUN
      });
    } else {
      dispatch({
        type: REMOVE_INGREDIENT,
        id: ingredient._id
      })
    }
  }
}

export const constructorIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      action.payload._id = nanoid();
      return [...state, action.payload];
    }
    case REMOVE_INGREDIENT: {
      const newChosen = state.chosen.filter(item => item._id !== action.id);
      return {...state, chosen: newChosen};
    }
    case REMOVE_BUN: {
      const newChosen = state.chosen.filter(item => item.type === 'bun');
      return {...state, chosen: newChosen};
    }
    default: {
      return state;
    }
  }
}