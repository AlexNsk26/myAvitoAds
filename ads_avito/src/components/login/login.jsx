import React, { useState } from 'react'
import * as S from './styleLogin'
import LogoLogin from './img/logoLogin.png'
import LogoLoginMob from './img/logoLogin.png'
import BtnLoginGroup from './buttonsGroup'
import LoginGroup from './loginFldsGroup'
import { loginGroup, signUpGroup } from './params'

function LoginForm() {
  const [signUp, setSignUp] = useState(false)
  return (
    <S.modalForm signUp={signUp} id="formLogIn" action="#">
      <S.modalLogo>
        <S.imgLogo src={LogoLogin} alt="logo" />
      </S.modalLogo>
      <LoginGroup setSignUp={setSignUp} arr={signUp ? signUpGroup : loginGroup} />
      <BtnLoginGroup signUpState={{signUp,setSignUp}} />
    </S.modalForm>
  )
}

export default LoginForm
//
