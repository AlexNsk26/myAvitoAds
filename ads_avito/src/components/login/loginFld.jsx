import * as S from './styleLogin'

function LoginFld({ type, name, id, placeholder, key }) {
  return (
    <S.inputFld
      key={key}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  )
}

export default LoginFld
