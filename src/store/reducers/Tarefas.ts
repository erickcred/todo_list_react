import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/ETarefa'
import Tarefa from '../../models/Tarefa'

type TarefasState = {
  items: Tarefa[]
}
const initialState: TarefasState = {
  items: [
    {
      id: 1,
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Iniciar Estudos Urgente'
    },
    {
      id: 2,
      titulo: 'Estudar Java',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Iniciar Estudos Urgente'
    },
    {
      id: 3,
      titulo: 'Estudar SpringBoot',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Iniciar Estudos Urgente'
    },
    {
      id: 4,
      titulo: 'Estudar SqlServer',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Iniciar Estudos Urgente'
    },
    {
      id: 5,
      titulo: 'Estudar MySql',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Iniciar Estudos Urgente'
    },
    {
      id: 6,
      titulo: 'Estudar Java API',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Iniciar Estudos Urgente'
    },
    {
      id: 7,
      titulo: 'Estudar HTML',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Iniciar Estudos Urgente'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
