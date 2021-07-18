import style from "./order-details.module.css";
import icon from "../../images/accepted.svg";
import { useSelector } from "react-redux";

const OrderDetails = (props) => {
  const {orderData} = useSelector(store => ({
    orderData: store.order.data
  }));

  console.log("SHIIIT", orderData);

  return (
    <>
      <span className={`${style.order} text text_type_digits-large mb-8`}>
        {orderData.order.number}
      </span>
      <span className="text text_type_main-medium mb-15">
        идентификатор заказа
      </span>
      <img src={icon} alt="всё готовится" className={`mb-15`} />
      <span className="text text_type_main-default mb-2">
        Ваш заказ '{orderData.name}' начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </span>
    </>
  );
};

export default OrderDetails;
