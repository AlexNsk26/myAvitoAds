import styled, { css } from 'styled-components'

export const wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
  }
`
const pageStyles = {
  main: css`
    padding: 52px 10px 37px;
    @media screen and (max-width: 590px) {
      padding: 85px 10px 84px;
    }
  `,
  profileUser: css`
    padding: 52px 10px 79px;
    @media screen and (max-width: 590px) {
      padding: 85px 0px 84px;
    }
    @media screen and (max-width: 890px) {
      padding: 85px 0px 84px;
    }
  `,
  changeAds: css`
    background-color: #c4c4c4;
    height: 100vh;
    max-width: 100%;
  `,
}
export const mainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  ${({ page }) => pageStyles[page]}
`
export const main = styled.main``
