import * as S from './styleAdsBigOne'
import { BASE_URL } from '../../services/queryApi'

function OneBigAds({ src = '', alt = '' }) {
  return (
    <S.articleImgDiv>
      <S.articleImg src={BASE_URL + src} alt={alt} />
    </S.articleImgDiv>
  )
}

export default OneBigAds
