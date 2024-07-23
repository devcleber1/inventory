import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Informatic from '../../assets/informatic.png'
import Logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import Loading from '../../components/Loading'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LogoImg,
  Input,
  Label,
  ContainerItens,
  ErrorMenssage,
} from './styles'

function Login() {
  const { putUserData } = useUser()
  const [load, setLoad] = useState(false)
  const history = useHistory()
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatória')
      .min(6, 'A senha deve conter 6 caracteres')
      .max(12, 'A senha deve conter no máximo 12 carcteres'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    try {
      const { status, data } = await api.post(
        '/sessions',
        {
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Seja Bem-Vindo!')
      } else if (status === 401) {
        toast.error('E-mail ou Senha Incorretos')
      } else {
        throw new Error()
      }
      putUserData(data)
    } catch (err) {
      toast.error('⚠Falha no sistema❗ Tente novamente')
    }
  }

  const handleSignUpClick = () => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
      history.push('/cadastro')
    }, 2000) // Simula um atraso de 2 segundos
  }

  return (
    <Container>
      {load ? (
        <Loading />
      ) : (
        <>
          <ContainerItens>
            <img src={Logo} alt="Login-logo" />
            <p>Seja bem-vindo ao sistema de inventário do Getulinho.</p>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Label>Email</Label>
              <Input
                type="email"
                {...register('email')}
                placeholder="email@gmail.com"
                error={errors.email?.message}
              />
              <ErrorMenssage>{errors.email?.message}</ErrorMenssage>
              <Label>Senha</Label>
              <Input
                type="password"
                {...register('password')}
                placeholder="Digite sua senha..."
                error={errors.password?.message}
              />
              <ErrorMenssage>{errors.password?.message}</ErrorMenssage>

              <Button type="submit">Log In</Button>

              <p>
                Não possui conta ?{' '}
                <a>
                  <span
                    style={{ color: '#eb6314' }}
                    to="/cadastro"
                    onClick={handleSignUpClick}
                  >
                    Sing Up
                  </span>
                </a>
              </p>
            </form>
          </ContainerItens>
          <LogoImg src={Informatic} alt="Login-image" />
        </>
      )}
    </Container>
  )
}

export default Login
