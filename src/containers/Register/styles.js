import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: #ffffff;

  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const RegisterImg = styled.img`
  width: 50%;

  @media screen and (max-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 390px) {
    margin: auto;
  }
`

export const ContainerItens = styled.div`
  height: auto;
  margin: 20px 0 0 150px;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 230px;
    height: 210px;
    margin-left: 130px;
    margin-bottom: 20px;
  }
  p {
    font-size: 17px;
    font-style: normal;
    line-height: 26px;
    margin-bottom: 8px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    ::placeholder {
      color: #e3e2e3;
      padding: 5px;
    }
    p {
      font-size: 14px;
      margin-top: 2px;
      margin-left: 10px;
    }
    a {
      margin-left: 2px;
      cursor: pointer;
      text-decoration: none;
    }

    a:hover {
      opacity: 0.7;
    }

    a:active {
      opacity: 0.1;
    }
  }
  @media screen and (max-width: 992px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
      height: 120px;
      margin-right: 110px;
    }

    p {
      font-size: 15px;
      line-height: 16px;
    }

    form {
      p {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 115px;

    img {
      width: 150px;
      height: 130px;
      margin-right: 120px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;

    img {
      width: 150px;
      height: 120px;
      margin-left: 120px;
    }

    p {
      font-size: 18px;
    }

    form {
      p {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: auto;
    height: 120%;
    margin-right: 180px;
    border-radius: 0;

    form {
      margin-left: 25px;
    }
    p {
      font-size: 12px;
      margin-left: 15px;
    }
    img {
      width: 120px;
      height: 100px;
      margin-left: 130px;
    }
  }
  @media screen and (max-width: 415px) {
    width: 98%;
    margin: auto;
    height: auto;
    form {
      margin-right: 20px;
    }

    p {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 390px) {
    width: auto;
  }
`
export const Label = styled.label`
  font-style: normal;
  font-size: 16px;
  font-weight: 200;
  line-height: 14px;
  color: #212529;
  margin-top: 20px;
  margin-left: 6px;
  margin-bottom: 10px;

  @media screen and (max-width: 992px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 390px) {
    margin-left: 10px;
  }
`

export const Input = styled.input`
  width: auto;
  height: 45.32px;
  font-size: 18px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(81, 81, 81, 0.6);
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #cc1717;' : 'none')};
  padding-left: 10px;

  @media screen and (max-width: 992px) {
    width: 400px;
    height: 52px;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 330px;
  }

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 380px;
  }

  @media screen and (max-width: 415px) {
    width: 380px;
  }

  @media screen and (max-width: 390px) {
    width: 350px;
  }
`

export const ErrorMenssage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 4px;
  line-height: 16px;
  color: #cc1717;
`
