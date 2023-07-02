import * as S from './styleAdsImgBar'
import { BASE_URL } from '../../services/queryApi'

function OneSmallAds({ src = '', alt = '', id, changeMainPic, indexPic }) {
  return (
    <S.articleImgBarDiv onClick={() => changeMainPic(indexPic)} key={id}>
      <S.articleImgBarImg src={BASE_URL + src} alt={alt} />
    </S.articleImgBarDiv>
  )
}
function OneCircleAdsMob(onClick, idActive, indexPic, { id, url = '' }) {
  return (
    <S.imgCircleMob
      data-id={id}
      onClick={() => onClick(indexPic)}
      key={id}
      activeAds={id === idActive}
    />
  )
}
export function SmallAdsBar({ changeMainPic, arrSmallImg = [] }) {
  return arrSmallImg.map((img, indexPic) =>
    OneSmallAds({ ...img, changeMainPic, indexPic })
  )
}

export function AdsBarMob({ onClick, idActive, arrCircle = [] }) {
  return (
    <>
      {arrCircle.map((img, indexPic) =>
        OneCircleAdsMob(onClick, idActive, indexPic, img)
      )}
    </>
  )
}
