import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import * as actions from "../actions";
import ToDoList from "./TodoList";
import {getVisibleTodos, getIsFetching, getErrorMessage} from "../reducers";
import FetchError from "./FetchError";

class VisibleTodoList extends Component {
  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter != prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData () {
    const {filter, fetchTodos} = this.props;
    fetchTodos(filter);
  }

  render () {
    const {toggleTodo, todos, errorMessage, isFetching} = this.props;
    if(isFetching && !todos.length)
      return <p>Loading...</p>;

    if(errorMessage && !todos.length)
      return (
        <FetchError
          errorMessage={errorMessage}
          onRetry={() => {
            this.fetchData()
          }}
        />
      );

    return (
      <ToDoList
        todos={todos}/>
    );
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || "all";
  return {
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  };
}

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

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions,
)(VisibleTodoList));

export default VisibleTodoList;