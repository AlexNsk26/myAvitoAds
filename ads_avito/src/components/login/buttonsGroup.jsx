import * as S from './styleLogin'
import BtnLogin from './btnLogin'
import { BtnSignUpDark, BtnSignUpLight } from './btnSighUp'

function BtnLoginGroup({ signUp }) {
  return (
    <S.btnGroup>
      {!signUp && <BtnLogin />}
      {signUp && <BtnSignUpDark />}
      {!signUp && <BtnSignUpLight />}
    </S.btnGroup>
  )
}

export default BtnLoginGroup
