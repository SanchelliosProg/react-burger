import style from './nutrition.module.css';

const Nutrition = (props) => {
  return (
    <div className={`${style.container} ${props.margins}`}>
      <span className="text text_type_main-default text_color_inactive pb-1">{props.text}</span>
      <span className="text text_type_digits-default text_color_inactive">{props.number}</span>
    </div>
  );
}

export default Nutrition;