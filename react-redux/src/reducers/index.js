import { combineReducers } from 'redux'
import todos from './todos'
import texts from './texts'

export default combineReducers({
  todos,
  texts
})
