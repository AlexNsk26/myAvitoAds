import * as S from './userProfileStyle'
import { ConvertDate } from '../commonFunctions/commonFunc'
function TxtFld(props) {
  return <S.sellerInfoFld>{props.value}</S.sellerInfoFld>
}
function GetTxtFields({ arrFields }) {
  return arrFields.map((field) => TxtFld(field))
}
function TxtFldGroup({ sellerFields }) {
  let arrFlds = []
  arrFlds.push({ value: sellerFields?.city ?? '' })
  arrFlds.push({ value: ConvertDate(sellerFields?.sells_from) ?? '' })
  return (
    <S.sellerInfoGroup>
      <S.sellerTitleFld>
        {' '}
        {sellerFields?.name + ' ' + sellerFields?.surname}{' '}
      </S.sellerTitleFld>
      <GetTxtFields arrFields={arrFlds}></GetTxtFields>
    </S.sellerInfoGroup>
  )
}
export default TxtFldGroup
