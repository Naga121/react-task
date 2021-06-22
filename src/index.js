import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { createStore,applyMiddleware } from 'redux';
import { appstate } from './Redux/Reducers/Combine';
import { Provider } from 'react-redux';
import { rootSaga } from './Saga/Root';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const mystore=createStore(appstate,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

mystore.dispatch({type:"PEOPLE_READ_ACTION"})

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
