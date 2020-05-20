const INITIAL_STATE = {position: 'DASHBOARD'}

const appControllerReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch(action.type){
        case 'SHOW_DASHBOARD':
            return{
                ...state,
                position: 'DASHBOARD'
            } ;
        case 'SHOW_CARLOG':
            return{
                ...state,
                position: 'CARLOG'
            } ;
            
        default:
            return state;
    }
}

export default appControllerReducer;