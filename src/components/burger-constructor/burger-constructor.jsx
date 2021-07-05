import style from "./burger-constructor.module.css";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal  from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = (props) => {
  const [isOrderDetailsOpened, setOrderDetailsState] = useState(false);

  const toggleOrderDetails = () => {
    console.log("toggleOrderDetails is called", isOrderDetailsOpened);
    setOrderDetailsState(!isOrderDetailsOpened);
  };

  const bun = props.chosen.find((obj) => obj.type === "bun");
  const isBunSelected = () => {
    return bun !== undefined;
  };

  const getIngredients = () => props.chosen.filter((obj) => obj.type !== "bun");

  const getTotalPrice = () => {
    let totalPrice = 0;
    props.chosen.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  return (
    <>
      {isOrderDetailsOpened && (
        <Modal onClose={toggleOrderDetails}>
          <OrderDetails/>
        </Modal>
      )}
      <div className={style.container}>
        <div className="mt-25 mr-4 mb-10 ml-4">
          {isBunSelected() && (
            <BurgerConstructorItem
              type="top"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
              postfix=" (верх)"
            />
          )}
          <div className={style.items}>
            {getIngredients().map((item, index) => {
              return (
                <BurgerConstructorItem
                  key={`${item._id}${index}`}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              );
            })}
          </div>

          {isBunSelected() && (
            <BurgerConstructorItem
              type="bottom"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
              postfix=" (низ)"
            />
          )}
        </div>

        <div className={`${style.total} mt-10 mb-10 mr-4`}>
          <div className={`${style.price} mr-10`}>
            <span className="text text_type_digits-medium pr-1">
              {getTotalPrice()}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={toggleOrderDetails}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};

BurgerConstructor.propTypes = {
  chosen: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerConstructor;
