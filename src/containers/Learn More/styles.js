import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
    padding: 10px;
  }
`

export const Title = styled.h1`
  color: #000000;
  font-size: 2.5em;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`

export const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Subtitle = styled.h2`
  margin-top: 30px;
  color: #eb6314;
  font-size: 2em;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 1.75em;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    font-size: 1.5em;
  }
`

export const Paragraph = styled.p`
  margin-top: 15px;
  line-height: 1.6;
  color: #000;
  font-size: 1.1em;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    margin-top: 8px;
    font-size: 0.9em;
  }
`

export const List = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  color: #000;
  font-size: 1.1em;

  li {
    font-weight: 400;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 8px;
    padding-left: 15px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    margin-top: 6px;
    padding-left: 10px;
    font-size: 0.9em;
  }
`
