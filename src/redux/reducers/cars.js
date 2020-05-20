const INITIAL_STATE = {}

const carReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD':
         return state;
        default:
            return state;
    }
}

export default carReducer;