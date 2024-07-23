import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.png'
import Serve from '../../assets/servidor.jpg'
import { Button } from '../../components/Button'
import Loading from '../../components/Loading'
import api from '../../services/api'
import {
  Container,
  RegisterImg,
  Input,
  Label,
  ContainerItens,
  ErrorMenssage,
} from './styles'

function Register() {
  const [load, setLoad] = useState(false)
  const history = useHistory()
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-amil válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no min 6 caracteres até no  max 12')
      .max(12, 'A senha só pode ir até 12 caracteres'),
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
    try {
      const { status } = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso!')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      console.error('Error:', err) // Log do erro
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  const handleSignUpClick = () => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
      history.push('/login')
    }, 2000) // Simula um atraso de 2 segundos
  }

  return (
    <Container>
      {load ? (
        <Loading />
      ) : (
        <>
          <RegisterImg src={Serve} alt="Logo-register" />
          <ContainerItens>
            <img src={Logo} alt="Login-logo" />
            <p>
              {' '}
              Crie sua conta para utilizar o sistema de inventário do Getulinho.
            </p>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Label>Nome</Label>
              <Input
                type="name"
                {...register('name')}
                placeholder="Digite se nome..."
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
              <Label>Confiirmar Senha</Label>
              <Input
                type="password"
                {...register('confirmPassword')}
                placeholder="Confirme sua senha.."
                error={errors.confirmPassword?.message}
              />
              <ErrorMenssage>{errors.confirmPassword?.message}</ErrorMenssage>

              <Button type="submit">Log In</Button>

              <p>
                Já possui conta ?{' '}
                <a>
                  <span
                    style={{ color: '#eb6314' }}
                    to="/login"
                    onClick={handleSignUpClick}
                  >
                    Sing In
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

export default Register
