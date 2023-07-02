import styled, { css } from 'styled-components'

export const searchLogoLink = styled.a`
  @media screen and (max-width: 590px) {
    display: none;
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
  @media screen and (max-width: 580px) {
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
export const mainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;

  @media screen and (max-width: 620px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1;
  }
  @media screen and (max-width: 580px) {
    margin-left: 20px;
  }
`
