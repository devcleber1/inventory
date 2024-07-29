import React from 'react'

import PropTypes from 'prop-types'

import SideMenu from '../../components/SideMenuAdmin/SideMenu'
import paths from '../../constants/paths'
import ListProducts from './ListMachinery'
import { Container, ContainerItems } from './styles'
function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenu path={path} />
      <ContainerItems>
        {path === paths.Machinery && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

export default Admin

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
}
