import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import Transactor from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}> 
    {() => <Transactor/>} 
  </Provider>,
  document.getElementById('root')
);