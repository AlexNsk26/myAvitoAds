import styled, { css } from 'styled-components'

export const cardsItem = styled.div`
  margin: 0;
  @media screen and (max-width: 590px) {
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`
export const card = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  @media screen and (max-width: 590px) {
    width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`
