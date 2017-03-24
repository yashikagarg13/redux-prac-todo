const byId = (state = {}, action) => {
  switch(action.type) {
    case "FETCH_TODOS_SUCCESS":
      return action.response.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
      }, {...state});
    default:
      return state;
  }
}

export default byId;

export const getTodo = (state, id) => state[id];
