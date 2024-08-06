import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import TableHead from '@mui/material/TableHead'
import styled from 'styled-components'

// Container que centraliza a tabela
export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%; /* Garante que o contêiner ocupe toda a largura da viewport */

  /* Estilo para dispositivos móveis */
  @media (max-width: 768px) {
    padding: 10px; /* Ajusta o preenchimento para telas menores */
  }

  h2 {
    margin-bottom: 20px;
    color: #eb6314;
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`

// Adiciona estilo para o cabeçalho fixo da tabela
export const StickyTableHead = styled(TableHead)`
  position: sticky;
  top: 0;
  background-color: #eb6314;
  z-index: 1;
`

// Estilo do ícone de edição
export const EditIconStyles = styled(EditIcon)`
  cursor: pointer;
  color: #000000;

  &:hover {
    opacity: 0.8;
    color: #eb6314;
  }

  &:active {
    opacity: 0.6;
    color: green;
  }
`
export const DeleteIconStyles = styled(DeleteIcon)`
  cursor: pointer;
  color: red;
`
