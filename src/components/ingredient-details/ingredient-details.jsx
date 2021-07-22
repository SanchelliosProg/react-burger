import style from "./ingredient-details.module.css";
import Nutrition from "../nutrition/nutrition";
import { useSelector } from "react-redux";

const IngredientDetails = (props) => {
  const {selectedItem} = useSelector(store => ({
    selectedItem: store.currentIngredient
  }));
  
  return (
    <>
      <div className={`${style.info} mb-4`}>
        <img
          src={selectedItem.image_large}
          alt="Кусок бургера"
          className="pl-1 pr-1"
        />
        <span className="text text_type_main-medium mb-8">
          {selectedItem.name}
        </span>
      </div>
      <div className={`${style.details} mb-15`}>
        <Nutrition
          text="Калории, ккал"
          number={selectedItem.calories}
          margins="mr-5"
        />
        <Nutrition
          text="Белки, г"
          number={selectedItem.proteins}
          margins="mr-5"
        />
        <Nutrition text="Жиры, г" number={selectedItem.fat} margins="mr-5" />
        <Nutrition text="Углеводы, г" number={selectedItem.carbohydrates} />
      </div>
    </>
  );
};

export default IngredientDetails;
