import * as S from './footerStyle'
import logoHome from './img/icon_01.png'
import logoAdd from './img/icon_02.png'
import logoUser from './img/icon_03.png'
const arrImg = [
  { src: logoHome, alt: 'home', id: '1', ref:'/' },
  { src: logoAdd, alt: 'addAds', id: '2', ref:'/changeAds/new/0' },
  { src: logoUser, alt: 'userPage', id: '3', ref:'/profileUser' },
]
function FooterImg() {
  return arrImg.map(({ id, src, alt, ref }) => (
    <S.footerImg key={id}>
      <S.footerA  href={ref} target="_self">
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
