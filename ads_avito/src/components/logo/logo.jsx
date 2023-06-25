import * as S from './logoStyle'
import { useNavigate } from 'react-router-dom'
import logo from './img/Logo.png'
import logoMob from './img/LogoMob.png'

export function Logo() {
  const navigate = useNavigate()
  return (
    <S.searchLogoLink onClick={() => navigate('/')} href="#" target="_self">
      <S.searchLogoImg src={logo} alt="logo" />
    </S.searchLogoLink>
  )
}
export function LogoMob() {
  const navigate = useNavigate()
  return (
    <S.searchLogoMobLink onClick={() => navigate('/')} href="#" target="_self">
      <S.searchLogoMobImg src={logoMob} alt="logo" />
    </S.searchLogoMobLink>
  )
}
