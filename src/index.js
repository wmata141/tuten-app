import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './assets/styles/index.css';
import App from './App';  
 import 'mdbreact/dist/css/mdb.css'
 
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);