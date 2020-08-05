import React from 'react'
import {addTodo} from '../actions/index'
import { connect } from 'react-redux';


let AddTodo = ({dispatch}) => {
  let input
  return (
    <form onSubmit={e=>{
      e.preventDefault()
      if(!input.value.trim()){
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <input ref={node=>{input = node}} />
      <button type="submit">
          Add Todo
        </button>
    </form>
  );
};
AddTodo = connect()(AddTodo)
export default AddTodo
