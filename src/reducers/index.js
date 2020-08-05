import React from 'react'
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
// const todoApp = (state={},action)=>({
//     todos:todos(state.todos,action),
//     visibilityFilter:visibilityFilter(state.abc,action)
// })
export default combineReducers({todos,visibilityFilter})