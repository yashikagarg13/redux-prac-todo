import {connect} from "react-redux";
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


const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo(id) {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);

export default VisibleTodoList;