import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    margin-top: 80px;
    font-size: 35px;
    line-height: 10px;
    font-weight: 700;
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
`

export const HomeImg = styled.img`
  width: 100%;

  @media screen and (max-width: 576px) {
  }
`
