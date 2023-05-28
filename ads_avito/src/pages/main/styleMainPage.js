import styled, { css } from 'styled-components'

export const main = styled.main``

export const mainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
  @media screen and (max-width: 590px) {
    padding: 85px 10px 84px;
  }
`
export const mainH2 = styled.h2`
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  font-weight: 500;
  font-size: 40px;
  line-height: 220%;
  color: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    &:hover::before {
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
      left: 13px;
      cursor: pointer;
    }
  }
`
export const mainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  right: 0;
  left: 0;
  top: 134px;
  bottom: 84px;
  @media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
  }
`
export const contentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: repeat(4, 270px);
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 922px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
  @media screen and (max-width: 1158px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(3, 270px);
    grid-template-columns: repeat(3, 270px);
  }
  @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 270px);
    grid-template-columns: repeat(2, 270px);
  }
  @media screen and (max-width: 590px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 137px);
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`
