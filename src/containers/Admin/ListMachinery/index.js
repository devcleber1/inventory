import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import Button from '@mui/material/Button' // Botão do Material-UI para download
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { saveAs } from 'file-saver' // Biblioteca para salvar arquivos no navegador

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
  const [selectedSector, setSelectedSector] = useState({ id: 0, name: 'Todos' })
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
      try {
        const { data } = await api.get('/sector')
        const allSectors = [{ id: 0, name: 'Todos' }, ...data]
        setSector(allSectors)
      } catch (error) {
        toast.error('Erro ao carregar setores')
      }
    }

    async function loadEquipments() {
      try {
        const { data } = await api.get('/equipment')
        const allEquipments = [{ id: 0, name: 'Todos' }, ...data]
        setEquipment(allEquipments)
      } catch (error) {
        toast.error('Erro ao carregar equipamentos')
      }
    }

    loadSectors()
    loadEquipments()
  }, [])

  useEffect(() => {
    async function loadMachinery() {
      setLoading(true)
      setLoadingSector(true)

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
        toast.error('Erro ao carregar maquinário')
      } finally {
        setLoading(false)
        setLoadingSector(false)
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

  async function handleDownload() {
    try {
      const sectorId = selectedSector.id || 0
      const response = await api.get(
        `/machinery/report?sector_id=${sectorId}`,
        {
          responseType: 'blob',
        }
      )
      console.log('Resposta do relatório:', response) // Adicione este log

      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
      saveAs(blob, 'machinery_report.xlsx')
    } catch (error) {
      toast.error('Erro ao baixar o relatório')
      console.error('Erro ao baixar o relatório:', error)
      if (error.response) {
        console.error('Erro ao baixar o relatório:', error.response.data)
        console.error('Código de status:', error.response.status)
      } else {
        console.error('Erro ao baixar o relatório:', error.message)
      }
    }
  }

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
          {/* Botão de Download do Relatório */}
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Baixar Relatório
          </Button>
          <ContainerSelect>
            <h6>Filtro dos Setores:</h6>
            <ReactSelect
              options={sector}
              getOptionLabel={(sec) => sec.name}
              getOptionValue={(sec) => sec.id}
              placeholder="Setores"
              value={selectedSector}
              onChange={setSelectedSector}
            />
            <h6>Filtro dos Equipamentos:</h6>
            <ReactSelect
              options={equipment}
              getOptionLabel={(eq) => eq.name}
              getOptionValue={(eq) => eq.id}
              placeholder="Equipamentos"
              value={selectedEquipment}
              onChange={setSelectedEquipment}
            />
          </ContainerSelect>
        </ContainerTitle>
        {loadingSector || loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : filteredRows.length === 0 ? (
          <div>Nenhum dado encontrado</div>
        ) : (
          <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">NOME</TableCell>
                  <TableCell align="center">FONTE</TableCell>
                  <TableCell align="center">EQUIPAMENTO</TableCell>
                  <TableCell align="center">SETOR</TableCell>
                  <TableCell align="center">MODELO</TableCell>
                  <TableCell align="center">PROCESSADOR</TableCell>
                  <TableCell align="center">MEMÓRIA</TableCell>
                  <TableCell align="center">HD</TableCell>
                  <TableCell align="center">SISTEMA</TableCell>
                  <TableCell align="center">PATRIMÔNIO</TableCell>
                  <TableCell>EDITAR</TableCell>
                  <TableCell>DELETAR</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow
                    key={row.id}
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
                    <TableCell align="center">{row.mold}</TableCell>
                    <TableCell align="center">{row.processor}</TableCell>
                    <TableCell align="center">{row.memory}</TableCell>
                    <TableCell align="center">{row.storage}</TableCell>
                    <TableCell align="center">{row.system}</TableCell>
                    <TableCell align="center">{row.patrimony}</TableCell>
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
                  <TableCell align="right" colSpan={5}>
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
