import styled, { css } from 'styled-components'

export const articleImgDiv = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
  /// .article__img img
/*   width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover; */
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`
export const articleImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`
