import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-item.module.css";
import TYPES from '../../utils/ingredientTypes';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeIngredient } from "../../services/reducers/constructor-ingredients";
import { REMOVE_INGREDIENT } from "../../services/actions/constructor-ingredients"; 

const BurgerConstructorItem = (props) => {
  const isWithPostfix = (props.type !== TYPES.bun) && (props.postfix !== undefined);
  const dispatch = useDispatch();

  const deleteElement = (event) => {
    event.preventDefault();
    console.log("DELETING ELEMENT", props.item)
    dispatch({
      type: REMOVE_INGREDIENT,
      id: props.item._id
    })
    //dispatch(removeIngredient(props.item));
  }

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
          handleClose={deleteElement}
        />
      </div>
    </div>
  );
};

BurgerConstructorItem.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  postfix: PropTypes.string,
  item: PropTypes.object,
}

export default BurgerConstructorItem;
