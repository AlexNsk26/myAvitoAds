import * as S from './styleAdsBlockRight'
import { periodsM } from '../commonFunctions/commonFunc'
import { BASE_URL } from '../../services/queryApi'
const ConvertDateUser = (dateUser) => {
  const dateObj = new Date(dateUser)
  const month = periodsM[dateObj.getMonth()]
  return month + ' ' + String(dateObj.getFullYear())
}
function AuthorContent({ authorCont }) {
  return (
    <S.authorContentDiv>
      <S.authorImgDiv>
        <S.authorImg src={BASE_URL + authorCont.avatar ?? ''} alt="" />
      </S.authorImgDiv>
      <S.authorContentDataDiv>
        <S.authorContentDataName>{authorCont.name}</S.authorContentDataName>
        <S.authorContentDataAbout>{`Продает товары с ${ConvertDateUser(
          authorCont.sells_from
        )}`}</S.authorContentDataAbout>
      </S.authorContentDataDiv>
    </S.authorContentDiv>
  )
}
export default AuthorContent
