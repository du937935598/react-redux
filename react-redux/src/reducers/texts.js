const texts = (state = 'hellos', action) => {
    switch (action.type) {
      case 'TOGGLE_TODO':
        return state+'xxxx'
      default:
        return state
    }
  }
  
  export default texts
  