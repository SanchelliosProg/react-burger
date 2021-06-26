import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-item.module.css";
import TYPES from '../../utils/ingredientTypes';

const BurgerConstructorItem = (props) => {
  console.log(props.postfix)
  const isWithPostfix = (props.type !== TYPES.bun) && (props.postfix !== undefined);
  return (
    <div className={`${style.item} mt-4 mb-4 ${props.isLocked ? "mr-5" : "mr-2"}`}>
      <div className="drag">
        {!props.isLocked && <DragIcon type="primary" />}
      </div>

      <div className="info">
        <ConstructorElement
          type={props.type}
          isLocked={props.isLocked}
          text={`${props.text}${(isWithPostfix) ? props.postfix : ''}`}
          price={props.price}
          thumbnail={props.thumbnail}
        />
      </div>
    </div>
  );
};

export default BurgerConstructorItem;
