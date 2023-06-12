import * as S from './styleLogin'
import { Button } from '../button/button'
import { reg, mob } from './params'

function BtnLogin({ clickBtnLogin, disabled }) {
  return (
    <Button.s18.blue disabled={disabled} onClick={clickBtnLogin} reg={reg} mob={mob} id="btnEnter">
      Войти
    </Button.s18.blue>
  )
}

export default BtnLogin
