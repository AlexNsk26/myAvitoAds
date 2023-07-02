import * as S from './userProfileStyle'
const CheckPhone = (phoneSting = '') => {
  let finalPhoneNumber = ''
  const arrPhone = phoneSting.replaceAll(' ', '').split('')
  const prefixPhoneN = arrPhone.slice(0, 2).join('')
  const mainPhoneN = arrPhone.slice(2)

  if (prefixPhoneN !== '+7') {
    return '+7'
  }
  finalPhoneNumber = mainPhoneN.reduce(
    function (accumulator, item, index, array) {
      if (index === 3 || index === 6 || index === 8) {
        return (accumulator = accumulator + ' ' + item)
      } else {
        return (accumulator = accumulator + item)
      }
    },
    [' ']
  )
  return (prefixPhoneN + finalPhoneNumber).length <= 16
    ? prefixPhoneN + finalPhoneNumber
    : (prefixPhoneN + finalPhoneNumber).slice(0, 16)
}
function InputFld({ field, complianceInputs, stateParams }) {
  const InvalidateFields = (e) => {
    let inputValue = e.target.value
    if (field.for === 'phone') {
      inputValue = CheckPhone(inputValue)
    } else {
      inputValue = inputValue.length > 30 ? inputValue.slice(0, 30) : inputValue
    }
    stateParams[field.for].func(inputValue)
  }
  return (
    <S.settingsDiv key={field.id}>
      <S.settingsLabel for={field.for}>{field.label}</S.settingsLabel>
      <S.settingsInput
        onChange={(e) => InvalidateFields(e)}
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
