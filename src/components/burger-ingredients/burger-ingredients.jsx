import React from "react";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsSection from "../ingredients-section/ingredients-section";
import PropTypes from 'prop-types';
import type from '../../utils/ingredientTypes.js';

const BurgerIngredients = (props) => {
  const [currentTab, setTab] = React.useState(type.bun)

  const setCurrentTab = (tab) => {
    setTab(tab);
  };

  const getBunsFormData = () => {
    return props.data.filter((item) => item.type === type.bun);
  };

  const getSaucesFromData = () => {
    return props.data.filter((item) => item.type === type.sauce);
  };

  const getMainFromData = () => {
    return props.data.filter((item) => item.type === type.main);
  };


    return (
      <>
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
          <IngredientsSection items={getBunsFormData()} id={type.bun} title="Булки"/>
          <IngredientsSection items={getSaucesFromData()} id={type.sauce} title="Соусы"/>
          <IngredientsSection items={getMainFromData()} id={type.main} title="Начинка"/>
        </div>
      </>
    );
  
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredients;
