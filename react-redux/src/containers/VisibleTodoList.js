import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
// import TodoList from '../components/TodoList'

const TodoList = ({ todos, texts}) => (
  <div>
    结果页面：
    list:
    <ul>
      {todos.map((todo,index) =>
      <li key={index}>
        {todo.text}
      </li>
      )}
    </ul>
    change:
    {texts}
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos,
  texts: state.texts
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: () => dispatch(toggleTodo)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
