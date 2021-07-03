import PropTypes from "prop-types";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

const modalRoot = document.getElementById("react-modals");

const INGREDIENTS = "ingredients";
const ORDER = "order";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <>
      {props.view === INGREDIENTS && (
        <IngredientDetails item={props.item} onClose={props.onClose} />
      )}
      {props.view === ORDER && <OrderDetails onClose={props.onClose} />}
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object,
  view: PropTypes.string.isRequired,
};

export default Modal;
