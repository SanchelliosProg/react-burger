import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={style.overlay} onClick={props.onClose} />
      <div className={`${style.modalcontent}`}>
        <div className={`${style.header}`}>
          <h2>Детали ингредиента</h2>
          <div className={`${style.clickable}`}>
            <CloseIcon type="primary" onClick={props.onClose} />
          </div>
        </div>
        <div className={`${style.info}`}></div>
        <div className={`${style.details}`}></div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
