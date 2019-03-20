import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todos}) => (
  <ul>
    {todos.map((todo,index) =>
    <li key={index}>
      {todo.text}
    </li>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList
