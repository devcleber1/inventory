import styled from 'styled-components'

export const ContainerButton = styled.button`
  margin-top: 10px;
  width: auto;
  height: 40px;
  background: #eb6304;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  @media screen and (max-width: 992px) {
    height: 80px;
    font-size: 24px;
  }
  @media screen and (max-width: 576px) {
    height: 40px;
    font-size: 15px;
  }
`
