import {connect} from "react-redux";
import {withRouter} from "react-router";
import {toggleTodo} from "../actions";
import ToDoList from "./TodoList";
import {getVisibleTodos} from "../reducers";


const mapStateToProps = (state, {params}) => ({
  todos: getVisibleTodos(state, params.filter || "all"),
});

// As mapDispatchToProps takes a dispatch function in params
// and set prop 'onTodoClick' on ToDoList. This props is a
// function that calls store.dispatch with action object.
// The action object needs ID, so 'onTodoClick' is call with
// param 'id', so instead of using mapDispatchToProps we can
// shothand it with {onTodoClick: toggleTodo}
// {propToCreate: ActionHelper}

//const mapDispatchToProps = (dispatch) => ({
//  onTodoClick(id) {
//    dispatch(toggleTodo(id));
//  }
//});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  {onTodoClick: toggleTodo},
)(ToDoList));

export default VisibleTodoList;