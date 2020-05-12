import loginReducer from './login';
import carReducer from './cars';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    car: carReducer,
    login : loginReducer
});

export default reducers;