import { useState } from "react";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsSection from "../ingredients-section/ingredients-section";
import type from "../../utils/ingredientTypes.js";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector } from "react-redux";

const BurgerIngredients = () => {
  const { ingredients, isModalOpened, currentView } = useSelector((store) => ({
    ingredients: store.ingredients.data,
    isModalOpened: store.modal.isOpened,
    currentView: store.modal.currentView,
  }));

  const [currentTab, setTab] = useState(type.bun);

  const setCurrentTab = (tab) => {
    setTab(tab);
  };

  const getBunsFormData = () => {
    return ingredients.filter((item) => item.type === type.bun);
  };

  const getSaucesFromData = () => {
    return ingredients.filter((item) => item.type === type.sauce);
  };

  const getMainFromData = () => {
    return ingredients.filter((item) => item.type === type.main);
  };

  return (
    <>
      {(isModalOpened && currentView === 'IngredientDetails') && (
        <Modal title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}
      <h1 className={`text text_type_main-large  pt-10 pb-5`}>
        Соберите бургер
      </h1>
      <div className={`${style.tabs} pb-10`}>
        <Tab
          value={type.bun}
          active={currentTab === type.bun}
          onClick={setCurrentTab}
        >
          Булки
        </Tab>

        <Tab
          value={type.sauce}
          active={currentTab === type.sauce}
          onClick={setCurrentTab}
        >
          Соусы
        </Tab>

        <Tab
          value={type.main}
          active={currentTab === type.main}
          onClick={setCurrentTab}
        >
          Начинки
        </Tab>
      </div>
      <div className={style.items}>
        <IngredientsSection
          items={getBunsFormData()}
          id={type.bun}
          title="Булки"
        />
        <IngredientsSection
          items={getSaucesFromData()}
          id={type.sauce}
          title="Соусы"
        />
        <IngredientsSection
          items={getMainFromData()}
          id={type.main}
          title="Начинка"
        />
      </div>
    </>
  );
};

BurgerIngredients.propTypes = {};

export default BurgerIngredients;
