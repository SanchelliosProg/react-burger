import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredient-details.module.css";
import Nutrition from "../nutrition/nutrition";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const IngredientDetails = (props) => {
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
            <Nutrition text="Калории, ккал" number={props.item.calories} margins="mr-5"/>
            <Nutrition text="Белки, г" number={props.item.proteins} margins="mr-5"/>
            <Nutrition text="Жиры, г" number={props.item.fat} margins="mr-5"/>
            <Nutrition text="Углеводы, г" number={props.item.carbohydrates} />
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

IngredientDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.object
}

export default IngredientDetails;
