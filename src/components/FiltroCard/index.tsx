import React from 'react'
import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = ({ ativo }: Props) => {
  return (
    <>
      <S.Card ativo={ativo}>
        <S.Contador>3</S.Contador>
        <S.Label>pendente</S.Label>
      </S.Card>
    </>
  )
}

export default FiltroCard
