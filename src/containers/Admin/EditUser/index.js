import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  ButtonStyles,
  ContainerInput,
  ErrorMenssage,
} from './styles'

function EditUser() {
  const {
    push,
    location: {
      state: { user },
    },
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do usuário'),
    admin: Yup.bool(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.name,
      admin: user.admin,
    },
  })

  const onSubmit = async (data) => {
    try {
      await toast.promise(
        api.put(`users/${user.id}`, {
          name: data.name,
          admin: data.admin,
        }),
        {
          pending: 'Editando usuário...',
          success: 'Usuário editado com sucesso!',
          error: 'Falha ao editar o usuário',
        }
      )
      push('/painel-usuarios')
    } catch (error) {
      console.error(
        'Erro ao editar o usuário:',
        error.response ? error.response.data : error.message
      )
      toast.error(
        'Erro ao editar o usuário. Verifique o console para mais detalhes.'
      )
    }

    console.log('Dados enviados:', {
      name: data.name,
      admin: data.admin,
    })
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
        </div>

        <ContainerInput>
          <Label>
            <input type="checkbox" {...register('admin')} />
            Administrador
          </Label>
        </ContainerInput>

        <ButtonStyles type="submit">Editar Usuário</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditUser
