import * as S from './styleLogin'
import BtnLogin from './btnLogin'
import { BtnSignUpDark, BtnSignUpLight } from './btnSighUp'

function BtnLoginGroup({ signUpState }) {
  return (
    <S.btnGroup>
      {!signUpState.signUp && <BtnLogin />}
      {signUpState.signUp && <BtnSignUpDark />}
      {!signUpState.signUp && (
        <BtnSignUpLight setSignUp={signUpState.setSignUp} />
      )}
    </S.btnGroup>
  )
}

export default BtnLoginGroup
