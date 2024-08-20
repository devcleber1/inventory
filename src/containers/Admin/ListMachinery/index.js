import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

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
  DeleteIconStyles,
} from './styles'

function ListProducts() {
  const [machinery, setMachinery] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadMachinery() {
      try {
        const { data } = await api.get('/machinery')
        setMachinery(data)
      } catch (error) {
        toast.error('Erro ao carregar maquinários.')
      }
    }

    loadMachinery()
  }, [])

  function editMachinery(machinery) {
    push(paths.EditMachinry, { machinery })
  }

  async function deleteMachinery(id) {
    try {
      await api.delete(`/machinery/${id}`)
      setMachinery(machinery.filter((item) => item.id !== id))

      toast.success('Maquinário deletado com sucesso')
    } catch (error) {
      toast.error('Erro ao deletar maquinário')
    }
  }

  return (
    <Container>
      <h2>Listagem de Maquinários</h2>
      <StyledTableContainer component={Paper}>
        <Table aria-label="simple table">
          <StickyTableHead>
            <TableRow>
              <TableCell style={{ color: '#ffffff' }}>Nome</TableCell>
              <TableCell style={{ color: '#ffffff' }}>Fonte</TableCell>
              <TableCell style={{ color: '#ffffff' }}>Equipamento</TableCell>
              <TableCell style={{ color: '#ffffff' }}>Setor</TableCell>
              <TableCell style={{ color: '#ffffff' }}>Editar</TableCell>
              <TableCell style={{ color: '#ffffff' }}>Excluir</TableCell>
            </TableRow>
          </StickyTableHead>
          <TableBody>
            {machinery.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell>
                  {item.equipment?.name || 'Nome não disponível'}
                </TableCell>
                <TableCell>
                  {item.sectors?.name || 'Nome não disponível'}
                </TableCell>
                <TableCell>
                  <EditIconStyles onClick={() => editMachinery(item)} />
                </TableCell>
                <TableCell>
                  <DeleteIconStyles onClick={() => deleteMachinery(item.id)} />
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
