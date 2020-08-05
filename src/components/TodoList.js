import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,toggleTodo})=>{
  return (
    <ul>
      {todos.map(todo=>
        <Todo change={()=>toggleTodo(todo.id)} key={todo.id} {...todo} />
        )}
    </ul>
  )
}
export default TodoList
