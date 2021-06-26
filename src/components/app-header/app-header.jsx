import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css";
import React from "react";

const textStyle = "text text_type_main-default pl-2";
const inactiveTextStyle = `${textStyle} text_color_inactive`;
const itemStyle = `${style.item} p-5 m-2`;

const CONSTRUCTOR_SELECTED = "constructor";
const ORDERS_SELECTED = "orders";
const PROFILE_SELECTED = "profile";

const AppHeader = () => {
  const [selectedPage, setPage] = React.useState(CONSTRUCTOR_SELECTED);

  const selectConstructor = () => {
    setPage(CONSTRUCTOR_SELECTED);
  };

  const selectOrders = () => {
    setPage(ORDERS_SELECTED);
  };

  const selectProfile = () => {
    setPage(PROFILE_SELECTED);
  };

  return (
    <header className={`pt-4 pb-4`}>
      <div className={style.menus}>
        <div className={style.group}>
          <div className={itemStyle} onClick={selectConstructor}>
            <BurgerIcon
              type={
                selectedPage === CONSTRUCTOR_SELECTED
                  ? "primary"
                  : "secondary"
              }
            />
            <span
              className={
                selectedPage === CONSTRUCTOR_SELECTED
                  ? textStyle
                  : inactiveTextStyle
              }
            >
              Конструктор
            </span>
          </div>
          <div className={itemStyle} onClick={selectOrders}>
            <ListIcon
              type={
                selectedPage === ORDERS_SELECTED
                  ? "primary"
                  : "secondary"
              }
            />
            <span
              className={
                selectedPage === ORDERS_SELECTED
                  ? textStyle
                  : inactiveTextStyle
              }
            >
              Лента заказов
            </span>
          </div>
        </div>
      </div>

      <Logo className={style.logo} />

      <div className={style.profile}>
        <div className={itemStyle} onClick={selectProfile}>
          <ProfileIcon
            type={
              selectedPage === PROFILE_SELECTED
                ? "primary"
                : "secondary"
            }
          />
          <span
            className={
              selectedPage === PROFILE_SELECTED
                ? textStyle
                : inactiveTextStyle
            }
          >
            Личный кабинет
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
