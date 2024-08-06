import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
import Admin from '../containers/Admin'
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

        <PrivateRoute component={Admin} path={paths.Machinery} isAdmin={true} />
        <PrivateRoute
          component={Admin}
          path={paths.EditMachinry}
          isAdmin={true}
        />
        <PrivateRoute
          component={Admin}
          path={paths.NewMachinery}
          isAdmin={true}
        />
        <PrivateRoute component={Admin} path={paths.Equipment} isAdmin={true} />
        <PrivateRoute
          component={Admin}
          path={paths.EditEquipment}
          isAdmin={true}
        />
        <PrivateRoute
          component={Admin}
          path={paths.NewEquipment}
          isAdmin={true}
        />
      </Switch>
    </Router>
  )
}

export default Routes
