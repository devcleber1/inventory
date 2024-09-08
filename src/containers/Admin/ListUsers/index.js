import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import Loading from '../../../components/Loading'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  Container,
  EditIconStyles,
  StickyTableHead,
  DeleteIconStyles,
} from './styles'

function ListUsers() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const { push } = useHistory()

  useEffect(() => {
    async function loadUsers() {
      setLoading(true)
      try {
        const { data } = await api.get('/users')
        setUser(data)
      } catch (error) {
        toast.error('Erro ao carregar usuários.')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  function editUser(user) {
    push(paths.EditUsers, { user })
  }

  async function deleteUser(id) {
    try {
      await api.delete(`/users/${id}`)
      setUser(user.filter((item) => item.id !== id))
      toast.success('Usuário deletado com sucesso!')
    } catch (error) {
      toast.error('Erro ao deletar usuário')
    }
  }

  return (
    <Container>
      <h2>Listagem dos Usuários</h2>
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <StickyTableHead>
              <TableRow>
                <TableCell style={{ color: '#ffffff' }}>USUÁRIOS</TableCell>
                <TableCell style={{ color: '#ffffff' }}>ADMIN</TableCell>
                <TableCell style={{ color: '#ffffff' }}>EDITAR</TableCell>
                <TableCell style={{ color: '#ffffff' }}>EXCLUIR</TableCell>
              </TableRow>
            </StickyTableHead>
            <TableBody>
              {user.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} style={{ textAlign: 'center' }}>
                    <div>Nenhum usuário encontrado</div>
                  </TableCell>
                </TableRow>
              ) : (
                user.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.admin ? 'Sim' : 'Não'}</TableCell>
                    <TableCell>
                      <EditIconStyles onClick={() => editUser(item)} />
                    </TableCell>
                    <TableCell>
                      <DeleteIconStyles onClick={() => deleteUser(item.id)} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  )
}

export default ListUsers
