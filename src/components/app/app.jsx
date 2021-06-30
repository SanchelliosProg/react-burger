import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import chosen from "../../utils/chosen.js";
import { useState } from "react";
import { useEffect } from "react";

const url = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((resp) => resp.json())
      .then((body) => {
        console.log('fetched data', body.data)
        setIngredients(body.data);
        console.log('new state', ingredients);
      }).catch(e => {
        console.log('Error while fetching data: ', e);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <main>
        <section className={`${style.ingredients}`}>
          <BurgerIngredients data={ingredients} />
        </section>
        <section className={`pr-10`}>
          <BurgerConstructor chosen={chosen} />
        </section>
      </main>
    </>
  );
};

export default App;
