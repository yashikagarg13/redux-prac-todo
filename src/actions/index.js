import {normalize} from "normalizr";
import {v4} from "node-uuid";
import * as api from "../api";
import * as schema from "./schema";
import {getIsFetching} from "../reducers";

export const fetchTodos = (filter) => (dispatch, getState) => {
  if(getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: "FETCH_TODOS_REQUEST",
    filter
  });

  api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: "FETCH_TODOS_SUCCESS",
        response: normalize(response, schema.arrayOfTodos),
        filter
      });
    }, // DO NOT USE CATCH AS IT WILL CAPTURE INTERNAL ERROR MESSAGES AS WELL
    error => {
      dispatch({
        type: "FETCH_TODOS_FAILURE",
        filter,
        message: error.message || "Something went wrong",
      });
    }
  );
};

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then((response) => {
    dispatch({
      type: "ADD_TODO_SUCCESS",
      response: normalize(response, schema.todo),
    });
  });


export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: "TOGGLE_TODO_SUCCESS",
      response: response,
    });
  });