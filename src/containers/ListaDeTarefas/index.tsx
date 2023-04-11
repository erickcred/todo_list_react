import Tarefa from '../../components/Tarefa'

import { Container } from './styles'

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>

      <ul>
        <li>
          <Tarefa
            titulo="Estudar React"
            prioridade="importante"
            status="importante"
            descricao="Iniciar Estudos Urgente"
          />
        </li>
        <li>
          <Tarefa
            titulo="Estudar Java"
            prioridade="urgente"
            status="urgente"
            descricao="Iniciar Estudos Urgente"
          />
        </li>
        <li>
          <Tarefa
            titulo="Estudar SpringBoot"
            prioridade="importante"
            status="pendente"
            descricao="Iniciar Estudos Urgente"
          />
        </li>
        <li>
          <Tarefa
            titulo="Estudar SqlServer"
            prioridade="importante"
            status="pendente"
            descricao="Iniciar Estudos Urgente"
          />
        </li>
        <li>
          <Tarefa
            titulo="Estudar MySql"
            prioridade="importante"
            status="pendente"
            descricao="Iniciar Estudos Urgente"
          />
        </li>
        <li>
          <Tarefa
            titulo="Estudar Java API"
            prioridade="importante"
            status="pendente"
            descricao="Iniciar Estudos Urgente"
          />
        </li>
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
