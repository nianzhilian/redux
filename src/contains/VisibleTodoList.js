import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo,VisibilityFilters} from '../actions/index'

const getVisibleTodos = (todos,filter)=>{
  switch (filter) {
    case 'SHOW_ALL':
      return todos
      break;
    case 'SHOW_COMPLETED':
      return todos.filter((todo)=>todo.completed)
      break;
    case 'SHOW_ACTIVE':
      return todos.filter(t=>!t.completed)
      break;
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)