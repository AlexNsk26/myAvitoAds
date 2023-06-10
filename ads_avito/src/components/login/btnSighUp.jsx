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

export function BtnSignUpLight() {
  return (
    <Button.s18.white reg={reg} mob={mob} border="1px solid #D9D9D9">
      Зарегистрироваться
    </Button.s18.white>
  )
}
