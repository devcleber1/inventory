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
        <IconLink
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin icon"></i>
        </IconLink>
        <IconLink
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt icon"></i>
        </IconLink>
      </IconContainer>
      <Paragrafooter>DevCleber. All rights reserved</Paragrafooter>
    </Container>
  )
}

export default Footer
