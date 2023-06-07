import styled, { css } from 'styled-components'

export const footer = styled.footer`
  display: none;
  @media screen and (max-width: 590px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  }
`
export const footerContainer = styled.div`
display: none;
  @media screen and (max-width: 590px) {
    width: 225px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`
export const footerImg = styled.div`
display: none;
  @media screen and (max-width: 590px) {
    width: 42px;
    height: 42px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`
export const footerImgImg = styled.img`
display: none;
  @media screen and (max-width: 590px) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const footerA = styled.a``
