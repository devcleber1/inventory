import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Loading from '../../../components/Loading'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function NewMachinery() {
  const [sector, setSector] = useState([])
  const [equipment, setEquipment] = useState([])
  const [loading, setLoading] = useState(true)

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
    await toast.promise(
      api.post(`/machinery`, {
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
        pending: 'Criando novo maquinário...',
        success: 'Maquinário criado com sucesso',
        error: 'Falha ao criar o maquinário',
      }
    )
  }

  useEffect(() => {
    async function loadSectorAndEquipment() {
      setLoading(true)
      try {
        const [sectorData, equipmentData] = await Promise.all([
          api.get('/sector'),
          api.get('/equipment'),
        ])
        setSector(sectorData.data)
        setEquipment(equipmentData.data)
      } catch (error) {
        toast.error('Erro ao carregar dados.')
      } finally {
        setLoading(false)
      }
    }

    loadSectorAndEquipment()
  }, [])

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h2>Adicionar Maquinário</h2>

          <div>
            <Label>Nome</Label>
            <Input type="text" {...register('name')} />
            <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Fonte</Label>
            <Input type="text" {...register('source')} />
            <ErrorMenssage>{errors.source?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Modelo</Label>
            <Input type="text" {...register('mold')} />
            <ErrorMenssage>{errors.mold?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Processador</Label>
            <Input type="text" {...register('processor')} />
            <ErrorMenssage>{errors.processor?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Memória</Label>
            <Input type="text" {...register('memory')} />
            <ErrorMenssage>{errors.memory?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Armazenamento</Label>
            <Input type="text" {...register('storage')} />
            <ErrorMenssage>{errors.storage?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Patrimônio</Label>
            <Input type="text" {...register('patrimony')} />
            <ErrorMenssage>{errors.patrimony?.message}</ErrorMenssage>
          </div>

          <div>
            <Label>Sistema</Label>
            <Input type="text" {...register('system')} />
            <ErrorMenssage>{errors.system?.message}</ErrorMenssage>
          </div>

          <div>
            <Controller
              name="sector"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={sector}
                  getOptionLabel={(opt) => opt.name}
                  getOptionValue={(opt) => opt.id}
                  placeholder="Setor"
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                />
              )}
            />
            <ErrorMenssage>{errors.sector?.message}</ErrorMenssage>
          </div>

          <div>
            <Controller
              name="equipment"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={equipment}
                  getOptionLabel={(opt) => opt.name}
                  getOptionValue={(opt) => opt.id}
                  placeholder="Equipamento"
                />
              )}
            />
            <ErrorMenssage>{errors.equipment?.message}</ErrorMenssage>
          </div>

          <ButtonStyles>Criar Maquinário</ButtonStyles>
        </form>
      )}
    </Container>
  )
}

export default NewMachinery
