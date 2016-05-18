import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import routes from './routes'

const store = createStore(reducer)

require('./style.scss')

if (document) {

  render(
    (
      <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
      </Provider>
    ), document.getElementById('app-container')
  )

}
