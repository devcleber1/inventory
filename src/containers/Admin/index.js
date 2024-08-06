import React from 'react'

import PropTypes from 'prop-types'

import SideMenu from '../../components/SideMenuAdmin/SideMenu'
import paths from '../../constants/paths'
import EditEquipment from './EditEquipments'
import EditMachinery from './EditMachinerys'
import EditSector from './EditSector'
import ListEquipaments from './ListEquipment'
import ListProducts from './ListMachinery'
import ListSector from './ListSector'
import NewEquipment from './NewEquipment'
import NewMachinery from './NewMachinery'
import NewSector from './NewSector'
import { Container, ContainerItems } from './styles'
function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenu path={path} />
      <ContainerItems>
        {path === paths.Machinery && <ListProducts />}
        {path === paths.EditMachinry && <EditMachinery />}
        {path === paths.NewMachinery && <NewMachinery />}
        {path === paths.Equipment && <ListEquipaments />}
        {path === paths.EditEquipment && <EditEquipment />}
        {path === paths.NewEquipment && <NewEquipment />}
        {path === paths.Sector && <ListSector />}
        {path === paths.EditSector && <EditSector />}
        {path === paths.NewSector && <NewSector />}
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
