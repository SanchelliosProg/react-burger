import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-item.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import IngredientModal from "../modal/ingredient-modal";

const BurgerItem = (props) => {
  const counter = props.chosen.filter(
    (choice) => choice.name === props.item.name
  ).length;
  const [isModalOpened, setModalState] = useState(false);
  const toggleModalState = () => {
    console.log("toggleModalState in BurgerItem is called");
    setModalState(!isModalOpened);
  };

  return (
    <>
      {isModalOpened && <IngredientModal onClose={toggleModalState} item={props.item}/>}
      <div
        className={`${style.container} ${props.rightPadding}`}
        onClick={toggleModalState}
      >
        {counter > 0 ? <Counter count={counter} size="default" /> : undefined}
        <img
          src={props.item.image}
          alt="Кусок бургера"
          className="ml-4 mr-4 mb-1"
        />
        <div className={`${style.price} mb-1`}>
          <span className={`text text_type_digits-default pr-1`}>
            {props.item.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <span className={`${style.name} text text_type_main-default`}>
          {props.item.name}
        </span>
      </div>
    </>
  );
};

BurgerItem.propTypes = {
  chosen: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object,
  rightPadding: PropTypes.string,
};

export default BurgerItem;
