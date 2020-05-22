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

const doLoadCars = () => ({
    type: LOAD_CARS,
});

const doAddCars = (cars) => ({
    type: CARS_ADD,
    cars
});

export {
    doFetchCars,
    doAddCars
};


