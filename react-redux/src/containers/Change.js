// import React from 'react'
// import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'

// const Change = ({ toggleTodo}) => (
//     <div>
//         change页面:：
//         <button onClick={toggleTodo}>change页面</button>
//     </div>
//   )
  
//   const mapStateToProps = state => ({
//     texts: state.texts
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     toggleTodo: () => dispatch(toggleTodo)
//   })
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Change)

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const Change = ({ dispatch }) => {
  return (
    <div>
      Change页面
        <button type="button" onClick={e=>{
            dispatch(toggleTodo())
        }}>
        Change页面
        </button>
    </div>
  )
}

// const Change = ({ dispatch }) => (
//     <div>
//         Change页面
//         <button type="button" onClick={e=>{
//             dispatch(toggleTodo())
//         }}>
//         Change页面
//         </button>
//     </div>
// )

export default connect()(Change)

