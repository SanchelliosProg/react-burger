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
import { addIngredient, CLEANUP_CHOSEN } from "../../services/actions/constructor-ingredients";
import { OPEN_ORDER_DETAILS } from "../../services/actions/modal/modal";
import { makeOrder } from "../../services/actions/order";
import { INGREDIENT } from "../../utils/constants";
import { CLEANUP_ORDER } from "../../services/actions/order";

const BurgerConstructor = () => {
  const { chosen, ingredients, isModalOpened, currentView, orderSuccess } =
    useSelector((store) => ({
      chosen: store.constructorIngredients.chosen,
      ingredients: store.ingredients.data,
      isModalOpened: store.modal.isOpened,
      currentView: store.modal.currentView,
      orderSuccess: !store.order.error,
    }));

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: INGREDIENT,
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
    if (orderSuccess) {
      dispatch({
        type: CLEANUP_CHOSEN
      });
    }
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
              postfix=" (????????)"
              item={bun}
            />
          )}
          <div className={style.items}>
            {getIngredients().map((item, index) => {
              return (
                <BurgerConstructorItem
                  key={item.listId}
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
              postfix=" (??????)"
              item={bun}
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
            ???????????????? ??????????
          </Button>
        </div>
      </div>
    </>
  );
};

export default BurgerConstructor;
