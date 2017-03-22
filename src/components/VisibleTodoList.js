import {connect} from "react-redux";
import {withRouter} from "react-router";
import {toggleTodo} from "../actions";
import ToDoList from "./TodoList";

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter(t => !t.completed);
    case "completed":
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
}


const mapStateToProps = (state, {params}) => ({
  todos: getVisibleTodos(state.todos, params.filter || "all"),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo(id) {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList));

export default VisibleTodoList;