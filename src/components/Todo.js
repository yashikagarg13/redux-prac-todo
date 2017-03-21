import React, {PropTypes} from "react";

const ToDo = ({id, text, completed, toggleTodo}) => {
  const completedStyle = {
    textDecoration: "line-through",
  };
  return (
    <li onClick={toggleTodo.bind(null, id)}
      style={completed ? completedStyle : null }>
    {text}</li>
  );
}

ToDo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default ToDo;