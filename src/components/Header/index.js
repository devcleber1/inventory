import React from 'react'
import { useHistory } from 'react-router-dom'

import PersonIcon from '@mui/icons-material/Person'

import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit,
} from './styles'

function Header() {
  const { logout, userData } = useUser()

  const {
    push,
    location: { pathname },
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/equipamentos')}
          isActive={pathname === '/equipamentos'}
        >
          Equipamentos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <Line></Line>
        <PageLink>
          <PersonIcon />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}

export default Header
