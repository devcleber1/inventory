import React, { useState, useEffect } from 'react'

import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import { Container, Title, Section, Subtitle, Paragraph, List } from './styles'
function LearnMore() {
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
    <>
      <Container>
        <Title>Transformação na Gestão de Equipamentos Hospitalares</Title>

        <Section>
          <Subtitle>Introdução</Subtitle>
          <Paragraph>
            No ambiente hospitalar, uma gestão eficiente dos equipamentos é
            essencial para assegurar a qualidade e o controle preciso dos
            ativos. Anteriormente, essa gestão era feita através de planilhas no
            Excel, uma ferramenta que, apesar de sua funcionalidade básica,
            apresentava desafios significativos em termos de organização,
            segurança e eficiência.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>O Novo Sistema de Gerenciamento</Subtitle>
          <Paragraph>
            Cientes das limitações do método tradicional, desenvolvemos um
            Sistema de Gerenciamento de Equipamentos moderno e aprimorado. Este
            novo sistema foi projetado para otimizar a gestão dos equipamentos
            hospitalares, oferecendo um processo mais ágil, seguro e intuitivo.
            As principais melhorias incluem:
          </Paragraph>
          <List>
            <li>
              Velocidade aumentada na consulta e atualização dos dados dos
              equipamentos.
            </li>
            <li>
              Organização mais eficiente e intuitiva para o mapeamento dos
              ativos.
            </li>
            <li>
              Segurança robusta para proteger informações sensíveis e garantir a
              integridade dos dados.
            </li>
          </List>
        </Section>

        <Section>
          <Subtitle>Acesso à Lista de Equipamentos</Subtitle>
          <Paragraph>
            O novo sistema permite aos usuários acessar e gerenciar a lista de
            equipamentos do hospital de forma simples e eficaz. Com atualizações
            em tempo real, o controle sobre todos os equipamentos é mais preciso
            e fácil de manter.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Vantagens da Nova Plataforma</Subtitle>
          <Paragraph>
            A migração do Excel para o nosso novo sistema trouxe uma série de
            benefícios tangíveis:
          </Paragraph>
          <List>
            <li>
              <strong>Rapidez:</strong> Redução significativa no tempo
              necessário para acessar e atualizar informações.
            </li>
            <li>
              <strong>Eficiência:</strong> A organização dos dados tornou-se
              mais intuitiva e eficiente.
            </li>
            <li>
              <strong>Segurança:</strong> Proteção aprimorada dos dados
              sensíveis, superando as capacidades do Excel.
            </li>
          </List>
        </Section>
      </Container>
      <Footer />
    </>
  )
}

export default LearnMore
