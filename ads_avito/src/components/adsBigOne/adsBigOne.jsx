import * as S from './styleAdsBigOne'

function OneBigAds({ src = '', alt = '' }) {
  return (
    <S.articleImgDiv>
      <S.articleImg src={src} alt={alt} />
    </S.articleImgDiv>
  )
}

export default OneBigAds