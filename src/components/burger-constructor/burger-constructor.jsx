import style from "./burger-constructor.module.css";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../services/reducers/constructor-ingredients";
import { OPEN_ORDER_DETAILS } from "../../services/actions/modal/modal";
import { makeOrder } from "../../services/reducers/order";

const BurgerConstructor = () => {
  const { chosen, ingredients, isModalOpened, currentView } =
    useSelector((store) => ({
      chosen: store.constructorIngredients.chosen,
      ingredients: store.ingredients.data,
      isModalOpened: store.modal.isOpened,
      currentView: store.modal.currentView,
      orderSuccess: !store.order.error,
    }));

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      const ingredient = ingredients.find((item) => item._id === itemId.id);
      dispatch(addIngredient(ingredient));
    },
  });

  const openOrderDetails = () => {
    dispatch(makeOrder(chosen));
    dispatch({
      type: OPEN_ORDER_DETAILS,
    });
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
      {isModalOpened && currentView === "OrderDetails" && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
      <div className={style.container} ref={drop}>
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
          <Button type="primary" size="large" onClick={openOrderDetails}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};

export default BurgerConstructor;
