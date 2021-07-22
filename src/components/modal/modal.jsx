import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import style from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { SHUT_DOWN_MODAL } from "../../services/actions/modal/modal";
import { CLEANUP_ORDER } from "../../services/actions/order";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  const dispatch = useDispatch();

  const shutDownModal = () => {
    dispatch({
      type: SHUT_DOWN_MODAL
    });
    dispatch({
      type: CLEANUP_ORDER
    });
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={shutDownModal}>
        <div
          className={`${style.modalcontent}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${style.header} ml-10 pt-10 mr-10`}>
            <span className="text text_type_main-large">{props.title}</span>
            <div className="clickable">
              <CloseIcon type="primary" onClick={shutDownModal} />
            </div>
          </div>
          {props.children}
        </div>
      </ModalOverlay>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
}

export default Modal;
