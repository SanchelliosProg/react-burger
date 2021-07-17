import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorIngredientsReducer } from './constructor-ingredients';
import { modalReduecer } from './modal/modal';
import { currentIngredientReducer } from './modal/current-ingredient';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  modal: modalReduecer,
  currentIngredient: currentIngredientReducer
});