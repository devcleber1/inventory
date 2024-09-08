import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import Loading from '../../../components/Loading' // Componente de loading
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
  const [loading, setLoading] = useState(true) // Estado de loading
  const { push } = useHistory()

  useEffect(() => {
    async function loadSectors() {
      try {
        const { data } = await api.get('/sector')
        setSector(data)
      } catch (error) {
        toast.error('Erro ao carregar os setores')
      } finally {
        setLoading(false) // Finaliza o loading
      }
    }

    loadSectors()
  }, [])

  function editSector(sector) {
    push(paths.EditSector, { sector })
  }

  async function deleteSector(id) {
    try {
      await api.delete(`/sector/${id}`)
      setSector(sector.filter((item) => item.id !== id))
      toast.success('Setor deletado com sucesso')
    } catch (error) {
      toast.error('Erro ao deletar o setor')
    }
  }

  return (
    <Container>
      <h2>Listagem de Setores</h2>
      {loading ? ( // Exibe o loading enquanto os dados estão sendo carregados
        <Loading />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <StickyTableHead>
              <TableRow>
                <TableCell style={{ color: '#ffffff' }}>NOME</TableCell>
                <TableCell style={{ color: '#ffffff' }}>EDITAR</TableCell>
                <TableCell style={{ color: '#ffffff' }}>EXCLUIR</TableCell>
              </TableRow>
            </StickyTableHead>
            <TableBody>
              {sector.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3}>
                    <div>Nenhum setor encontrado</div>
                  </TableCell>
                </TableRow>
              ) : (
                sector.map((item) => (
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
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  )
}

export default ListSector
