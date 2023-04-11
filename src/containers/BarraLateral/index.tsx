import FiltroCard from '../../components/FiltroCard/index'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <>
      <S.Aside>
        <S.Campo type="text" placeholder="Burcar" />

        <S.Filtros>
          <FiltroCard contador={1} legenda="pendentes" />
          <FiltroCard contador={2} legenda="conclúidas" />
          <FiltroCard contador={4} legenda="urgentes" />
          <FiltroCard contador={0} legenda="importantes" />
          <FiltroCard contador={2} legenda="nomrmal" />
          <FiltroCard contador={10} legenda="todas" ativo={true} />
        </S.Filtros>
      </S.Aside>
    </>
  )
}

export default BarraLateral
