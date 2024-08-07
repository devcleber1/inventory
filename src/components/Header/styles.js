import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: #fefefe;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: 60px; /* Ajuste a altura para tablets */
  }

  @media (max-width: 480px) {
    height: 50px;
    align-items: flex-start;
    padding: 10px 20px;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px; /* Ajuste o espaçamento para tablets */
  }

  @media (max-width: 480px) {
    gap: 45px; /* Ajuste o espaçamento para celulares */
    width: 100%;
    justify-content: space-between;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? ' #eb6314' : ' #000000 ')};
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    opacity: 0.7;
    color: #eb6314;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Ajuste o tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Ajuste o tamanho da fonte para celulares */
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px; /* Ajuste o espaçamento para tablets */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Ajuste o espaçamento para celulares */
    align-items: flex-start;
    width: 100%;
    margin-left: 80px;
  }
`

export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #000;

  @media (max-width: 768px) {
    height: 30px; /* Ajuste a altura da linha para tablets */
  }

  @media (max-width: 480px) {
    display: none; /* Oculta a linha em celulares */
  }
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 16px;
    color: #000;

    @media (max-width: 768px) {
      font-size: 12px; /* Ajuste o tamanho da fonte para tablets */
    }

    @media (max-width: 480px) {
      font-size: 10px; /* Ajuste o tamanho da fonte para celulares */
    }
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #eb6314;

  &:hover {
    opacity: 0.8;
    color: #eb6314;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Ajuste o tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* Ajuste o tamanho da fonte para celulares */
  }
`
