import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise";
import createLogger from "redux-logger";
import throttle from "lodash/throttle";
import todoApp from './reducers';


/*
// Middlewares here are functions returning a function;
const logger = (store) => (next) => {
  if (!console.group) {
    return next;
  }

  return (action) => {
    console.log(action)
    console.group(action.type);
    console.log("%c Prev state: ", "color: gray", store.getState());
    console.log("%c Action: ", "color: blue",  action);
    const returnValue = next(action);
    console.log("%c Next state: ",  "color: pink", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}

const promise = (store) => (next) => (action) => {
  if (typeof action.then === "function") {
    return action.then(next);
  }
  return next(action);
}

const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares.reverse().reduce((dispatch, middleware) => {
    dispatch = middleware(store)(store.dispatch);
    return dispatch;
  }, store.dispatch);*/


const configureStore = () => {
  const middlewares = [promise]; // redux-promise similar to promise middle ware above
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger()); // createLogger() similar middleware like logger
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares) // Similar to wrapDispatchWithMiddlewares
  );
}

export default configureStore;