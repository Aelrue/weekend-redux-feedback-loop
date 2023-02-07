import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

// reducers that will return new state following the action

const feelingR = (state = "", action) => {
  if (action.type === "ADD_FEELING") {
    const { feeling } = action.payload;
    return feeling;
  }
  return state;
};

const understandingR = (state = "", action) => {
  if (action.type === "ADD_UNDERSTANDING") {
    const { understanding } = action.payload;
    return understanding;
  }
  return state;
};

const supportR = (state = "", action) => {
  if (action.type === "ADD_SUPPORT") {
    const { support } = action.payload;
    return support;
  }
  return state;
};

const commentR = (state = { comment: "" }, action) => {
  if (action.type === "ADD_COMMENT") {
    const { comment } = action.payload;
    return comment;
  }
  return state;
};

// store which holds the state

const storeInstance = createStore(
  combineReducers({
    feelingR,
    understandingR,
    supportR,
    commentR,
  }),

  applyMiddleware(logger)
);

// provider that allows us to pass the store as an attribute

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
