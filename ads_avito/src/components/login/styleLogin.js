import styled, { css } from 'styled-components'
import LogoLogin from './img/logoLogin.png'
import LogoLoginMob from './img/logoLogin.png'

export const modalForm = styled.form`
  width: 366px;
  height: ${({ signUp }) => (signUp ? '647px' : '439px')};
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 47px 47px 40px;
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 40px 20px;
  }
`

export const modalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`
export const imgLogo = styled.img`
  width: 140px;
  height: auto;

  //src: url('/img/logoLogin.png');
  @media screen and (max-width: 768px) {
    width: 120px;
    height: auto;
    //src: url('./img/logoLoginMob.png');
  }
`
export const inputFld = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;
    &::-webkit-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &:-ms-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &::-ms-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`
export const btnGroup = styled.div`
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const errorGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const error = styled.p`
color: red;
`

export const errorStatus = styled.h4``
