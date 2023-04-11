import styled from 'styled-components'

import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/ETarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFunto(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.mostarda
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  // if ('status' in props) {
  //   if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
  //   if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  // } else if ('prioridade' in props) {
  //   if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
  //   if (props.prioridade === enums.Prioridade.IMPORTANTE)
  //     return variaveis.mostarda
  // }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  padding: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornaCorDeFunto(props)};
  display: inline-block;
  border-radius: 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  margin-right: 16px;
  padding: 4px 8px;
`

export const Descricao = styled.textarea`
  background-color: transparent;
  border: none;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  line-height: 24px;
  margin: 16px 0;
  resize: none;
  width: 100%;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  background-color: #2f3640;
  border-radius: 8px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  padding: 8px 12px;
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
