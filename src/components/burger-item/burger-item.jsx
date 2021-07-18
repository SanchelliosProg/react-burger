import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-item.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { OPEN_INGREDIENT_DETAILS } from "../../services/actions/modal/modal";
import { SELECT_ITEM } from "../../services/actions/modal/current-ingredient";
import { useSelector } from "react-redux";


const BurgerItem = (props) => {
  const {chosen} = useSelector(store => ({
    chosen: store.constructorIngredients.chosen
  })); 

  const dispatch = useDispatch();
  const id = props.item._id;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {id}
  });

  const counter = chosen.filter(
    (choice) => choice.name === props.item.name
  ).length;

  const openModalWithCurrentItem = () => {
    dispatch({
      type: OPEN_INGREDIENT_DETAILS
    });
    dispatch({
      type: SELECT_ITEM,
      payload: props.item
    });
  }

  return (
    <>
      <div
        draggable
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
  item: PropTypes.object,
  rightPadding: PropTypes.string,
};

export default BurgerItem;
