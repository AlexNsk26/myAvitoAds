import * as S from './styleAdsDescr'
function DescAds({ descr }) {
  return (
    <S.mainContainer>
      <S.mainTitle>Описание товара</S.mainTitle>
      <S.mainContent>
        <S.mainText>{descr}</S.mainText>
      </S.mainContent>
    </S.mainContainer>
  )
}

export default DescAds
