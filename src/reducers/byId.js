const byId = (state = {}, action) => {
  switch(action.type) {
    case "RECEIVE_TODOS":
      return action.response.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
      }, {});
    default:
      return state;
  }
}

export default byId;

export const getTodo = (state, id) => state[id];
