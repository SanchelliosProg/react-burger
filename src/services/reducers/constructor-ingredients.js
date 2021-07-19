import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REMOVE_BUN,
  REPLACE_INGREDIENT
} from "../actions/constructor-ingredients";
import { nanoid } from "nanoid";

const initialState = {
  chosen: [],
};

export const addIngredient = (ingredient) => {
  return function (dispatch) {
    if (ingredient.type === "bun") {
      dispatch({
        type: REMOVE_BUN
      })

      for (let i = 0; i < 2; i++) {
        dispatch({
          type: ADD_INGREDIENT,
          payload: ingredient,
        });
      }
    } else {
      dispatch({
        type: ADD_INGREDIENT,
        payload: ingredient,
      });
    }
  };
};

export const removeIngredient = (ingredient) => {
  return function (dispatch) {
    dispatch({
      type: REMOVE_INGREDIENT,
      id: ingredient.listId,
    });
  };
};

export const replaceItems = (hoveredListId, insertingListId) => {
  return function (dispatch) {
    dispatch({
      type: REPLACE_INGREDIENT,
      payload: {
        hoveredListId: hoveredListId,
        insertingListId: insertingListId
      }
    })
  }
}

export const constructorIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      let newIngredient = Object.assign({}, action.payload);
      newIngredient.listId = nanoid();
      const updated = [...state.chosen, newIngredient];
      return {
        ...state,
        chosen: updated,
      };
    }
    case REMOVE_INGREDIENT: {
      const newChosen = state.chosen.filter(
        (item) => item.listId !== action.id
      );
      return { ...state, chosen: newChosen };
    }
    case REMOVE_BUN: {
      const newChosen = state.chosen.filter(
        (item) => item.type !== 'bun'
      );
      return { ...state, chosen: newChosen };
    }
    case REPLACE_INGREDIENT: {
      let updatedItems = Object.assign([], state.chosen);
      const insertingIndex = updatedItems.findIndex(e => e.listId === action.payload.insertingListId);
      const hoveredIndex = updatedItems.findIndex(e => e.listId === action.payload.hoveredListId);
      const insertingItem = updatedItems[insertingIndex];
      updatedItems.splice(insertingIndex, 1);
      updatedItems.splice(hoveredIndex, 0, insertingItem);
      return {...state, chosen: updatedItems};
    }
    default: {
      return state;
    }
  }
};
