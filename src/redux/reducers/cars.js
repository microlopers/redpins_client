import {LOAD_CAR_LIST} from '../actions/actionTypes'

const initialState = {}

const applyAddCars = (state, action) =>
    action.cars;

const carReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_CAR_LIST:
         return applyAddCars(state, action);;
        default:
            return state;
    }
}

export default carReducer;