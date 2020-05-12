const carReducer = (licensed = false, action) => {
    switch(action.type){
        case 'ADD':
         return true;
        default:
            return licensed;
    }
}

export default carReducer;