import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styleLogin'
import LogoLogin from './img/logoLogin.png'
import LogoLoginMob from './img/logoLogin.png'
import BtnLoginGroup from './buttonsGroup'
import LoginGroup from './loginFldsGroup'
import { loginGroup, signUpGroup } from './params'
import {
  usePostTokensLoginQuery,
  usePostSignUpQuery,
} from '../../services/queryApi'
import ErrorsGroup from './errorGroup'
import { BASE_URL } from '../../services/queryApi'

const GetInputParams = () => {
  const logForm = document.querySelector('form')
  let params = {}
  for (let index = 0; index < logForm.children.length; index++) {
    const element = logForm.children[index]
    if (element.localName === 'input') {
      params[element.name] = element.value
    }
  }
  return params
}
function LoginForm() {
  const [signUp, setSignUp] = useState(false)
  const [paswNotEqual, setPaswNotEqual] = useState(false)
  const [loginDataReq, setLoginDataReq] = useState({})
  const navigate = useNavigate()

  const {
    data: dataLogin,
    error: errorLogin,
    isLoading: isLoadingLogin,
  } = usePostTokensLoginQuery(
    { ...loginDataReq },
    { skip: loginDataReq.skip ?? true }
  )
  const {
    data: dataSignUp,
    error: errorSignUp,
    isLoading: isLoadingSignUp,
  } = usePostSignUpQuery(
    { ...loginDataReq },
    { skip: loginDataReq.skipSign ?? true }
  )
  const disabled = isLoadingLogin || isLoadingSignUp

  useEffect(() => {
    if (dataSignUp) {
      localStorage.setItem('loginData', JSON.stringify(dataSignUp))
      setLoginDataReq({
        skip: true,
        skipSign: true,
      })
      setSignUp(false)
    }
  }, [dataSignUp])
  useEffect(() => {
    if (dataLogin) {
      const { access_token, token_type } = dataLogin

      fetch(`${BASE_URL}user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token_type} ${access_token}`,
        },
      })
        .then((response) => {
          const data = response.text()
          return data
        })
        .then((result) => {
          localStorage.setItem('loginData', result)
        })

      sessionStorage.setItem(
        'tokens',
        JSON.stringify({ ...dataLogin, expireDate: new Date() })
      ) 
      navigate('/profileUser')
    }
  }, [dataLogin])
  function ComparePassword(firstPasw, secondPasw) {
    if (firstPasw !== secondPasw) {
      setPaswNotEqual(true)
      return true
    }
    return false
  }
  const SetLogDataRequestBtnLogin = () => {
    const params = GetInputParams()

    setLoginDataReq({
      email: params.login,
      password: params.password,
      skip: false,
      skipSign: true,
    })
  }
  const SetLogDataRequestBtnSignUp = () => {
    const params = GetInputParams()
    if (!ComparePassword(params.password, params.passwordSecond)) {
      setLoginDataReq({
        ...params,
        skip: true,
        skipSign: false,
      })
    }
  }
  return (
    <S.modalForm
      signUp={signUp}
      onSubmit={(e) => e.preventDefault()}
      id="formLogIn"
      action="#"
    >
      <S.modalLogo>
        <S.imgLogo src={LogoLogin} alt="logo" />
      </S.modalLogo>
      <LoginGroup
        setSignUp={setSignUp}
        arr={signUp ? signUpGroup : loginGroup}
      />
      {errorLogin && <ErrorsGroup erData={errorLogin} />}
      {paswNotEqual && <S.error>{'Пароли не совпадают'}</S.error>}
      <BtnLoginGroup
        disabled={disabled}
        clickBtnSignUp={SetLogDataRequestBtnSignUp}
        setLoginDataReq={setLoginDataReq}
        clickBtnLogin={SetLogDataRequestBtnLogin}
        signUpState={{ signUp, setSignUp }}
      />
    </S.modalForm>
  )
}

export default LoginForm
//
