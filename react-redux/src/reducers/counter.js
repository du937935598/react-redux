const counter = (state = 0, action = {}) => {
    switch(action.type) {
        case 'INCERWENT':
            return state + 1;
        default: return state;
    }
}

export default counter;