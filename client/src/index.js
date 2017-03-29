import React from 'react'
import ReactDOM from 'react-dom'
import './app/app.css'

import App from './app/containers/Entry/Entry'

import {browserHistory} from 'react-router'
import makeRoutes from './app/routes'

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory}
        routes={routes} />,
mountNode);
