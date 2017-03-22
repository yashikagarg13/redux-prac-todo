import { createStore } from 'redux';
import throttle from "lodash/throttle";
import todoApp from './reducers';
import {loadState, saveState} from "./localStorage";

const configureStore = () => {
  const initialState = loadState();
  const store = createStore(todoApp, initialState);

  store.subscribe(throttle(() => {
    saveState({todos: store.getState().todos});
  }, 1000));
  return store;
}

export default configureStore;