const INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE, action) => {
    console.log("Reducer loginReducer type:"+action.type)
    switch (action.type){
        case 'LOGIN' :
            return{
                ...state,
                user: action.user,
                picture: action.picture,
                loggedIn: true
            }
        case 'LOGOUT' :
            return{
                ...state,
                user: null,
                picture: null,
                loggedIn: false
            }
        default : 
            return state;
    }
}

export default loginReducer;