import React, { useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import PropTypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import lislinks from './menu-list'
import { Container, ItemContainer, ListLink, MenuButton } from './styles'

function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Botão de menu (hamburger) visível em dispositivos móveis e tablets */}
      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuButton>
      {/* Menu lateral */}
      <Container isOpen={isMenuOpen}>
        <hr />
        {lislinks.map((item) => (
          <ItemContainer key={item.id} isActive={path === item.link}>
            <item.icon className="icon" />
            <ListLink to={item.link}>{item.label}</ListLink>
          </ItemContainer>
        ))}
        <hr />
        <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
          <LogoutIcon style={{ color: '#ffffff' }} />
          <ListLink to="/login" onClick={logout}>
            Sair
          </ListLink>
        </ItemContainer>
      </Container>
    </>
  )
}

export default SideMenuAdmin

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
}
