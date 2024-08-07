import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #eb6314;
  box-shadow: 0px -2px 11px 0px rgba(0, 0, 0, 0.6);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`

export const FooterTitle = styled.h4`
  color: #fefefe;
  font-size: 16px;
  line-height: 22px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`

export const IconLink = styled.a`
  font-size: 18px;
  color: #fefefe;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: #000000;
  }

  &:active {
    opacity: 0.5;
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const Paragrafooter = styled.p`
  font-size: 12px;
  color: #fefefe;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`
