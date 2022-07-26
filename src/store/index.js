import { applyMiddleware, createStore, compose } from 'redux';
import rootSaga from '~/sagas';
import rootReducer from '~/reducer';
import createSagaMiddleware from 'redux-saga';
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
      : applyMiddleware(sagaMiddleware),
  );
//   sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;
