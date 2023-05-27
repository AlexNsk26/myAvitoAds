import styled, { css } from 'styled-components'

export const searchLogoLink = styled.a`
  @media screen and (max-width: 590px) {
    display: none;
  }
`
export const searchLogoImg = styled.img`
  width: 54px;
  height: auto;
`
export const searchLogoMobLink = styled.a`
  display: none;
  @media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`
export const searchLogoMobImg = styled.img`
  @media screen and (max-width: 590px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`
