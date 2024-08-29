import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
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
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  background-color: #eb6314;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px 10px 0 0;
  padding: 20px;

  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    color: #ffffff;
  }

  @media (max-width: 992px) {
    padding: 15px;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    h2 {
      margin-bottom: 8px;
      font-size: 18px;
    }
  }

  @media (max-width: 576px) {
    padding: 8px;

    h2 {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 6px;

    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 390px) {
    padding: 5px;

    h2 {
      font-size: 12px;
    }
  }
`
export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  h6 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 992px) {
    gap: 2px;

    h6 {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h6 {
      margin: 10px 0 8px 0;
      font-size: 12px;
    }
  }

  @media (max-width: 576px) {
    gap: 1px;

    h6 {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    h6 {
      margin: 8px 0 6px 0;
      font-size: 10px;
    }
  }

  @media (max-width: 390px) {
    h6 {
      margin: 6px 0 4px 0;
      font-size: 9px;
    }
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 400px;
`
