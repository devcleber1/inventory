import React from 'react'

import PropTypes from 'prop-types'

import SideMenu from '../../components/SideMenuAdmin/SideMenu'
import { Container } from './styles'

function Admin({ path }) {
  return (
    <Container>
      <SideMenu path={path} />
      <h1>Admin</h1>
    </Container>
  )
}

export default Admin

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
}
