import styled from 'styled-components'

import { Props } from '.'

// Omit
type PropsGenerica = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsGenerica>`
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  padding: 8px;
`

export const Contador = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`

export const Label = styled.span`
  display: block;
  font-size: 14px;
`
