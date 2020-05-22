import {ADD_CAR_LIST,LOAD_CAR_LIST} from './actionTypes'

export const loginAction = (response) => {
    return {
        type:'LOGIN',
        user: response!=null?response.name:null,
        picture: response!=null?response.picture.data.url:null
    }
}

export const logoutAction = () => {
    return {
        type:'LOGOUT'
    }
}

export const showCarListAction = () => {
    return {
        type: 'SHOW_CARLOG'
    }
}

export const showDashboardAction = () => {
    return {
        type: 'SHOW_DASHBOARD'
    }
}

const doLoadCarList = () => ({
    type: LOAD_CAR_LIST
});

const doAddCarList = (cars) => ({
    type: ADD_CAR_LIST,
    cars
});

export {
    doLoadCarList,
    doAddCarList
};


