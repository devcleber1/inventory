import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, ErrorMenssage } from './styles'

function EditMachinery() {
  const [sector, setSector] = useState([])
  const [equipment, setEquipment] = useState([])
  const {
    push,
    location: {
      state: { machinery },
    },
  } = useHistory()

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
        pending: 'Editando novo maquinário...',
        success: 'Maquinário editado com sucesso',
        error: 'Falha ao editar o maquinário',
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
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={machinery.name}
          />
          <ErrorMenssage>{errors.name?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>Fonte</Label>
          <Input
            type="text"
            {...register('source')}
            defaultValue={machinery.source}
          />
          <ErrorMenssage>{errors.source?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>Modelo</Label>
          <Input
            type="text"
            {...register('mold')}
            defaultValue={machinery.mold}
          />
          <ErrorMenssage>{errors.mold?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>Processador</Label>
          <Input
            type="text"
            {...register('processor')}
            defaultValue={machinery.processor}
          />
          <ErrorMenssage>{errors.processor?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>Memória</Label>
          <Input
            type="text"
            {...register('memory')}
            defaultValue={machinery.memory}
          />
          <ErrorMenssage>{errors.memory?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>Armazenamento</Label>
          <Input
            type="text"
            {...register('storage')}
            defaultValue={machinery.storage}
          />
          <ErrorMenssage>{errors.storage?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>Patrimônio</Label>
          <Input
            type="text"
            {...register('patrimony')}
            defaultValue={machinery.patrimony}
          />
          <ErrorMenssage>{errors.patrimony?.message}</ErrorMenssage>
        </div>

        <div>
          <Label>System</Label>
          <Input
            type="text"
            {...register('system')}
            defaultValue={machinery.system}
          />
          <ErrorMenssage>{errors.system?.message}</ErrorMenssage>
        </div>

        <div>
          <Controller
            name="sector"
            control={control}
            defaultValue={machinery.sector} // O objeto completo do setor deve ser passado aqui
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={sector}
                getOptionLabel={(opt) => opt.name}
                getOptionValue={(opt) => opt.id}
                placeholder="Setor"
                defaultValue={machinery.sectors} // O objeto completo do setor deve ser passado aqui
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
            defaultValue={machinery.equipment}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={equipment}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Equipamento"
                  defaultValue={machinery.equipment}
                />
              )
            }}
          ></Controller>
          <ErrorMenssage>{errors.equipment?.message}</ErrorMenssage>
        </div>

        <ButtonStyles>Editar Produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditMachinery
