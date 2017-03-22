const todo = (state = {}, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    case "TOGGLE_TODO":
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed
        }
    default:
      return state;
  }
}
const todos = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export const getVisibleTodos = (state, filter) => {
  switch(filter) {
    case "all":
      return state;
    case "active":
      return state.filter(t => !t.completed);
    case "completed":
      return state.filter(t => t.completed);
    default:
      return todos;
  }
}

export default todos;