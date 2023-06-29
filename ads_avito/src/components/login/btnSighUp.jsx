import * as S from './styleLogin'
import { Button } from '../button/button'
import { reg, mob } from './params'

export function BtnSignUpDark({ clickBtnSignUp, disabled }) {
  return (
    <Button.s18.blue
      disabled={disabled}
      onClick={() => clickBtnSignUp()}
      reg={reg}
      mob={mob}
    >
      Зарегистрироваться
    </Button.s18.blue>
  )
}

export function BtnSignUpLight({ setSignUp, setLoginDataReq, disabled }) {
  const onClickHandler = () => {
    setLoginDataReq({ skip: true })

    setSignUp((prev) => !prev)
  }
  return (
    <Button.s18.white
      disabled={disabled}
      onClick={onClickHandler}
      reg={reg}
      mob={mob}
      border="1px solid #D9D9D9"
    >
      Зарегистрироваться
    </Button.s18.white>
  )
}
