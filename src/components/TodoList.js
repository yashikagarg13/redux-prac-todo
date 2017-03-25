import React, {PropTypes} from "react";
import ToDo from "./todo";

const ToDoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {todos.map(todo =>
       <ToDo
         key={todo.id}
         {...todo}
         onTodoClick={() => {}} />
      )}
    </ul>
  );
}

ToDoList.PropTypes = {
  todos: PropTypes.array.isRequired,
};

export default ToDoList;