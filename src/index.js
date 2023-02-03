import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

// reducers

const reviewR = (state = { feeling: 0 }, action) => {
  if (action.type === "ADD_FEELING") {
    const { feeling } = action.payload;
    return { ...state, feeling: feeling };
  }
  return state;
};

// store

const storeInstance = createStore(
  combineReducers({
    reviewR,
  }),
  // reducer
  applyMiddleware(logger)
);

// provider

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
