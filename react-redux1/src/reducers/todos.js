const todos = (state = 0, action = {}) => {
    switch(action.type) {
        case 'INCEADD':
            return state + 1;
        case 'INCEDEL':
            return state - 1;
        default: return state;
    }
}

export default todos;