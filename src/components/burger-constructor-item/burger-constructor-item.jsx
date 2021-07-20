import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-item.module.css";
import TYPES from "../../utils/ingredientTypes";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeIngredient } from "../../services/reducers/constructor-ingredients";
import { useDrag, useDrop } from "react-dnd";
import { CHOSEN } from "../../utils/constants";
import { useRef } from "react";
import { replaceItems } from "../../services/reducers/constructor-ingredients";
import { useCallback } from "react";

const BurgerConstructorItem = (props) => {
  const isWithPostfix = props.type !== TYPES.bun && props.postfix !== undefined;
  const dispatch = useDispatch();

  const deleteElement = (event) => {
    event.preventDefault();
    dispatch(removeIngredient(props.item));
  };
  const ref = useRef(null);

  const handleDrop = useCallback(
    (hoverIndex, dragIndex) => {
      dispatch(replaceItems(hoverIndex, dragIndex));
    },
    [dispatch]
  );

  const [, drop] = useDrop({
    accept: CHOSEN,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.listId;
      const hoverIndex = props.item.listId;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      handleDrop(hoverIndex, dragIndex);

      item = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: CHOSEN,
    item: () => {
      return { listId: props.item.listId };
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      
      className={`${style.item} mt-4 mb-4 ${props.isLocked ? "mr-5" : "mr-2"}`}
    >
      <div className="drag clickable" draggable>
        {!props.isLocked && <DragIcon type="primary" />}
      </div>

      <div>
        <ConstructorElement
          className="info"
          type={props.type}
          isLocked={props.isLocked}
          text={`${props.text}${isWithPostfix ? props.postfix : ""}`}
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
};

export default BurgerConstructorItem;
