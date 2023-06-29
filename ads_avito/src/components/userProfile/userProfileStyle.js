import styled, { css } from 'styled-components'

export const container = styled.div``
export const invitation = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-top: 43px;
  margin-bottom: 30px;
  @media screen and (max-width: 590px) {
    padding-left: 20px;
    padding-top: 20px;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`
export const mainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 590px) {
    width: 100%;
    padding: 0 0 40px;
  }
`
export const profileContent = styled.div`
  max-width: 834px;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`
export const profileTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 620px) {
    font-size: 18px;
    line-height: 1;
  }
  @media screen and (max-width: 580px) {
    padding-left: 20px;
  }
`
export const profileTitleSeller = styled.h2`
  margin-top: 43px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  /*   &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  } */
  @media screen and (max-width: 580px) {
    margin-top: 70px;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;
    /*     &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    } */
  }
`
export const profileSettings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;

  @media screen and (max-width: 830px) {
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 580px) {
    align-items: center;
    flex-direction: column;
  }
`
export const settingsLeft = styled.div`
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
  margin-right: 43px;
  @media screen and (max-width: 620px) {
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
    margin-right: 0;
  }
  @media screen and (max-width: 580px) {
    display: ${({ namePage }) =>
      namePage === 'profileSeller' ? 'none' : 'block'};
  }
`
export const settingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`
export const settingsProfileA = styled.a``
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const settingsChangePhoto = styled.label`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;
  color: #009ee4;
`
export const settingsChangePhotoInput = styled.input`
display: none;
`
export const settingsRight = styled.div`
  width: 380px;
  @media screen and (max-width: 840px) {
    width: 280px;
    padding-left: 15px;
  }
  @media screen and (max-width: 620px) {
    width: 230px;
  }
`
export const settingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media screen and (max-width: 830px) {
    width: 100%;
  }
  @media screen and (max-width: 620px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`
export const settingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 620px) {
    width: 100%;
    display: inline-block;
    margin: 0 7px 20px;
  }
`
export const settingsLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`
export const settingsInput = styled.input`
  background-color: #ffffff;
  width: 300px;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    border-radius: 30px;
    padding: 9px 17px;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const saveProfileBtn = styled.div`
  margin: 10px 7px 0;
  @media screen and (max-width: 620px) {
    margin: 0px 8px 0;
  }
`

export const sellerTitleFld = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  @media screen and (max-width: 580px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`
export const sellerInfoFld = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`
export const sellerInfoGroup = styled.div``
export const sellerPhoneGroup = styled.div`
  width: 212px;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`
export const imgSellerMob = styled.div`
  display: none;
  @media screen and (max-width: 580px) {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`
