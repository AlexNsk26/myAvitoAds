import * as S from './styleAdsChange'
import { useRef } from 'react'

function AdsAddPic({ index, skipImg, setImgBin, LoadImgMutation, idAds }) {
  const inputRef = useRef(null)

  const OnChangeFileBtnHandler = () => {
    const f = inputRef.current.files[0]
    if (f) {
      const reader = new FileReader()
      reader.onload = function (evt) {
        const metadata = `name: ${f.name}, type: ${f.type}, size: ${f.size}, contents:`
        const contents = evt.target.result
        //setImgBin(contents)
        const fDataImg = new FormData()
        fDataImg.append('file', contents)
        console.log(contents)
        console.log(fDataImg)
        LoadImgMutation({
          id: idAds,
          imgBin: fDataImg,
        })
        //console.log(metadata, contents)
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
      <S.picImg src="" alt="" />
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
}) {
  let content = []
  for (let index = 1; index <= qItems; index++) {
    content.push(
      <AdsAddPic
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

function FormBlockPic({ skipImg, ImgBin, LoadImgMutation, idAds }) {
  return (
    <S.formBlock>
      <S.formPicTitle>
        Фотографии товара
        <S.formPicTitleQuantity>не более 5 фотографий</S.formPicTitleQuantity>
        <S.formNewArtPicBar>
          <ArrAdsAddPic
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
