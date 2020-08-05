const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
      break;
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
      );
      break;
    default:
      return state;
      break;
  }
};
export default todos
