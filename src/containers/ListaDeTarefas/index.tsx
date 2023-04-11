import { useSelector } from 'react-redux/es/exports'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
// import * as enums from '../../utils/enums/ETarefa'
import { RootReducer } from '../../store'

// const tarefas = [
//   {
//     titulo: 'Estudar React',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE,
//     descricao: 'Iniciar Estudos Urgente'
//   },
//   {
//     titulo: 'Estudar Java',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.PENDENTE,
//     descricao: 'Iniciar Estudos Urgente'
//   },
//   {
//     titulo: 'Estudar SpringBoot',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE,
//     descricao: 'Iniciar Estudos Urgente'
//   },
//   {
//     titulo: 'Estudar SqlServer',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE,
//     descricao: 'Iniciar Estudos Urgente'
//   },
//   {
//     titulo: 'Estudar MySql',
//     prioridade: enums.Prioridade.NORMAL,
//     status: enums.Status.PENDENTE,
//     descricao: 'Iniciar Estudos Urgente'
//   },
//   {
//     titulo: 'Estudar Java API',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE,
//     descricao: 'Iniciar Estudos Urgente'
//   },
//   {
//     titulo: 'Estudar HTML',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.CONCLUIDA,
//     descricao: 'Iniciar Estudos Urgente'
//   }
// ]

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>

      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
