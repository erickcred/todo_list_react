import FiltroCard from '../../components/FiltroCard/index'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <>
      <S.Aside>
        <S.Campo type="text" placeholder="Burcar" />

        <S.Filtros>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard ativo={true} />
        </S.Filtros>
      </S.Aside>
    </>
  )
}

export default BarraLateral
