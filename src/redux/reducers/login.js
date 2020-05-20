const INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type){
        case 'LOGIN' :
            console.log("I\'m here "+(action.user !=null ? "response :"+action.user : ""));
            return{
                ...state,
                user: action.user,
                picture: action.picture,
                loggedIn: true
            }
        case 'LOGOUT' :
            console.log("I'm out");
            return{
                ...state,
                user: null,
                picture: null,
                loggedIn: false
            }
        default : 
            console.log("I'm default");
            return state;
    }
}

export default loginReducer;