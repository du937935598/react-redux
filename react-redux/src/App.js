import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Change from './containers/Change'

const App = () => (
  <div>
    <AddTodo />
    <hr/>
    <Change />
    <hr/>
    <VisibleTodoList /> 
  </div>
)

export default App
