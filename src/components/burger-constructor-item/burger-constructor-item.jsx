import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-item.module.css";

const BurgerConstructorItem = (props) => {
  console.log(props.id);
  return (
    <div key={props.id} className={`${style.item} mt-4 mb-4`}>
      <div className="drag">
        {!props.isLocked && <DragIcon type="primary" />}
      </div>

      <div className="info">
        <ConstructorElement
          
          type={props.type}
          isLocked={props.isLocked}
          text={props.text}
          price={props.price}
          thumbnail={props.thumbnail}
        />
      </div>
    </div>
  );
};

export default BurgerConstructorItem;
