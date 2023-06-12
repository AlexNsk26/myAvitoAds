import * as S from './logoStyle'
import logo from './img/Logo.png'
import logoMob from './img/LogoMob.png'

export function Logo({ navigate }) {
  return (
    <S.searchLogoLink onClick={() => navigate('/')} href="#" target="_self">
      <S.searchLogoImg src={logo} alt="logo" />
    </S.searchLogoLink>
  )
}
export function LogoMob({ navigate }) {
  return (
    <S.searchLogoMobLink onClick={() => navigate('/')} href="#" target="_self">
      <S.searchLogoMobImg src={logoMob} alt="logo" />
    </S.searchLogoMobLink>
  )
}
