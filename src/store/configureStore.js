import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers/rootReducer';

export function configureStore(initialState) {
  // const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    thunkMiddleware,
    // sagaMiddleware
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  // store.runSaga = sagaMiddleware.run;
  // store.close = () => store.dispatch(END);

  return store;
}

export default configureStore;
