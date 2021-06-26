import BurgerItem from "../burger-item/burger-item";
import style from "./ingredients-section.module.css";
import chosen from "../../utils/chosen.js";
import PropTypes from 'prop-types';

const IngredientsSection = (props) => {
  return (
    <>
      <h2 id={props.id} className="text text_type_main-medium pb-6">
        {props.title}
      </h2>
      <div className={`${style.container} pb-10 pl-4 pt-6`}>
        {props.items.map((item, index) => {
          return (
            <BurgerItem
              chosen={chosen}
              item={item}
              key={item._id}
              rightPadding={(index + 1) % 2 !== 0 && "pr-6"}
            />
          );
        })}
      </div>
    </>
  );
};

IngredientsSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string
}

export default IngredientsSection;
