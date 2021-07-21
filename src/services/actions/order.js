export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS"; 
export const ORDER_ERROR = "ORDER_FAILED";
export const SAVE_ORDER = "SAVE_ORDER";

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