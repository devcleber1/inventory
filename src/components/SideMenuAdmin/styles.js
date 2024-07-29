import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  position: fixed; /* Menu fixo na tela */
  height: 100vh; /* Altura da tela */
  transition: transform 0.3s ease; /* Transição suave para abertura e fechamento */

  /* Menus deslizantes em dispositivos móveis e tablets */
  @media (max-width: 768px) {
    width: 250px;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }

  @media (max-width: 480px) {
    width: 200px;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }

  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 8px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const MenuButton = styled.div`
  display: none; /* Oculta o botão em telas maiores */
  position: fixed;
  top: 10px;
  left: 10px;
  background: #3c3c3c;
  padding: 10px;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  z-index: 1000; /* Garante que o botão esteja acima do menu */

  @media (max-width: 768px) {
    display: block; /* Exibe o botão em tablets e dispositivos móveis */
  }
`
