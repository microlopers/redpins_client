import {takeLeading, call} from 'redux-saga/effects'
import {loadCars} from '../apicalls/CarlogsRepository'


function* loadCarLogList(){
    console.log('XXXXX fetchcars');
    const { result, error } = call(loadCars);
    if (result) {
        yield put(doAddCars(result.data));
      } else {
        handleError(error)
      }
}

export {
    loadCarLogList
}

