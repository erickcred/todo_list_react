import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard/index'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <S.Aside>
        <div>
          <S.Campo
            type="text"
            placeholder="Burcar"
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />

          <S.Filtros>
            <FiltroCard contador={1} legenda="pendentes" />
            <FiltroCard contador={2} legenda="conclúidas" />
            <FiltroCard contador={4} legenda="urgentes" />
            <FiltroCard contador={0} legenda="importantes" />
            <FiltroCard contador={2} legenda="nomrmal" />
            <FiltroCard contador={10} legenda="todas" ativo={true} />
          </S.Filtros>
        </div>
      </S.Aside>
    </>
  )
}

export default BarraLateral
