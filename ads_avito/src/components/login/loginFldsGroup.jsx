import * as S from './styleLogin'
import LoginFld from './loginFld'

function FldsLoginGroup({arr}) {
  return arr.map((fld) => (
    <LoginFld
      type={fld.type}
      name={fld.name}
      id={fld.id}
      placeholder={fld.placeholder}
      key={fld.key}
    />
  ))
}

function LoginGroup({arr = []}) {
  return (
    <>
      <FldsLoginGroup arr={arr} />
    </>
  )
}
export default LoginGroup
