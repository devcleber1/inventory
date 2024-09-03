import React from 'react'
import { Link } from 'react-router-dom'

import Computer from '../../assets/compuutercard.svg'
import System from '../../assets/systemcard.svg'
import { ContainerCard, CardLeft, CardRight } from './styles'
function About() {
  return (
    <ContainerCard>
      <CardLeft>
        <img src={Computer} alt="computer-card" />
        <p>
          No ambiente hospitalar, a gestão eficiente dos computadores é crucial
          para garantir a qualidade e mapeamento dos mesmos do hospital. Até o
          momento, essa tarefa vem sendo realizada através de planilhas no
          Excel, um método que, apesar de funcional, apresenta diversas
          limitações em termos de organização, segurança e eficiência. Pensando
          nisso, desenvolvemos um novo Sistema de Gerenciamento de Computadores,
          projetado para transformar essa tarefa em um processo mais ágil,
          seguro e intuitivo.
        </p>
        <Link to="/saiba-mais">Saiba Mais</Link>
      </CardLeft>

      <CardRight>
        <img src={System} alt="computer-card" />
        <p>
          O Sistema de Gerenciamento de Computadores, é uma solução moderna para
          otimizar a gestão de equipamentos. Com ele, é possível listar todos os
          equipamentos do hospital de forma organizada e acessível, permitindo a
          aplicação de filtros avançados para localizar itens específicos. A
          adição de novos equipamentos é simplificada, com uma interface
          amigável que permite a inclusão de detalhes técnicos. Além disso, o
          sistema facilita a atualização de dados, registrando o histórico
          completo de cada equipamento. Esta ferramenta centraliza as
          informações, garantindo segurança, eficiência e uma gestão mais eficaz
          dos computadores, melhorando a organização, segurança e manutenção
          preventiva dos equipamentos.
        </p>
        <Link to="/equipamentos">Ir aos Equipamentos</Link>
      </CardRight>
    </ContainerCard>
  )
}

export default About
