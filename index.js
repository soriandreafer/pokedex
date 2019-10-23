import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './Components/App';
import reducers from './Reducers';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

console.log('src/index.js')
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(  
  <BrowserRouter>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);

//<Provider store={createStoreWithMiddleware(reducers)}>
//</Provider> document.querySelector('#container')
/*
<Provider store={createStoreWithMiddleware(reducers)}>
      <App />*/