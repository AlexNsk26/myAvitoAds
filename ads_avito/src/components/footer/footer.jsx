import * as S from './footerStyle'
import logoHome from './img/icon_01.png'
import logoAdd from './img/icon_02.png'
import logoUser from './img/icon_03.png'
const arrImg = [
  { src: logoHome, alt: 'home', id: '1' },
  { src: logoAdd, alt: 'addAds', id: '2' },
  { src: logoUser, alt: 'userPage', id: '3' },
]
function FooterImg() {
  return arrImg.map(({ id, src, alt }) => (
    <S.footerImg key={id}>
      <S.footerA href="" target="_self">
        <S.footerImgImg src={src} alt={alt} />
      </S.footerA>
    </S.footerImg>
  ))
}
function Footer() {
  return (
    <S.footer>
      <S.footerContainer>
        <FooterImg/>
      </S.footerContainer>
    </S.footer>
  )
}
export default Footer
