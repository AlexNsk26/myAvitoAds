import * as S from './userProfileStyle'
function InputFld( props ) {
  return (
    <S.settingsDiv key={props.id}>
      <S.settingsLabel for={props.for}>{props.label}</S.settingsLabel>
      <S.settingsInput
        id={props.idInp}
        name={props.for}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
      />
    </S.settingsDiv>
  )
}
 function GetInpFields({arrFields}) {
    return arrFields.map((field)=>InputFld(field))
 }
 export default GetInpFields