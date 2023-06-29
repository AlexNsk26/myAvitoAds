import * as S from './styleAdsChange'
import { useRef } from 'react'
import { BASE_URL } from '../../services/queryApi'


function AdsAddPic({
  index,
  LoadImgMutation,
  idAds,
  srcImg,
}) {
  const inputRef = useRef(null)

  const OnChangeFileBtnHandler = () => {
    const f = inputRef.current.files[0]
    if (f) {
      const reader = new FileReader()
      reader.onload = function (evt) {
        LoadImgMutation({
          id: idAds,
          imgBin: f,
        })
      }
      reader.readAsDataURL(f)
    }
  }
  return (
    <S.picImgGroup key={index}>
      <S.inputFile
        ref={inputRef}
        onChange={(e) => OnChangeFileBtnHandler(e)}
        type="file"
        name="file"
      />
      <S.picImg src={BASE_URL+srcImg} alt="" />
      <S.picImgCover />
    </S.picImgGroup>
  )
}
function ArrAdsAddPic({
  qItems = 5,
  skipImg,
  setImgBin,
  LoadImgMutation,
  idAds,
  arrImgBin,
}) {
  let content = []
  for (let index = 1; index <= qItems; index++) {
    content.push(
      <AdsAddPic
        srcImg={
          arrImgBin.length > 0 && arrImgBin[index - 1]
            ? arrImgBin[index - 1].url
            : ''
        }
        LoadImgMutation={LoadImgMutation}
        idAds={idAds}
        skipImg={skipImg}
        index={index}
        setImgBin={setImgBin}
      />
    )
  }
  return content
}

function FormBlockPic({ skipImg, ImgBin, LoadImgMutation, idAds, arrImgBin }) {

  return (
    <S.formBlock>
      <S.formPicTitle>
        Фотографии товара
        <S.formPicTitleQuantity>не более 5 фотографий</S.formPicTitleQuantity>
        <S.formNewArtPicBar>
          <ArrAdsAddPic
            arrImgBin={arrImgBin}
            idAds={idAds}
            LoadImgMutation={LoadImgMutation}
            skipImg={skipImg.setSkipAddImg}
            setImgBin={ImgBin.setImgBin}
          />
        </S.formNewArtPicBar>
      </S.formPicTitle>
    </S.formBlock>
  )
}
export default FormBlockPic
