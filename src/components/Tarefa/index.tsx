import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: 'importante' | 'urgente'
  status: 'pendente' | 'conclúida' | 'urgente' | 'importante' | 'normal'
  descricao: string
}

const Tarefa = ({
  titulo,
  prioridade: categoria,
  status,
  descricao
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{categoria}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao value={descricao}></S.Descricao>

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar>Remover</S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
