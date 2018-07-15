import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store, { history } from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root')
console.log('Provider', Provider, 'Router', Router)
render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  target
)
registerServiceWorker();
