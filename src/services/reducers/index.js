import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorIngredientsReducer } from './constructor-ingredients';
import { modalReduecer } from './modal/modal';
import { currentIngredientReducer } from './modal/current-ingredient';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  modal: modalReduecer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer
});