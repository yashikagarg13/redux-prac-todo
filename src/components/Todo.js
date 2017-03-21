import React, {PropTypes} from "react";

const ToDo = ({text, completed, toggleTodo}) => {
  const completedStyle = {
    textDecoration: "line-through",
  };
  return (
    <li onClick={toggleTodo}
      style={completed ? completedStyle : null }>
    {text}</li>
  );
}

ToDo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default ToDo;