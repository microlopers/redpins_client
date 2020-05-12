const loginReducer = (state = {}, action) => {
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
            return{
                ...state,
                user: null,
                picture: null,
                loggedIn: false
            };
    }
}

export default loginReducer;