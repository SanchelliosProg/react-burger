import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredient-modal.module.css";
import Nutrition from "../nutrition/nutrition";

const modalRoot = document.getElementById("react-modals");

const IngredientModal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={style.overlay} onClick={props.onClose}>
        <div
          className={`${style.modalcontent}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${style.header} ml-10 mt-10 mr-10`}>
            <span className="text text_type_main-large">
              Детали ингредиента
            </span>
            <div className={`${style.clickable}`}>
              <CloseIcon type="primary" onClick={props.onClose} />
            </div>
          </div>
          <div className={`${style.info} mb-4`}>
            <img
              src={props.item.image_large}
              alt="Кусок бургера"
              className="pl-1 pr-1"
            />
            <span className="text text_type_main-medium mb-8">
              {props.item.name}
            </span>
          </div>
          <div className={`${style.details} mb-15`}>
            <Nutrition text="Калории, ккал" number={props.item.calories} />
            <Nutrition text="Белки, г" number={props.item.proteins} />
            <Nutrition text="Жиры, г" number={props.item.fat} />
            <Nutrition text="Углеводы, г" number={props.item.carbohydrates} />
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default IngredientModal;
