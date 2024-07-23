import React from 'react'

import {
  Container,
  FooterTitle,
  IconContainer,
  IconLink,
  Paragrafooter,
} from './styles'

function Footer() {
  return (
    <Container>
      <FooterTitle>Equipe HGVF</FooterTitle>

      <IconContainer>
        <IconLink>
          <i className="uil uil-linkedin icon"></i>
        </IconLink>
        <IconLink>
          <i className="uil uil-github-alt icon"></i>
        </IconLink>
      </IconContainer>
      <Paragrafooter>DevCleber. All rights reserveed</Paragrafooter>
    </Container>
  )
}

export default Footer
