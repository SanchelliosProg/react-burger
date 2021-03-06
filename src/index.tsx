import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app.jsx";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./services/reducers";
import { Provider } from "react-redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
