import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/ETarefa'
import Tarefa from '../../models/Tarefa'

const tarefas = [
  new Tarefa(
    1,
    'Estudar React',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Iniciar Estudos Urgente'
  ),
  new Tarefa(
    2,
    'Estudar Java',
    enums.Prioridade.URGENTE,
    enums.Status.PENDENTE,
    'Iniciar Estudos Urgente'
  ),
  new Tarefa(
    3,
    'Estudar SpringBoot',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Iniciar Estudos Urgente'
  ),
  new Tarefa(
    4,
    'Estudar SqlServer',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Iniciar Estudos Urgente'
  ),
  new Tarefa(
    5,
    'Estudar MySql',
    enums.Prioridade.NORMAL,
    enums.Status.PENDENTE,
    'Iniciar Estudos Urgente'
  ),
  new Tarefa(
    6,
    'Estudar Java API',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    'Iniciar Estudos Urgente'
  ),
  new Tarefa(
    7,
    'Estudar HTML',
    enums.Prioridade.IMPORTANTE,
    enums.Status.CONCLUIDA,
    'Iniciar Estudos Urgente'
  )
]

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: tarefas,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
