import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Loading from '../../../components/Loading' // Componente de loading
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function NewEquipment() {
  const [loading, setLoading] = useState(false) // Estado de loading

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
    setLoading(true) // Inicia o loading
    try {
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
    } catch (error) {
      toast.error('Erro ao criar equipamento')
    } finally {
      setLoading(false) // Finaliza o loading
    }
  }

  return (
    <Container>
      {loading ? ( // Exibe o loading durante a submissão
        <Loading />
      ) : (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h2>Adicionar Equipamento</h2>
          <div>
            <Label>Nome</Label>
            <Input type="text" {...register('name')} />
            <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
          </div>
          <ButtonStyles>Criar Equipamento</ButtonStyles>
        </form>
      )}
    </Container>
  )
}

export default NewEquipment
