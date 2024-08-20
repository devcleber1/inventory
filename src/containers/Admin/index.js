import React from 'react'

import PropTypes from 'prop-types'

import SideMenu from '../../components/SideMenuAdmin/SideMenu'
import paths from '../../constants/paths'
import EditEquipment from './EditEquipments'
import EditMachinery from './EditMachinerys'
import EditSector from './EditSector'
import EditUser from './EditUser'
import ListEquipaments from './ListEquipment'
import ListProducts from './ListMachinery'
import ListSector from './ListSector'
import ListUsers from './ListUsers'
import NewEquipment from './NewEquipment'
import NewMachinery from './NewMachinery'
import NewSectors from './NewSectors'
import { Container, ContainerItems } from './styles'
function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenu path={path} />
      <ContainerItems>
        {path === paths.Users && <ListUsers />}
        {path === paths.EditUsers && <EditUser />}
        {path === paths.Machinery && <ListProducts />}
        {path === paths.EditMachinry && <EditMachinery />}
        {path === paths.NewMachinery && <NewMachinery />}
        {path === paths.Equipment && <ListEquipaments />}
        {path === paths.EditEquipment && <EditEquipment />}
        {path === paths.NewEquipment && <NewEquipment />}
        {path === paths.Sector && <ListSector />}
        {path === paths.EditSector && <EditSector />}
        {path === paths.NewSector && <NewSectors />}
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
