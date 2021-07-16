import style from "./burger-constructor.module.css";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import Modal  from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector } from "react-redux";

const BurgerConstructor = () => {
  const [isOrderDetailsOpened, setOrderDetailsState] = useState(false);
  const {chosen} = useSelector(store => ({
    chosen: store.constructorIngredients.chosen
  }));

  console.log("CHOSEN***", chosen);

  const toggleOrderDetails = () => {
    console.log("toggleOrderDetails is called", isOrderDetailsOpened);
    setOrderDetailsState(!isOrderDetailsOpened);
  };

  const bun = chosen.find((obj) => obj.type === "bun");
  const isBunSelected = () => {
    return bun !== undefined;
  };

  const getIngredients = () => chosen.filter((obj) => obj.type !== "bun");

  const getTotalPrice = () => {
    let totalPrice = 0;
    chosen.forEach((item) => {
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
                  item={item}
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

export default BurgerConstructor;
