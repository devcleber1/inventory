import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMessage } from './styles'

function EditMachinery() {
  const [sectors, setSectors] = useState([])
  const [equipments, setEquipments] = useState([])

  const history = useHistory()
  const { machinery } = history.location.state

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    source: Yup.string().required('Fonte é obrigatória'),
    mold: Yup.string().required('Modelo é obrigatório'),
    processor: Yup.string().required('Processador é obrigatório'),
    memory: Yup.string().required('Memória é obrigatória'),
    storage: Yup.string().required('HD é obrigatório'),
    patrimony: Yup.string(),
    system: Yup.string().required('Sistema é obrigatório'),
    equipment: Yup.object().required('Equipamento é obrigatório'),
    sector: Yup.object().required('Setor é obrigatório'),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      await toast.promise(
        api.put(`/machinery/${machinery.id}`, {
          name: data.name,
          source: data.source,
          mold: data.mold,
          processor: data.processor,
          memory: data.memory,
          storage: data.storage,
          patrimony: data.patrimony,
          system: data.system,
          equipment_id: data.equipment.id,
          sector_id: data.sector.id,
        }),
        {
          pending: 'Editando maquinário...',
          success: 'Maquinário editado com sucesso!',
          error: 'Falha ao editar o maquinário',
        }
      )

      history.push('/listar-maquinarios')
    } catch (error) {}
  }

  useEffect(() => {
    const loadSectors = async () => {
      try {
        const { data } = await api.get('/sector')
        setSectors(data)
      } catch (error) {}
    }

    loadSectors()
  }, [])

  useEffect(() => {
    const loadEquipments = async () => {
      try {
        const { data } = await api.get('/equipment')
        setEquipments(data)
      } catch (error) {}
    }

    loadEquipments()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Maquinário</h2>

        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            defaultValue={machinery.name}
            {...register('name')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Fonte</Label>
          <Input
            type="text"
            defaultValue={machinery.source}
            {...register('source')}
          />
          <ErrorMessage>{errors.source?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Modelo</Label>
          <Input
            type="text"
            defaultValue={machinery.mold}
            {...register('mold')}
          />
          <ErrorMessage>{errors.mold?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Processador</Label>
          <Input
            type="text"
            defaultValue={machinery.processor}
            {...register('processor')}
          />
          <ErrorMessage>{errors.processor?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Memória</Label>
          <Input
            type="text"
            defaultValue={machinery.memory}
            {...register('memory')}
          />
          <ErrorMessage>{errors.memory?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Armazenamento</Label>
          <Input
            type="text"
            defaultValue={machinery.storage}
            {...register('storage')}
          />
          <ErrorMessage>{errors.storage?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Patrimônio</Label>
          <Input
            type="text"
            defaultValue={machinery.patrimony}
            {...register('patrimony')}
          />
          <ErrorMessage>{errors.patrimony?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Sistema</Label>
          <Input
            type="text"
            defaultValue={machinery.system}
            {...register('system')}
          />
          <ErrorMessage>{errors.system?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Setor</Label>
          <Controller
            name="sector"
            control={control}
            defaultValue={machinery.sector}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={sectors}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                placeholder="Selecione um setor"
              />
            )}
          />
          <ErrorMessage>{errors.sector?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Equipamento</Label>
          <Controller
            name="equipment"
            control={control}
            defaultValue={machinery.equipment}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={equipments}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                placeholder="Selecione um equipamento"
              />
            )}
          />
          <ErrorMessage>{errors.equipment?.message}</ErrorMessage>
        </div>

        <ButtonStyles type="submit">Editar Maquinário</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditMachinery
