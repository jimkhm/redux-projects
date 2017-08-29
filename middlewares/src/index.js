import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';
import Async0 from './middlewares/async0';
import Async00 from './middlewares/async00';

//미들웨어가 많으면  applyMiddleware(Async, 미들웨어추가, ....)(createStore);
const createStoreWithMiddleware = applyMiddleware(Async, Async0, Async00)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
