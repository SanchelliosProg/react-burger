import BurgerItem from "../burger-item/BurgerItem";
import style from "./ingredients-section.module.css";

const IngredientsSection = (props) => {
  return (
    <>
      <h2 id={props.id} className="text text_type_main-medium pb-6">
        Булки
      </h2>
      <div className={`${style.container} pb-10 pl-4 pt-6`}>
        {props.items.map((item, index) => {
          return (
            <BurgerItem
              item={item}
              key={item._id}
              rightPadding={(index + 1) % 2 === 0 ? undefined : "pr-6"}
            />
          );
        })}
      </div>
    </>
  );
};

export default IngredientsSection;
