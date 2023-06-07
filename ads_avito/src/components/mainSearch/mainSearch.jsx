import * as S from './mainSearchStyle'
function MainSearch({ children, page = '' }) {
  return <S.mainSearch page={page}>{children}</S.mainSearch>
}
export default MainSearch
