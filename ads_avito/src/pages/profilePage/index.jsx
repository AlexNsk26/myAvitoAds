import * as S from './styleProfilePage'
import { useState } from 'react'
import { Logo, LogoMob } from '../../components/logo/logo'
import BackBtn from '../../components/backBtn/backBtn'
import Header from '../../components/header/header'
import * as Wrapper from '../../components/container/container'
import MainSearch from '../../components/mainSearch/mainSearch'
import AdsBigArr from '../../components/adsBig/adsBig'
import Footer from '../../components/footer/footer'
import {
  GetPageName,
  IsLogin,
  ConvertDate,
} from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import UserProfile from '../../components/userProfile/userProfile'
import {
  useGetAllAdsMyQuery,
  usePatchCurrentUserMutation,
  useGetCurrentUserQuery,
} from '../../services/queryApi'
import { CombineAllAdsData } from '../../components/commonFunctions/commonFunc'
import { profileUserFields } from '../../components/commonFunctions/commonFunc'
import { myAdsData, profileUserData } from '../../mockData/mockData'

function ProfileUserPage() {
  const namePage = GetPageName()
  const [name, setName] = useState(undefined)
  const [surname, setSurname] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [city, setCity] = useState(undefined)
  const stateParams = {
    fname: { fieldState: name, func: setName },
    lname: { fieldState: surname, func: setSurname },
    phone: { fieldState: phone, func: setPhone },
    city: { fieldState: city, func: setCity },
  }
  const {
    data: dataAdsAllMy,
    error: errorDataAdsAllMy,
    isLoading: isLoadingDataAdsAllMy,
  } = useGetAllAdsMyQuery()
  const {
    data: dataCurrentUser,
    error: errorCurrentUser,
    isLoading: isLoadingCurrentUser,
  } = useGetCurrentUserQuery()
  const [
    PatchCurrentUser,
    {
      data: dataPatchCurrentUser,
      error: errorPatchCurrentUser,
      isLoading: isLoadingPatchCurrentUser,
    },
  ] = usePatchCurrentUserMutation()

  // console.log(dataCurrentUser)
  const loginData = dataCurrentUser
    ? dataCurrentUser
    : JSON.parse(localStorage.getItem('loginData')) ?? {}
  const complianceInputs = {
    fname: loginData?.name ?? '',
    lname: loginData?.surname ?? '',
    city: loginData?.city ?? '',
    phone: loginData?.phone ?? '',
  }
  return (
    <Wrapper.Container>
      <Header>
        <HeaderBtnGroup isLogin={IsLogin()} />
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo />
          <LogoMob />
          <BackBtn />
        </MainSearch>
        <Wrapper.MainContainer page={namePage}>
          <UserProfile
            stateParams={stateParams}
            PatchCurrentUser={PatchCurrentUser}
            complianceInputs={complianceInputs}
            loginData={loginData}
            profileUserData={loginData?.name}
            profileUserFields={profileUserFields}
            namePage={namePage}
          />
          <S.mainTitle>Мои товары</S.mainTitle>
          <S.contentCards>
            <AdsBigArr adsArr={CombineAllAdsData(dataAdsAllMy)}></AdsBigArr>
          </S.contentCards>
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default ProfileUserPage
