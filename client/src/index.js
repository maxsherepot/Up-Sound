import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/scss/style.scss";
import App from '../src/components/App.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
