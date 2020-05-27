import {LOAD_CAR_LIST} from '../actions/actionTypes'
import {ADD_CAR_LIST} from '../actions/actionTypes'
import {loadCarLogList} from '../sagas/carSaga'

const INITIAL_STATE = {}

const carReducer = (state = INITIAL_STATE, action) => {
    console.log("Reducer carReducer type:"+action.type)

    switch(action.type){
        //case LOAD_CAR_LIST:
        case ADD_CAR_LIST:
            console.log("Reducer "+LOAD_CAR_LIST);
 
            return applyAddCars(state, action);
        default:
            return state;
    }
}

export const applyAddCars = (state = INITIAL_STATE, action) => {
    return {...state,
        cars: action.cars
    }
}

export default carReducer;