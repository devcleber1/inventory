import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #f5f5f5;
    box-shadow: 12px 13px 31px -3px rgba(0, 0, 0, 0.51);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    h2 {
      margin-bottom: 10px;
      color: #eb6314;
      font-size: 18px;
      font-weight: 300;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #000;
  margin-bottom: 8px;
`

export const Input = styled.input`
  height: 27px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
  font-size: 14px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 2px;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
`

export const ErrorMenssage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #fefefe;
  margin-top: 5px;
`
