import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import data from "../../utils/data.js";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: data};
  }
  
  render() {
    return (
      <>
        <AppHeader />
        <main>
          <section className={`${style.ingredients}`}>
            <BurgerIngredients data={data}/>
          </section>
          <section className={`${style.constructor} mr-10`}>
            <BurgerConstructor/>
          </section>
        </main>
      </>
    );
  }
  
}

export default App;
