export const SAVE_INGREDIENTS = "SAVE_INGREDIENTS";
export const INGREDIENTS_REQUEST = "LOAD_INGREDIENTS";
export const INGREDIENTS_ERROR = "ERROR_ON_LOAD";
export const INGREDIENTS_SUCCESS = "INGREDIENTS_LOADED";

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