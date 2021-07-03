import ReactDOM from "react-dom";
import {
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./order-details.module.css";
import icon from "../../images/accepted.svg";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const OrderDetails = (props) => {
  return ReactDOM.createPortal(
    <div className={style.overlay} onClick={props.onClose}>
      <div className={style.modalcontent} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <div className={`${style.clickable} mr-10`}>
            <CloseIcon type="primary" onClick={props.onClose} />
          </div>
        </div>
        <span className={`${style.order} text text_type_digits-large mb-8`}>
          034536
        </span>
        <span className="text text_type_main-medium mb-15">
          идентификатор заказа
        </span>
        <img src={icon} alt="всё готовится" className={`mb-15`}/>
        <span className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </span>
        <span className="text text_type_main-default text_color_inactive mb-30">
          Дождитесь готовности на орбитальной станции
        </span>
      </div>
    </div>,
    modalRoot
  );
};

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default OrderDetails;
