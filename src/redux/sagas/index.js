import {loadCarLogList} from './carSaga'
import { takeEvery, all } from 'redux-saga/effects';
import {LOAD_CAR_LIST} from '../actions/actionTypes'

export default function* rootSaga(){
    yield all([
        takeEvery(LOAD_CAR_LIST, loadCarLogList),
    ])
}
