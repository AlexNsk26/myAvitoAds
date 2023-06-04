import * as S from './userProfileStyle'
function TxtFld(props) {
  return <S.sellerInfoFld>{props.value}</S.sellerInfoFld>
}
function GetTxtFields({ arrFields }) {
  return arrFields.map((field) => TxtFld(field))
}
function TxtFldGroup({props}) {
  return (
    <S.sellerInfoGroup>
      <S.sellerTitleFld> {props.valueTltFld} </S.sellerTitleFld>
      <GetTxtFields arrFields={props.arrValueFlds}></GetTxtFields>
    </S.sellerInfoGroup>
  )
}
export default TxtFldGroup
