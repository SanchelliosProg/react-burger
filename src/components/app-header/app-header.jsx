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

class AppHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {selectedPage: CONSTRUCTOR_SELECTED};
  }

  selectConstructor = () => {
    this.setState({selectedPage: CONSTRUCTOR_SELECTED});
  }

  selectOrders = () => {
    this.setState({selectedPage: ORDERS_SELECTED});
  }

  selectProfile = () => {
    this.setState({selectedPage: PROFILE_SELECTED});
  }

  render () {
    return (
      <header className={`pt-4 pb-4`}>
        <div className={style.menus}>
          <div className={style.group}>
            <div className={itemStyle} onClick={this.selectConstructor}>
              <BurgerIcon type={(this.state.selectedPage === CONSTRUCTOR_SELECTED ? "primary" : "secondary")} />
              <span className={(this.state.selectedPage === CONSTRUCTOR_SELECTED ? textStyle : inactiveTextStyle)}>Конструктор</span>
            </div>
            <div className={itemStyle} onClick={this.selectOrders}>
              <ListIcon type={(this.state.selectedPage === ORDERS_SELECTED ? "primary" : "secondary")} />
              <span className={(this.state.selectedPage === ORDERS_SELECTED ? textStyle : inactiveTextStyle)}>Лента заказов</span>
            </div>
          </div>
        </div>
  
        <Logo className={style.logo} />
  
        <div className={style.profile}>
          <div className={itemStyle} onClick={this.selectProfile}>
            <ProfileIcon type={(this.state.selectedPage === PROFILE_SELECTED ? "primary" : "secondary")} />
            <span className={(this.state.selectedPage === PROFILE_SELECTED ? textStyle : inactiveTextStyle)}>Личный кабинет</span>
          </div>
        </div>
      </header>
    );
  }
  
};

export default AppHeader;
