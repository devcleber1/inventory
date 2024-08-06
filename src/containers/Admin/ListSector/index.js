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

function ListSector() {
  const [sector, setSector] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/sector')
      setSector(data)
    }

    loadOrders()
  }, [])

  function editSector(sector) {
    push(paths.EditSector, { sector })
  }

  async function deleteSector(id) {
    try {
      await api.delete(`/sector/${id}`)
      setSector(sector.filter((item) => item.id !== id))
    } catch (error) {}
  }

  return (
    <Container>
      <h2>Listagem de Setores</h2>
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
            {sector.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>
                  <EditIconStyles onClick={() => editSector(item)} />
                </TableCell>
                <TableCell>
                  <DeleteIconStyles onClick={() => deleteSector(item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListSector
