import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import chosen from "../../utils/chosen.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/reducers/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      <AppHeader />
      <main>
        <DndProvider backend={HTML5Backend}>
          <section className={`${style.ingredients}`}>
            <BurgerIngredients />
          </section>
          <section className={`pr-10`}>
            <BurgerConstructor chosen={chosen} />
          </section>
        </DndProvider>
      </main>
    </>
  );
};

export default App;
