import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function EditEquipment() {
  const { push, location } = useHistory()
  const { equipment } = location.state || {}

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
    if (!equipment) return // Adicione uma verificação adicional aqui, caso o estado não esteja definido

    try {
      await toast.promise(
        api.put(`/equipment/${equipment.id}`, {
          name: data.name,
        }),
        {
          pending: 'Editando equipamento...',
          success: 'Equipamento editado com sucesso',
          error: 'Falha ao editar o equipamento',
        }
      )

      setTimeout(() => {
        push(paths.Equipment)
      }, 2000)
    } catch (error) {
      console.error('Erro ao editar o equipamento:', error)
    }
  }

  // Mantenha a verificação de `equipment` aqui, fora do retorno
  if (!equipment) {
    return <div>Nenhum equipamento selecionado para edição.</div>
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Maquinário</h2>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={equipment.name}
          />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
        </div>

        <ButtonStyles type="submit">Editar Maquinário</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditEquipment
