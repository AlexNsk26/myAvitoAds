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
export const cardsImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  @media screen and (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`
export const aRef = styled.a``
export const aImg = styled.img``
export const cardContent = styled.div``

export const cardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 590px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`
export const cardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  &::after {
    content: '   ₽';
    font-size: 18px;
    font-weight: 400;
  }
  @media screen and (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const cardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`
export const cardPlace = styled(cardDate)`
  margin-bottom: 4px;
`
