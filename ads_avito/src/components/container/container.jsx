import { Children } from 'react'
import * as S from './containerStyle'

export function Container({ children }) {
  return (
    <S.wrapper>
      <S.container>{children}</S.container>
    </S.wrapper>
  )
}

export function MainContainer({ children, page }) {
  return <S.mainContainer page={page}>{children}</S.mainContainer>
}

export function MainDiv({ children }) {
  return <S.main>{children}</S.main>
}