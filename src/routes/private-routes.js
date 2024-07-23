import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('inventory:userdata')

  if (!user) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.proTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
}
