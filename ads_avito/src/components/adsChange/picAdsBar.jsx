import * as S from './styleAdsChange'

function AdsAddPic({ index }) {
  return (
    <S.picImgGroup key={index}>
      <S.picImg src="" alt="" />
      <S.picImgCover />
    </S.picImgGroup>
  )
}
function ArrAdsAddPic({ qItems = 5 }) {
  let content = []
  for (let index = 1; index <= qItems; index++) {
    content.push(<AdsAddPic index={index} />)
  }
  return content
}

function FormBlockPic({}) {
  return (
    <S.formBlock>
      <S.formPicTitle>
        Фотографии товара
        <S.formPicTitleQuantity>не более 5 фотографий</S.formPicTitleQuantity>
        <S.formNewArtPicBar>
          <ArrAdsAddPic />
        </S.formNewArtPicBar>
      </S.formPicTitle>
    </S.formBlock>
  )
}
export default FormBlockPic
