import { call, put } from 'redux-saga/effects';
import {loadCars} from '../../apicalls/CarlogsRepository'
import {doAddCarList} from '../actions'
import {handleError} from '../../apicalls/handleError'


function* loadCarLogList(){                                                 
    console.log('SAGA: loadCarLogList');
    const { cars, error } = yield call(loadCars);
    console.log('SAGA: loadCarLogList result:'+cars);
    if (cars) {
        // console.log(cars.data)
        yield put(doAddCarList(cars.data));
      } else {
        handleError(error)
      }
}

export {
    loadCarLogList
}

