import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function NewEquipment() {
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigaatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)

    await toast.promise(
      api.post(`/equipment`, {
        name: data.name,
      }),
      {
        pending: 'Criando novo equipamento...',
        success: 'Equipamento criado com sucesso',
        error: 'Falha ao criar o equipamento',
      }
    )

    setTimeout(() => {
      push('/listar-equipamentos')
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Adicionar Equipamento</h2>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
        </div>

        <ButtonStyles>Criar Equipamento</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewEquipment
