import style from "./modal-overlay.module.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  return (
    <div className={style.overlay} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ModalOverlay;
