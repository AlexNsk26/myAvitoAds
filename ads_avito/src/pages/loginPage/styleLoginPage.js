import styled, { css } from 'styled-components'

export const containerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`

export const modalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 2;
    left: calc(50% - (320px / 2));
    top: 55px;
    opacity: 1;
  }
`
export const modalForm = styled.div`
  width: 366px;
  height: 439px;
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
  @media screen and (max-width: 768px) {
    width: 120px;
    height: auto;
  }
`
