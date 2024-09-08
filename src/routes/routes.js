import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
import Admin from '../containers/Admin'
import Equipments from '../containers/Equipments'
import Home from '../containers/Home'
import LearMore from '../containers/Learn More'
import Login from '../containers/Login'
import PrivateRoute from './private-routes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />

        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Equipments} path="/equipamentos" />
        <PrivateRoute component={LearMore} path="/saiba-mais" />

        <PrivateRoute component={Admin} path={paths.Register} isAdmin={true} />
        <PrivateRoute component={Admin} path={paths.Users} isAdmin={true} />
        <PrivateRoute component={Admin} path={paths.EditUsers} isAdmin={true} />

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
        <PrivateRoute component={Admin} path={paths.Sector} isAdmin={true} />
        <PrivateRoute
          component={Admin}
          path={paths.EditSector}
          isAdmin={true}
        />
      </Switch>
      <PrivateRoute component={Admin} path={paths.NewSector} isAdmin={true} />
    </Router>
  )
}

export default Routes
