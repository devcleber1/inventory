import React from 'react'

import HomeImage from '../../assets/capa ientario 1.svg'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeImage} alt="logo-home" />
      <h1>Sobre</h1>
      <About />
      <h1>Contato</h1>
      <Contact />
      <Footer />
    </Container>
  )
}

export default Home
