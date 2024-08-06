import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }

  h2 {
    margin-bottom: 20px;
    color: #eb6314;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`

export const ContainerTitle = styled.h2``

export const StyledTableContainer = styled(TableContainer)`
  flex: 1;
  max-height: 100%;
  overflow: auto;
  width: 100%;
`

export const StickyTableHead = styled(TableHead)`
  position: sticky;
  top: 0;
  background-color: #eb6314;
  z-index: 1;
`

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
