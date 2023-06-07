import * as S from './styleAdsImgBar'

function OneSmallAds({ src = '', alt = '', id }) {
  return (
    <S.articleImgBarDiv key={id}>
      <S.articleImgBarImg src={src} alt={alt} />
    </S.articleImgBarDiv>
  )
}
function OneCircleAdsMob({ active = false, id }) {
  return <S.imgCircleMob key={id} active={active} />
}
export function SmallAdsBar({ arrSmallImg = [] }) {
  return arrSmallImg.map((img) => OneSmallAds(img))
}

export function AdsBarMob({ arrCircle = [] }) {
    return arrCircle.map((img) => OneCircleAdsMob(img))
  }