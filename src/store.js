import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducers from './redusers'

export default () => {
  const store = createStore(rootReducers, applyMiddleware(logger));
  return store;
};
