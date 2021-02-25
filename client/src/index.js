import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/scss/style.scss";
import App from '../src/components/App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n';
import { Provider } from 'react-redux';
import store from './store/store.js';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
