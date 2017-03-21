import React, {PropTypes} from "react";
import ToDo from "./todo";

const ToDoList = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map(todo =>
       <ToDo
         key={todo.id}
         {...todo}
         toggleTodo={toggleTodo} />
      )}
    </ul>
  );
}

ToDoList.PropTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default ToDoList;