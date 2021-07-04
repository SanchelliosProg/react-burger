import style from "./ingredient-details.module.css";
import Nutrition from "../nutrition/nutrition";
import PropTypes from "prop-types";

const IngredientDetails = (props) => {
  return (
    <>
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
        <Nutrition
          text="Калории, ккал"
          number={props.item.calories}
          margins="mr-5"
        />
        <Nutrition
          text="Белки, г"
          number={props.item.proteins}
          margins="mr-5"
        />
        <Nutrition text="Жиры, г" number={props.item.fat} margins="mr-5" />
        <Nutrition text="Углеводы, г" number={props.item.carbohydrates} />
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientDetails;
