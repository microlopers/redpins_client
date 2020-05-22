import {call} from 'redux-saga/effects'
import {loadCars} from '../../apicalls/CarlogsRepository'
import {doAddCarList} from '../actions'
import {handleError} from '../../apicalls/handleError'


function* loadCarLogList(){
    console.log('SAGA: loadCarLogList');
    const { result, error } = call(loadCars);
    if (result) {
        yield put(doAddCarList(result.data));
      } else {
        handleError(error)
      }
}

export {
    loadCarLogList
}

