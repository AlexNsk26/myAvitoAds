import * as S from './styleAdsImgBar'
import { BASE_URL } from '../../services/queryApi'

function OneSmallAds({ url = '', alt = '', id }) {
  return (
    <S.articleImgBarDiv key={id}>
      <S.articleImgBarImg src={BASE_URL + url} alt={alt} />
    </S.articleImgBarDiv>
  )
}
function OneCircleAdsMob(onClick, idActive, { id, url = '' }) {
  return <S.imgCircleMob data-id={id} onClick={(e)=>onClick(e)} key={id} active={id === idActive} />
}
export function SmallAdsBar({ arrSmallImg = [] }) {
  return arrSmallImg.map((img) => OneSmallAds(img))
}

export function AdsBarMob({ onClick, idActive, arrCircle = [] }) {
  return <>{arrCircle.map((img) => OneCircleAdsMob(onClick, idActive, img))}</>
}
