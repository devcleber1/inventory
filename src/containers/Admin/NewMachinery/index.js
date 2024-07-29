import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function NewMachinery() {
  const [sector, setSector] = useState([])
  const [equipment, setEquipment] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigaatório'),
    source: Yup.string().required('Fonte é obrigtório'),
    mold: Yup.string().required('Modelo é obrigaatório'),
    processor: Yup.string().required('Processador é obrigtório'),
    memory: Yup.string().required('Memória é obrigtório'),
    storage: Yup.string().required('HD é obrigtório'),
    patrimony: Yup.string(),
    system: Yup.string().required('Sistema é obrigtório'),
    equipment: Yup.object().required('Equipamento é obrigtório'),
    sector: Yup.object().required('Setor é obrigtório'),
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
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('source', data.source)
    productDataFormData.append('mold', data.mold)
    productDataFormData.append('processor', data.processor)
    productDataFormData.append('memory', data.memory)
    productDataFormData.append('storage', data.storage)
    productDataFormData.append('patrimony', data.patrimony)
    productDataFormData.append('system', data.system)
    productDataFormData.append('equipment_id', data.equipment.id)
    productDataFormData.append('sector_id', data.sector.id)

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
        pending: 'Criaando novo maquinário...',
        success: 'Maquinário criado com sucesso',
        error: 'Falha ao criar o maquinário',
      }
    )

    setTimeout(() => {
      push('/listar-maquinarios')
    }, 2000)
  }

  useEffect(() => {
    async function loadSector() {
      const { data } = await api.get('/sector')

      setSector(data)
    }

    loadSector()
  }, [])

  useEffect(() => {
    async function loadEquipment() {
      const { data } = await api.get('/equipment')

      setEquipment(data)
    }

    loadEquipment()
  }, [])

  return (
    <Container>
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
          <Label>System</Label>
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
          <ErrorMenssage>
            {errors.sector && errors.sector.message}
          </ErrorMenssage>
        </div>

        <div>
          <Controller
            name="equipment"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={equipment}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Equipamento"
                />
              )
            }}
          ></Controller>
          <ErrorMenssage>{errors.equipment?.message}</ErrorMenssage>
        </div>

        <ButtonStyles>Criar Maquinário</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewMachinery
