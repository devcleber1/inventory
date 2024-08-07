import styled from 'styled-components'

export const ContainerCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: #ffffff;
  margin-top: 80px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 60px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }
`

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 598px;
  height: 600px;
  background-color: #fefefe;
  box-shadow: 37px 11px 44px -32px rgba(0, 0, 0, 1);

  img {
    width: 100%;
  }

  p {
    margin-top: 16px;
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: 300;
    line-height: 25px;
    padding-right: 20px;
    padding-left: 20px;
  }

  a {
    color: #eb6314;
    cursor: pointer;
  }

  a:active {
    opacity: 0.5;
    color: #ffffff;
  }

  a:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 992px) {
    height: 640px;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    img {
      padding: 20px;
    }

    p {
      font-size: 13px;
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 450px) {
    p {
      font-size: 15px;
    }
  }
`

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 598px;
  height: 600px;
  background-color: #fefefe;
  box-shadow: 37px 11px 44px -32px rgba(0, 0, 0, 1);

  img {
    width: 100%;
  }

  p {
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 25px;
    padding-right: 20px;
    padding-left: 20px;
  }

  a {
    color: #eb6314;
    cursor: pointer;
  }

  a:active {
    opacity: 0.5;
    color: #ffffff;
  }

  a:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 992px) {
    height: 640px;

    p {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    img {
      padding: 20px;
    }
    p {
      font-size: 13px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 450px) {
    p {
      font-size: 15px;
    }
  }
`
