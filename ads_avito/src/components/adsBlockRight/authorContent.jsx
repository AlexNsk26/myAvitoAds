import * as S from './styleAdsBlockRight'

function AuthorContent({ authorCont }) {
  return (
<S.authorContentDiv>
    <S.authorImgDiv>
        <S.authorImg src="" alt=""/>
    </S.authorImgDiv>
    <S.authorContentDataDiv>
        <S.authorContentDataName>{authorCont.name}</S.authorContentDataName>
        <S.authorContentDataAbout>{`Продает товары с ${authorCont.startDate}`}</S.authorContentDataAbout>
    </S.authorContentDataDiv>
</S.authorContentDiv>
  )
}
export default AuthorContent