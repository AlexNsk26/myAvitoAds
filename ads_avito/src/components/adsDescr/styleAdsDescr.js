import styled, { css } from 'styled-components'

export const mainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`
export const mainTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
  }
`
export const mainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`
export const mainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`
