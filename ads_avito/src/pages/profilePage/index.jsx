import * as S from './styleProfilePage'
import { Logo, LogoMob } from '../../components/logo/logo'
import BackBtn from '../../components/backBtn/backBtn'
import Header from '../../components/header/header'
import * as Wrapper from '../../components/container/container'
import MainSearch from '../../components/mainSearch/mainSearch'
import AdsBigArr from '../../components/adsBig/adsBig'
import Footer from '../../components/footer/footer'
import { GetPageName } from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import UserProfile from '../../components/userProfile/userProfile'
import { myAdsData, profileUserData, profileUserFields } from '../../mockData/mockData'

function ProfileUserPage() {
  const namePage = GetPageName();
  return (
    <Wrapper.Container>
      <Header>
        <HeaderBtnGroup />
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo />
          <LogoMob />
          <BackBtn />
        </MainSearch>
        <Wrapper.MainContainer page={namePage}>
            <UserProfile profileUserData={profileUserData} profileUserFields={profileUserFields} namePage={namePage}/>
            <S.mainTitle>Мои товары</S.mainTitle>
          <S.contentCards>
            <AdsBigArr adsArr={myAdsData}></AdsBigArr>
          </S.contentCards>
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default ProfileUserPage
