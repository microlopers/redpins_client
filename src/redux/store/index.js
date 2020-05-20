import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(checkTokenExpMiddleware, saga)
);

saga.run(rootSaga);

export default store;
