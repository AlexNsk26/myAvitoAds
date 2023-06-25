import styled, { css } from 'styled-components'

export const articleImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  /// .article__img img
/*   width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover; */
`
export const articleImgBarImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
export const imgCircleMob = styled.div`
  background-color: ${({ activeAds }) => (activeAds ? '#ffffff' : '')};
  &:active {
    background-color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }
`
