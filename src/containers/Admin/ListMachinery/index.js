import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import Loading from '../../../components/Loading'
import paths from '../../../constants/paths'
import api from '../../../services/api'
import {
  Container,
  EditIconStyles,
  DeleteIconStyles,
  ContainerTitle,
  ContainerSelect,
  LoadingContainer,
} from './styles'

function ListProducts() {
  const [machinery, setMachinery] = useState([])
  const [rows, setRows] = useState([])
  const [sector, setSector] = useState([])
  const [selectedSector, setSelectedSector] = useState({ id: 0, name: 'Todos' }) // Selecionar "Todos" por padrão
  const [equipment, setEquipment] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingSector, setLoadingSector] = useState(false)
  const [selectedEquipment, setSelectedEquipment] = useState({
    id: 0,
    name: 'Todos',
  })
  const { push } = useHistory()

  useEffect(() => {
    async function loadSectors() {
      const { data } = await api.get('/sector')

      // Adicionar a opção "Todos" ao array de setores
      const allSectors = [{ id: 0, name: 'Todos' }, ...data]
      setSector(allSectors)
    }

    async function loadEquipments() {
      const { data } = await api.get('/equipment')

      // Adicionar a opção "Todos" ao array de equipamentos
      const allEquipments = [{ id: 0, name: 'Todos' }, ...data]
      setEquipment(allEquipments)
    }

    loadSectors()
    loadEquipments()
  }, [])

  useEffect(() => {
    async function loadMachinery() {
      setLoading(true)
      setLoadingSector(true) // Iniciar o loading ao selecionar setor

      let url = '/machinery'
      const queries = []
      if (selectedSector && selectedSector.id !== 0) {
        queries.push(`sectorId=${selectedSector.id}`)
      }
      if (selectedEquipment && selectedEquipment.id !== 0) {
        queries.push(`equipmentId=${selectedEquipment.id}`)
      }
      if (queries.length) {
        url += `?${queries.join('&')}`
      }

      const { data: allMachinery } = await api.get(url)

      setTimeout(() => {
        setMachinery(allMachinery)
        setLoading(false)
        setLoadingSector(false) // Finalizar o loading ao selecionar setor
      }, 1000)
    }

    loadMachinery()
  }, [selectedSector, selectedEquipment])

  function createData(machinery) {
    return {
      id: machinery.id,
      name: machinery.name,
      sectors: machinery.sectors?.name,
      equipments: machinery.equipment?.name,
      source: machinery.source,
    }
  }

  useEffect(() => {
    const newRows = machinery.map((mac) => createData(mac))
    setRows(newRows)
  }, [machinery])

  const filteredRows = rows.filter((row) => {
    const sectorMatch =
      selectedSector && selectedSector.id !== 0
        ? row.sectors === selectedSector.name
        : true
    const equipmentMatch =
      selectedEquipment && selectedEquipment.id !== 0
        ? row.equipments === selectedEquipment.name
        : true
    return sectorMatch && equipmentMatch
  })

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
    <>
      <Container style={{ paddingBottom: '150px' }}>
        <ContainerTitle>
          <h2>Listagem dos Equipamentos</h2>
          <ContainerSelect>
            <h6>Filtro dos Setores:</h6>
            <ReactSelect
              options={sector}
              getOptionLabel={(sec) => sec.name}
              getOptionValue={(sec) => sec.id}
              placeholder="Setores"
              value={selectedSector} // Define o valor selecionado
              onChange={setSelectedSector}
            />
            <h6>Filtro dos Equipamentos:</h6>
            <ReactSelect
              options={equipment}
              getOptionLabel={(eq) => eq.name}
              getOptionValue={(eq) => eq.id}
              placeholder="Equipamentos"
              value={selectedEquipment} // Define o valor selecionado
              onChange={setSelectedEquipment}
            />
          </ContainerSelect>
        </ContainerTitle>
        {loadingSector || loading ? (
          <LoadingContainer>
            <Loading /> {/* Loading centralizado */}
          </LoadingContainer>
        ) : (
          <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>NOME</TableCell>
                  <TableCell>FONTE</TableCell>
                  <TableCell>EQUIPAMENTO</TableCell>
                  <TableCell align="center">SETOR</TableCell>
                  <TableCell>EDITAR</TableCell>
                  <TableCell>DELETAR</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow
                    key={row.id} // Use o campo id como a chave única
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.source}</TableCell>
                    <TableCell>
                      {row.equipments || 'Equipamento não disponível'}
                    </TableCell>
                    <TableCell align="center">
                      {row.sectors || 'Setor não disponível'}
                    </TableCell>
                    <TableCell>
                      <EditIconStyles onClick={() => editMachinery(row)} />
                    </TableCell>
                    <TableCell>
                      <DeleteIconStyles
                        onClick={() => deleteMachinery(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="right" colSpan={9}>
                    TOTAL DE MÁQUINAS
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    {filteredRows.length}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  )
}

export default ListProducts
