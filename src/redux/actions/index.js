import { ADD_CAR_LIST, LOAD_CAR_LIST, SHOW_DASHBOARD } from './actionTypes'

export const loginAction = (response) => {
    return {
        type: 'LOGIN',
        user: response != null ? response.name : null,
        picture: response != null ? response.picture.data.url : null
    }
}

export const developmentLoginAction = () =>{
    return {
        type: 'LOGIN',
        user: 'Developer',
        picture: null
    }
}

export const logoutAction = () => {
    return {
        type: 'LOGOUT'
    }
}

export const showCarListAction = () => {
    return {
        type: 'SHOW_CARLOG'
    }
}

export const showDashboardAction = () => {
    return {
        type: SHOW_DASHBOARD
    }
}

export const doLoadCarListAction = () => {
    console.log("Action doLoadCarListAction");
    return {
        type: LOAD_CAR_LIST
    }
};

export const doAddCarList = (cars) => {
    console.log("Action doAddCarList");
    console.log(cars);
    return {
        type: ADD_CAR_LIST,
        cars
    }
};




