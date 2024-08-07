import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  h1 {
    margin-top: 50px;
    font-size: 35px;
    line-height: 10px;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 576px) {
    h1 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 18px;
    }
  }
`

export const HomeImg = styled.img`
  width: 100%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
