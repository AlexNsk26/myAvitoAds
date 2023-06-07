import styled, { css } from 'styled-components'

export const rightBlockTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1;
  }
`
export const articleInfo = styled.div`
  margin-bottom: 34px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`
export const articleDateCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`
export const articleLink = styled.a`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`
export const rightBlockPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`
export const editBtnBlock = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-direction:column;
    gap: 8px;
      }
`
export const authorContentDiv = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`
export const authorImgDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`
export const authorImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const authorContentDataDiv = styled.div`
  margin-left: 12px;
`

export const authorContentDataName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`
export const authorContentDataAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
  }
`
