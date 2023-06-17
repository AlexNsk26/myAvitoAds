import * as S from './styleAdsContainer'

export function AdsContainer({ children }) {
  return (
    <S.mainArticle>
      <S.articleContent>{children}</S.articleContent>
    </S.mainArticle>
  )
}

export function AdsBlockLeft({ children }) {
  return <S.articleBlockLeft>{children} </S.articleBlockLeft>
}

export function AdsBlockRight({ children }) {
  return <S.articleBlockRight>{children} </S.articleBlockRight>
}

export function AdsContentRight({ children }) {
  return <S.articleContentRight>{children} </S.articleContentRight>
}

export function AdsBlockImg({ children }) {
  return <S.articleBlockImg>{children} </S.articleBlockImg>
}

export function AdsImgBar({ children }) {
  return <S.articleImgBar>{children} </S.articleImgBar>
}

export function AdsImgBarMob({ children }) {
  return <S.articleImgBarMob>{children} </S.articleImgBarMob>
}
