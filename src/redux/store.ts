import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import reducer from "./reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;
