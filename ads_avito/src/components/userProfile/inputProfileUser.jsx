import * as S from './userProfileStyle'

function InputFld({ field, complianceInputs, stateParams }) {
  return (
    <S.settingsDiv key={field.id}>
      <S.settingsLabel for={field.for}>{field.label}</S.settingsLabel>
      <S.settingsInput
        onChange={(e) =>
          stateParams[field.for].func(e.target.value)
        }
        id={field.idInp}
        name={field.for}
        type="text"
        value={
          stateParams[field.for].fieldState
            ? stateParams[field.for].fieldState
            : complianceInputs[field.for]
        }
        placeholder={field.placeholder}
      />
    </S.settingsDiv>
  )
}
function GetInpFields({ arrFields, loginData, complianceInputs, stateParams }) {
  return arrFields.map((field) =>
    InputFld({ field, complianceInputs, stateParams })
  )
}
export default GetInpFields
