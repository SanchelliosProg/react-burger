export const REMOVE_BUN = "REMOVE_BUN";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const REPLACE_INGREDIENT = "REPLACE_INGREDIENT";

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