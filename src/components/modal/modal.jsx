import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { INGREDIENTS_MODAL, ORDER_MODAL } from "../../utils/constants";
import style from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");


const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={props.onClose}>
        <div
          className={`${style.modalcontent}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${style.header} ml-10 pt-10 mr-10`}>
            <span className="text text_type_main-large">{props.title}</span>
            <div className="clickable">
              <CloseIcon type="primary" onClick={props.onClose} />
            </div>
          </div>
          {props.view === INGREDIENTS_MODAL && (
            <IngredientDetails item={props.item}/>
          )}
          {props.view === ORDER_MODAL && <OrderDetails/>}
        </div>
      </ModalOverlay>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Modal;
