import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-item.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const BurgerItem = (props) => {
  const itemId = props.item._id;
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {itemId}
  });

  const counter = props.chosen.filter(
    (choice) => choice.name === props.item.name
  ).length;

  const openModalWithCurrentItem = () => {
    props.toggleModalState();
    props.selectItem(props.item);
  }

  return (
    <>
      <div
        ref={dragRef}
        className={`${style.container} ${props.rightPadding} clickable`}
        onClick={openModalWithCurrentItem}
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
  chosen: PropTypes.arrayOf(PropTypes.object).isRequired,
  item: PropTypes.object,
  rightPadding: PropTypes.string,
  selectItem: PropTypes.func.isRequired, 
  toggleModalState: PropTypes.func.isRequired,
};

export default BurgerItem;
