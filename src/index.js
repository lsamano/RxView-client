import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import App from './components/App.jsx';
import {Provider} from 'react-redux'
import reducer from './Redux/reducer'
import thunk from 'redux-thunk';

/// Require Sass file so webpack can build it
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './styles/style.css';

import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/ >
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
