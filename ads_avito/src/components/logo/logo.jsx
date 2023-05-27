import * as S from './logoStyle'
import logo from './img/Logo.png'
import logoMob from './img/LogoMob.png'

export function Logo() {
  return (
    <S.searchLogoLink href="#" target="_blank">
      <S.searchLogoImg src={logo} alt="logo" />
    </S.searchLogoLink>
  )
}
export function LogoMob() {
  return (
    <S.searchLogoMobLink href="#" target="_blank">
      <S.searchLogoMobImg src={logoMob} alt="logo" />
    </S.searchLogoMobLink>
  )
}
