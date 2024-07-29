import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component: Component, isAdmin, ...rest }) {
  const user = localStorage.getItem('inventory:userdata')

  if (!user) {
    return <Redirect to="/login" />
  }

  const userData = JSON.parse(user)

  if (isAdmin && !userData.admin) {
    return <Redirect to="/" />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool,
}
