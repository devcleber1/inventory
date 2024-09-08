import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../../assets/logo.png'
import Serve from '../../../assets/servidor.jpg'
import { Button } from '../../../components/Button'
import api from '../../../services/api'
import {
  Container,
  RegisterImg,
  Input,
  Label,
  ContainerItens,
  ErrorMenssage,
} from './styles'

function Register() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter entre 6 e 12 caracteres')
      .max(12, 'A senha deve conter entre 6 e 12 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirme a sua senha')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    setLoading(true)
    try {
      const response = await api.post('/users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password,
      })

      const { status } = response

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso!')
        setTimeout(() => {
          history.push('/painel-usuarios')
        }, 2000)
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error('Erro inesperado')
      }
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response
        if (status === 400) {
          toast.error(
            data.message ||
              'Erro de validação. Verifique os dados e tente novamente.'
          )
        } else if (status === 409) {
          // Tratamento específico para erro de e-mail já cadastrado
          toast.error('E-mail já cadastrado! Faça login para continuar.')
        } else if (status === 500) {
          toast.error('Erro interno do servidor. Tente novamente mais tarde.')
        } else {
          toast.error('Erro inesperado. Tente novamente.')
        }
      } else {
        toast.error('Erro na conexão com o servidor. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <RegisterImg src={Serve} alt="Logo-register" />
      <ContainerItens>
        <img src={Logo} alt="Login-logo" />
        <p>
          Crie uma conta para utilizar o sistema de inventário do Getulinho.
        </p>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            placeholder="Digite seu nome..."
            error={errors.name?.message}
          />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
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
          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirme sua senha..."
            error={errors.confirmPassword?.message}
          />
          <ErrorMenssage>{errors.confirmPassword?.message}</ErrorMenssage>

          <Button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar Usuário'}
          </Button>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Register
