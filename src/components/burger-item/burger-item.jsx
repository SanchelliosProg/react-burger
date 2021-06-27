import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-item.module.css";
import PropTypes from 'prop-types';

const BurgerItem = (props) => {
  const counter = props.chosen.filter(choice => (choice.name === props.item.name)).length;
  return (
    <div className={`${style.container} ${props.rightPadding}`}>
      {counter > 0 ? <Counter count={counter} size="default"/> : undefined}
      <img src={props.item.image} alt="Кусок бургера" className="ml-4 mr-4 mb-1"/>
      <div className={`${style.price} mb-1`}>
        <span className={`text text_type_digits-default pr-1`}>{props.item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={`${style.name} text text_type_main-default`}>{props.item.name}</span>
    </div>
  );
};

BurgerItem.propTypes = {
  chosen: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object,
  rightPadding: PropTypes.string,
}

export default BurgerItem;
