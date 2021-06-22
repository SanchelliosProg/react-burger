import React from "react";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsSection from "../ingredients-section/IngredientsSection";

const BUNS = "bun";
const SAUCE = "sauce";
const MAIN = "main"; //Начинки

class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: BUNS };
  }

  setCurrentTab = (tab) => {
    this.setState({ currentTab: tab });
  };

  getBunsFormData = () => {
    return this.props.data.filter((item) => item.type === BUNS);
  };

  getSaucesFromData = () => {
    return this.props.data.filter((item) => item.type === SAUCE);
  };

  getMainFromData = () => {
    return this.props.data.filter((item) => item.type === MAIN);
  };

  render() {
    return (
      <>
        <h1 className="text text_type_main-large  pt-10 pb-5">
          Соберите бургер
        </h1>
        <div className={`${style.tabs} pb-10`}>
          <Tab
            value={BUNS}
            active={this.state.currentTab === BUNS}
            onClick={this.setCurrentTab}
          >
            Булки
          </Tab>

          <Tab
            value={SAUCE}
            active={this.state.currentTab === SAUCE}
            onClick={this.setCurrentTab}
          >
            Соусы
          </Tab>

          <Tab
            value={MAIN}
            active={this.state.currentTab === MAIN}
            onClick={this.setCurrentTab}
          >
            Начинки
          </Tab>
        </div>
        <div className={style.items}>
          <IngredientsSection items={this.getBunsFormData()} id={BUNS} />
          <IngredientsSection items={this.getSaucesFromData()} id={SAUCE} />
          <IngredientsSection items={this.getMainFromData()} id={MAIN} />
        </div>
      </>
    );
  }
}

export default BurgerIngredients;
