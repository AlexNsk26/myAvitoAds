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
`
export const contentCards = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: repeat(137px, 2); //  -ms-grid-columns: (137px)[2];
  grid-template-columns: repeat(2, 137px);
  grid-auto-rows: 293px;
  grid-gap: 10px 10px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`
