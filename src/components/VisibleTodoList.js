import connect from "react-redux";
import setVisibilityFilter from "../actions/setVisibilityFilter";
import ToDoList from "./TodoList";

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    }
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);

export default VisibleTodoList;