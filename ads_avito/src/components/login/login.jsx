import React, {useState} from 'react'
import * as S from './styleLogin'
import LogoLogin from './img/logoLogin.png'
import LogoLoginMob from './img/logoLogin.png'
import BtnLoginGroup from './buttonsGroup'
import LoginGroup from './loginFldsGroup'
const loginGroup = [
  {
    key: '1',
    type: 'text',
    name: 'login',
    id: 'formlogin',
    placeholder: 'email',
  },
  {
    key: '2',
    type: 'password',
    name: 'password',
    id: 'formpassword',
    placeholder: 'Пароль',
  },
]
const signUpGroup = [
    {
      key: '1',
      type: 'text',
      name: 'login',
      id: 'formlogin',
      placeholder: 'email',
    },
    {
      key: '2',
      type: 'password',
      name: 'password',
      id: 'passwordFirst',
      placeholder: 'Пароль',
    },
    {
        key: '3',
        type: 'password',
        name: 'password',
        id: 'passwordSecond',
        placeholder: 'Повторите пароль',
      },
      {
        key: '4',
        type: 'password',
        name: 'first-name',
        id: 'first-last',
        placeholder: 'Пароль',
      },
      {
        key: '5',
        type: 'password',
        name: 'first-last',
        id: 'formpassword',
        placeholder: 'Пароль',
      },
      {
        key: '6',
        type: 'password',
        name: 'password',
        id: 'formpassword',
        placeholder: 'Пароль',
      },
  ]
function LoginForm() {
    const [signUp,setSignUp] = useState(false)
  return (
    <S.modalForm id="formLogIn" action="#">
      <S.modalLogo>
        <S.imgLogo  src={LogoLogin} alt="logo" />
      </S.modalLogo>
      <LoginGroup arr={loginGroup} />
      <BtnLoginGroup signUp={signUp} />
    </S.modalForm>
  )
}

export default LoginForm
