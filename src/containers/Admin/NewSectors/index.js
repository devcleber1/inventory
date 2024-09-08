import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function NewSector() {
  const { push } = useHistory()
  const [loading, setLoading] = useState(false) // Estado de carregamento

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
    setLoading(true) // Inicia o carregamento
    try {
      await toast.promise(api.post(`/sector`, { name: data.name }), {
        pending: 'Criando novo setor...',
        success: 'Setor criado com sucesso',
        error: 'Falha ao criar o setor',
      })

      setTimeout(() => {
        push('/listar-setores')
      }, 2000)
    } catch (error) {
      toast.error('Erro ao criar setor')
    } finally {
      setLoading(false) // Finaliza o carregamento
    }
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Adicionar Setor</h2>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
        </div>

        <ButtonStyles type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar Setor'}
        </ButtonStyles>
      </form>
    </Container>
  )
}

export default NewSector
