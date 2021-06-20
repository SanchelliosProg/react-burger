import React from "react";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItem from "../burger-item/BurgerItem";

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
        <div>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <div className={`${style.container} pb-10 pl-4 pt-6`}>
            {this.getBunsFormData().map((item, index) => {
              return (
                <BurgerItem
                  item={item}
                  key={item._id}
                  rightPadding={(index + 1) % 2 === 0 ? undefined : "pr-6"}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text text_type_main-medium pb-6">Соусы</h2>
          <div className={`${style.container} pb-10`}>
            {this.getSaucesFromData().map((item, index) => {
              return (
                <BurgerItem
                  item={item}
                  key={item._id}
                  rightPadding={(index + 1) % 2 === 0 ? undefined : "pr-6"}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text text_type_main-medium pb-6">Начинки</h2>
          <div className={`${style.container} pb-10`}>
            {this.getMainFromData().map((item, index) => {
              return (
                <BurgerItem
                  item={item}
                  key={item._id}
                  rightPadding={(index + 1) % 2 === 0 ? undefined : "pr-6"}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default BurgerIngredients;
