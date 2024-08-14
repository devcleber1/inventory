import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import Loading from '../../components/Loading'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
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
      .max(12, 'A senha deve conter no máximo 12 caracteres'),
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
      const { data } = await toast.promise(
        api.post('/sessions', {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          success: 'Seja bem-vindo(a)',
          error: 'Verifique seu e-mail e senha',
          pending: 'Verificando seus dados',
        }
      )

      putUserData(data)

      setTimeout(() => {
        if (data.admin) {
          history.push('/listar-maquinarios')
        } else {
          history.push('/')
        }
      }, 1000)
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

              <Button type="submit">Sign In</Button>

              <p>
                Não possui conta?{' '}
                <a>
                  <span
                    style={{ color: '#eb6314' }}
                    to="/cadastro"
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </span>
                </a>
              </p>
            </form>
          </ContainerItens>
        </>
      )}
    </Container>
  )
}

export default Login
