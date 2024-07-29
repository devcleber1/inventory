import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    h2 {
      margin-bottom: 5px;
      color: #eb6314;
      font-size: 24px;
      font-weight: 500;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 15px;
      }
    }
  }

  h2 {
    margin-bottom: 20px;
    color: #000000;
    font-size: 24px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`

export const Label = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const ErrorMenssage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #fefefe;
  margin-top: 5px;
`
