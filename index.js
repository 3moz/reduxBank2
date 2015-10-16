import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import transactions from './reducers';
// import configureStore from './store/configureStore';

const store = createStore(transactions);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}> 
    {() => <App/>} 
  </Provider>,
  rootElement
);