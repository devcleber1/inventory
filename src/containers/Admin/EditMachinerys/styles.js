import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;

  form {
    background: #fefefe;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;

    h2 {
      margin-bottom: 10px;
      color: #eb6314;
      font-size: 18px;
      font-weight: 300;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #eb6314;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Input = styled.input`
  height: 25px;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: none;
  width: 100%;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 30px;
  }
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 15px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;

  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #ff0000;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
