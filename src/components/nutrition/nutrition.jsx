import style from './nutrition.module.css';

const Nutrition = (props) => {
  return (
    <div className={style.container}>
      <span className="text text_type_main-small">{props.text}</span>
      <span className="text text_type_digits-default">{props.number}</span>
    </div>
  );
}

export default Nutrition;