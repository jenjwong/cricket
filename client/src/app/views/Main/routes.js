import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../../utils/AuthService'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../utils/.privateKeys'
import Container from './Container'
import BPChart from './BPChart/BPChart'
import Login from './Login/Login'

const auth = new AuthService(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={BPChart} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
