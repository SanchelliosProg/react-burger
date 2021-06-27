import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import data from "../../utils/data.js";
import chosen from "../../utils/chosen.js";

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <section className={`${style.ingredients}`}>
          <BurgerIngredients data={data} />
        </section>
        <section className={`pr-10`}>
          <BurgerConstructor chosen={chosen} />
        </section>
      </main>
    </>
  );
};

export default App;
