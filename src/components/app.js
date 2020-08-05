import React from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from '../contains/VisibleTodoList'
import Footer from './Footer'
const App = ()=>{
    const style1={
        padding:'0 10px'
    }
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
}
export default App