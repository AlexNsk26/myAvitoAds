import * as S from './styleLogin'
import BtnLogin from './btnLogin'
import { BtnSignUpDark, BtnSignUpLight } from './btnSighUp'

function BtnLoginGroup({
  signUpState,
  clickBtnLogin,
  dispatch,
  setLoginDataReq,
  clickBtnSignUp,
  disabled,
}) {
  return (
    <S.btnGroup>
      {!signUpState.signUp && (
        <BtnLogin disabled={disabled} clickBtnLogin={clickBtnLogin} />
      )}
      {signUpState.signUp && (
        <BtnSignUpDark disabled={disabled} clickBtnSignUp={clickBtnSignUp} />
      )}
      {!signUpState.signUp && (
        <BtnSignUpLight
          disabled={disabled}
          setLoginDataReq={setLoginDataReq}
          dispatch={dispatch}
          setSignUp={signUpState.setSignUp}
        />
      )}
    </S.btnGroup>
  )
}

export default BtnLoginGroup
