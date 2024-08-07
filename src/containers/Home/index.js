import React, { useState, useEffect } from 'react'

import HomeImage from '../../assets/capa ientario 1.svg'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import { Container, HomeImg } from './styles'

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando um tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 segundos

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }
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
