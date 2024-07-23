import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Equipments from '../containers/Equipments'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './private-routes'
function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />

        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Equipments} path="/equipments" />
      </Switch>
    </Router>
  )
}

export default Routes
