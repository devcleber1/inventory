import React, { useState, useEffect } from 'react'
import ReactSelect from 'react-select'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import Loading from '../../components/Loading'
import api from '../../services/api'
import {
  Container,
  ContainerTitle,
  ContainerSelect,
  LoadingContainer,
  NoDataMessage, // Adicione um componente para mensagem de dados não encontrados
} from './styles'

function Equipments() {
  const [machinery, setMachinery] = useState([])
  const [rows, setRows] = useState([])
  const [sector, setSector] = useState([])
  const [selectedSector, setSelectedSector] = useState({ id: 0, name: 'Todos' }) // Selecionar "Todos" por padrão
  const [equipment, setEquipment] = useState([])
  const [selectedEquipment, setSelectedEquipment] = useState({
    id: 0,
    name: 'Todos',
  }) // Selecionar "Todos" por padrão
  const [loading, setLoading] = useState(true)
  const [loadingSector, setLoadingSector] = useState(false) // Estado para controlar o loading ao selecionar setor

  useEffect(() => {
    async function loadSectors() {
      try {
        const { data } = await api.get('/sector')
        const allSectors = [{ id: 0, name: 'Todos' }, ...data]
        setSector(allSectors)
      } catch (error) {
        console.error('Erro ao carregar setores:', error)
      }
    }

    async function loadEquipments() {
      try {
        const { data } = await api.get('/equipment')
        const allEquipments = [{ id: 0, name: 'Todos' }, ...data]
        setEquipment(allEquipments)
      } catch (error) {
        console.error('Erro ao carregar equipamentos:', error)
      }
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

      try {
        const { data: allMachinery } = await api.get(url)
        setMachinery(allMachinery)
      } catch (error) {
        console.error('Erro ao carregar maquinário:', error)
      } finally {
        setLoading(false)
        setLoadingSector(false) // Finalizar o loading ao selecionar setor
      }
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
      mold: machinery.mold,
      processor: machinery.processor,
      memory: machinery.memory,
      storage: machinery.storage,
      system: machinery.system,
      patrimony: machinery.patrimony,
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
        ) : filteredRows.length === 0 ? (
          <NoDataMessage>Nenhum dado encontrado</NoDataMessage>
        ) : (
          <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
            <Table
              sx={{
                minWidth: 400,
                '@media (max-width: 768px)': {
                  minWidth: '100%', // Faz a tabela ocupar 100% em dispositivos móveis
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">NOME</TableCell>
                  <TableCell align="center">SETOR</TableCell>
                  <TableCell align="center">EQUIPAMENTO</TableCell>
                  <TableCell align="center">FONTE</TableCell>
                  <TableCell align="center">MODELO</TableCell>
                  <TableCell align="center">PROCESSADOR</TableCell>
                  <TableCell align="center">MEMÓRIA</TableCell>
                  <TableCell align="center">HD</TableCell>
                  <TableCell align="center">SISTEMA</TableCell>
                  <TableCell align="center">PATRIMÔNIO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">
                      {row.sectors || 'Setor não disponível'}
                    </TableCell>
                    <TableCell align="center">
                      {row.equipments || 'Equipamento não disponível'}
                    </TableCell>
                    <TableCell align="center">{row.source}</TableCell>
                    <TableCell align="center">{row.mold}</TableCell>
                    <TableCell align="center">{row.processor}</TableCell>
                    <TableCell align="center">{row.memory}</TableCell>
                    <TableCell align="center">{row.storage}</TableCell>
                    <TableCell align="center">{row.system}</TableCell>
                    <TableCell align="center">{row.patrimony}</TableCell>
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

export default Equipments
