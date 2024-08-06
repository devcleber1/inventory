import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  Container,
  EditIconStyles,
  StickyTableHead,
  DeleteIconStyles,
} from './styles'

function ListEquipaments() {
  const [equipment, setEquipment] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/equipment')
      setEquipment(data)
    }

    loadOrders()
  }, [])

  function editEquipment(equipment) {
    push(paths.EditEquipment, { equipment })
    console.log('Equipment data:', equipment)
  }

  async function deleteMachinery(id) {
    try {
      await api.delete(`/equipment/${id}`)
      setEquipment(equipment.filter((item) => item.id !== id))
    } catch (error) {}
  }

  return (
    <Container>
      <h2>Listagem de Equipamentos</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <StickyTableHead>
            <TableRow>
              <TableCell>NOME</TableCell>
              <TableCell>EDITAR</TableCell>
              <TableCell>EXCLUIR</TableCell>
            </TableRow>
          </StickyTableHead>
          <TableBody>
            {equipment.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>
                  <EditIconStyles onClick={() => editEquipment(item)} />
                </TableCell>
                <TableCell>
                  <DeleteIconStyles onClick={() => deleteMachinery(item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListEquipaments
