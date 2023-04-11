import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/ETarefa'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaModel from '../../models/Tarefa'

type Props = TarefaModel

const Tarefa = ({
  id,
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    titulo,
                    prioridade,
                    status,
                    descricao
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
