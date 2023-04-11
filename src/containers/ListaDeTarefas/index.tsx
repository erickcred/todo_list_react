import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar React',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Iniciar Estudos Urgente'
  },
  {
    titulo: 'Estudar Java',
    prioridade: 'urgente',
    status: 'pendente',
    descricao: 'Iniciar Estudos Urgente'
  },
  {
    titulo: 'Estudar SpringBoot',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Iniciar Estudos Urgente'
  },
  {
    titulo: 'Estudar SqlServer',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Iniciar Estudos Urgente'
  },
  {
    titulo: 'Estudar MySql',
    prioridade: 'normal',
    status: 'pendente',
    descricao: 'Iniciar Estudos Urgente'
  },
  {
    titulo: 'Estudar Java API',
    prioridade: 'importante',
    status: 'pendente',
    descricao: 'Iniciar Estudos Urgente'
  },
  {
    titulo: 'Estudar HTML',
    prioridade: 'importante',
    status: 'concluída',
    descricao: 'Iniciar Estudos Urgente'
  }
]

const ListaDeTarefas = () => {
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
