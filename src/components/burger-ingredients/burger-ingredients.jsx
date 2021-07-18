import { useState } from "react";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsSection from "../ingredients-section/ingredients-section";
import type from "../../utils/ingredientTypes.js";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector } from "react-redux";
import { useRef } from "react";

const BurgerIngredients = () => {

  const [currentTab, setTab] = useState(type.bun);

  const scrollContainerRef = useRef(null);
  const bunsRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  
  const { ingredients, isModalOpened, currentView } = useSelector((store) => ({
    ingredients: store.ingredients.data,
    isModalOpened: store.modal.isOpened,
    currentView: store.modal.currentView,
  }));

  const handleScroll = () => {
    const scrollContainerPosition = scrollContainerRef.current.getBoundingClientRect()
      .top;
    const bunsPosition = bunsRef.current.getBoundingClientRect().top;
    const saucePosition = sauceRef.current.getBoundingClientRect().top;
    const mainPosition = mainRef.current.getBoundingClientRect().top;
    
    const mapOfValues = {
      bun: Math.abs(scrollContainerPosition - bunsPosition),
      sauce: Math.abs(scrollContainerPosition - saucePosition),
      main: Math.abs(scrollContainerPosition - mainPosition)
    };

    const key = (Object.entries(mapOfValues).sort(([ ,v1], [ ,v2]) => v1 - v2))[0][0];
    setTab(key); 
  
  }

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
        >
          Булки
        </Tab>

        <Tab
          value={type.sauce}
          active={currentTab === type.sauce}
        >
          Соусы
        </Tab>

        <Tab
          value={type.main}
          active={currentTab === type.main}
        >
          Начинки
        </Tab>
      </div>
      <div className={style.items} ref={scrollContainerRef} onScroll={handleScroll}>
        <IngredientsSection
          items={getBunsFormData()}
          id={type.bun}
          title="Булки"
          ref={bunsRef}
        />
        <IngredientsSection
          items={getSaucesFromData()}
          id={type.sauce}
          title="Соусы"
          ref={sauceRef}
        />
        <IngredientsSection
          items={getMainFromData()}
          id={type.main}
          title="Начинка"
          ref={mainRef}
        />
      </div>
    </>
  );
};

BurgerIngredients.propTypes = {};

export default BurgerIngredients;
