import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

// This component is neither presentational nor container.
// This is kept along with behaviour because we can not break down further.
let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
         return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
      }}>
        <input type="text" ref={node => {input = node;}} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);