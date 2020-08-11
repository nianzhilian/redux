// const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD":
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false,
//         },
//       ];
//       break;
//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//       break;
//     default:
//       return state;
//       break;
//   }
// };

function addTodo(state,action){
  return [...state,{
    id:action.id,
    text:action.text,
    completed:false
  }]
}

function createReducer(initState,handle){
  return function reducer(state = initState,action){
    if(handle.hasOwnProperty(action.type)){
      return handle[action.type](state,action)
    }else{
      return state
    }
  }
}

const todos = createReducer([],{
  'ADD':addTodo
})

export default todos
