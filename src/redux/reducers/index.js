import loginReducer from './login';
import carReducer from './cars';
import appController from './appController';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    car: carReducer,
    login : loginReducer,
    appController : appController
});

export default rootReducer;