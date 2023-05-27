import { Children } from 'react'
import * as S from './containerStyle'

function MainContainer({ children }) {
  return (
    <S.wrapper>
      <S.container>{children}</S.container>
    </S.wrapper>
  )
}
export default MainContainer