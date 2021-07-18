import BurgerItem from "../burger-item/burger-item";
import style from "./ingredients-section.module.css";
import PropTypes from 'prop-types';
import { forwardRef } from "react";

const IngredientsSection = forwardRef((props, ref) => {
  
  return (
    <>
      <h2 ref={ref} id={props.id} className="text text_type_main-medium pb-6">
        {props.title}
      </h2>
      <div className={`${style.container} pb-10 pl-4 pt-6`}>
        {props.items.map((item, index) => {
          
          return (
            <BurgerItem
              item={item}
              key={item._id}
              rightPadding={(index + 1) % 2 !== 0 ? "pr-6" : ""}
            />
          );
        })}
      </div>
    </>
  );
});

IngredientsSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string, 
}

export default IngredientsSection;
