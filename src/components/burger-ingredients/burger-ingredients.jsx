import React from "react";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsSection from "../ingredients-section/ingredients-section";
import PropTypes from 'prop-types';
import TYPES from '../../utils/ingredientTypes.js';

// const BUNS = "bun";
// const SAUCE = "sauce";
// const MAIN = "main"; //Начинки

class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: TYPES.bun };
  }

  setCurrentTab = (tab) => {
    this.setState({ currentTab: tab });
  };

  getBunsFormData = () => {
    return this.props.data.filter((item) => item.type === TYPES.bun);
  };

  getSaucesFromData = () => {
    return this.props.data.filter((item) => item.type === TYPES.sauce);
  };

  getMainFromData = () => {
    return this.props.data.filter((item) => item.type === TYPES.main);
  };

  render() {
    console.log(TYPES);
    return (
      <>
        <h1 className={`text text_type_main-large  pt-10 pb-5`}>
          Соберите бургер
        </h1>
        <div className={`${style.tabs} pb-10`}>
          <Tab
            value={TYPES.bun}
            active={this.state.currentTab === TYPES.bun}
            onClick={this.setCurrentTab}
          >
            Булки
          </Tab>

          <Tab
            value={TYPES.sauce}
            active={this.state.currentTab === TYPES.sauce}
            onClick={this.setCurrentTab}
          >
            Соусы
          </Tab>

          <Tab
            value={TYPES.main}
            active={this.state.currentTab === TYPES.main}
            onClick={this.setCurrentTab}
          >
            Начинки
          </Tab>
        </div>
        <div className={style.items}>
          <IngredientsSection items={this.getBunsFormData()} id={TYPES.bun} title="Булки"/>
          <IngredientsSection items={this.getSaucesFromData()} id={TYPES.sauce} title="Соусы"/>
          <IngredientsSection items={this.getMainFromData()} id={TYPES.main} title="Начинка"/>
        </div>
      </>
    );
  }
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredients;
