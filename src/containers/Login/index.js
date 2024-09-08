import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
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
  const history = useHistory()
  const [loading, setLoading] = useState(false)

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

  const handleApiErrors = (status) => {
    switch (status) {
      case 401:
        toast.error('Usuário ou senha incorretos. Tente novamente.')
        break
      case 404:
        toast.error('Usuário não encontrado. Verifique seu e-mail.')
        break
      default:
        toast.error('⚠ Falha no sistema❗ Tente novamente mais tarde.')
        break
    }
  }

  const onSubmit = async (clientData) => {
    setLoading(true)
    try {
      const response = await api.post('/sessions', {
        email: clientData.email,
        password: clientData.password,
      })

      // Aqui você pode verificar a resposta e garantir que o usuário foi cadastrado corretamente.
      const { data, status } = response

      if (status === 200) {
        toast.success('Seja bem-vindo(a)')
        putUserData(data)
        setTimeout(() => {
          history.push(data.admin ? '/listar-maquinarios' : '/')
        }, 1000)
      } else {
        handleApiErrors(status)
      }
    } catch (err) {
      if (err.response) {
        handleApiErrors(err.response.status)
      } else {
        toast.error('Erro na conexão com o servidor. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
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

          <Button type="submit" disabled={loading}>
            {loading ? 'Verificando...' : 'Sign In'}
          </Button>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Login
