import * as S from './styleLogin'
import { Button } from '../button/button'
import { reg, mob } from './params'

export function BtnSignUpDark() {
  return (
    <Button.s18.blue reg={reg} mob={mob}>
      Зарегистрироваться
    </Button.s18.blue>
  )
}

export function BtnSignUpLight({ setSignUp }) {
  const onClickHandler = () => setSignUp((prev) => !prev)
  return (
    <Button.s18.white
      onClick={onClickHandler}
      reg={reg}
      mob={mob}
      border="1px solid #D9D9D9"
    >
      Зарегистрироваться
    </Button.s18.white>
  )
}
