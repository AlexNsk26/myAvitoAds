import * as S from './headerStyle'

function Header({children}) {
  return (
    <S.header>
      <S.headerNav>{children}</S.headerNav>
    </S.header>
  )
}
export default Header