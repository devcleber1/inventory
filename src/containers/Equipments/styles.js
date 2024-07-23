import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  background-color: #fefefe;

  @media (max-width: 768px) {
    padding: 8px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    h2 {
      margin-bottom: 8px;
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
    font-weight: 300;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h6 {
      margin: 10px 0 8px 0;
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
