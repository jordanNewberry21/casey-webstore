import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

import App from '../src/components/App/App';

// create middleware
const sagaMiddleware = createSagaMiddleware();

// create list of middleware to be used in production mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// create the redux store
const store = createStore(
  rootReducer,
  // adds all middleware to the project
  applyMiddleware(...middlewareList),
);

// tells the sagaMiddleware to use the rootSaga
sagaMiddleware.run(rootSaga);

// render the app with the redux store Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
