import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #eb6314;
  box-shadow: 0px -2px 11px 0px rgba(0, 0, 0, 0.6);
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  position: fixed;
  bottom: 0;
`

export const FooterTitle = styled.h4`
  color: #fefefe;
  font-size: 13px;
  font-style: normal;
  line-height: 22px;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 2px;
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
`

export const Paragrafooter = styled.p`
  font-size: 10px;
  color: #fefefe;
`
