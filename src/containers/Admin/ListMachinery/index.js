import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  Container,
  EditIconStyles,
  StickyTableHead,
  StyledTableContainer,
} from './styles'

function ListProducts() {
  const [machinery, setMachinery] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/machinery')
      setMachinery(data)
      console.log(data)
    }

    loadOrders()
  }, [])

  function editMachinery(machinery) {
    push(paths.EditMachinry, { machinery })
  }

  return (
    <Container>
      <h2>Listagem de Maquinários</h2>
      <StyledTableContainer component={Paper}>
        <Table aria-label="simple table">
          <StickyTableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Fonte</TableCell>
              <TableCell>Equipamento</TableCell>
              <TableCell>Setor</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </StickyTableHead>
          <TableBody>
            {machinery.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell>{item.equipment.name}</TableCell>
                <TableCell>{item.sectors.name}</TableCell>
                <TableCell>
                  <EditIconStyles onClick={() => editMachinery(item)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Container>
  )
}

export default ListProducts