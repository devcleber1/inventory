import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function EditSector() {
  const { push, location } = useHistory()
  const { sector } = location.state || {}

  // Mova o uso do hook `useForm` para fora de qualquer condicional
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    if (!sector) return

    try {
      await toast.promise(
        api.put(`/sector/${sector.id}`, {
          name: data.name,
        }),
        {
          pending: 'Editando setor...',
          success: 'Setor editado com sucesso',
          error: 'Falha ao editar o setor',
        }
      )

      setTimeout(() => {
        push(paths.Sector)
      }, 2000)
    } catch (error) {}
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Setor</h2>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} defaultValue={sector.name} />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
        </div>

        <ButtonStyles type="submit">Editar Setor</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditSector
