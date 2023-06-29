import * as S from './styleProfileSellerPage'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Logo, LogoMob } from '../../components/logo/logo'
import BackBtn from '../../components/backBtn/backBtn'
import Header from '../../components/header/header'
import * as Wrapper from '../../components/container/container'
import MainSearch from '../../components/mainSearch/mainSearch'
import AdsBigArr from '../../components/adsBig/adsBig'
import Footer from '../../components/footer/footer'
import { GetPageName, CombineAllAdsData, GetTokensAccess } from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import UserProfile from '../../components/userProfile/userProfile'
import { useGetAllUsersQuery, useGetAllAdsQuery } from '../../services/queryApi'
import { useSelector } from 'react-redux'
import { getAllAdsSelector } from '../../store/selectors'

function ProfileSellerPage() {
  useEffect(() => {
    GetTokensAccess()
  }, [])
  const namePage = GetPageName()
  const { userId } = useParams()
  const allAdsSelector = useSelector(getAllAdsSelector)
  const {
    data: dataAllUsers,
    error: errorAllUsers,
    isLoading: isLoadingAllUsers,
  } = useGetAllUsersQuery()
  const {
    data: dataAdsAll,
    error: errorDataAdsAll,
    isLoading: isLoadingDataAdsAll,
  } = useGetAllAdsQuery()
  console.log(allAdsSelector)
  const sellerUser = dataAllUsers?.find((user) => user.id === Number(userId))

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
          <UserProfile
          avatar={sellerUser?.avatar}
            sellerPhone={sellerUser?.phone}
            sellerFields={sellerUser}
            namePage={namePage}
          />
          <S.mainTitle>Товары продавца</S.mainTitle>
          <S.contentCards>
            <AdsBigArr adsArr={CombineAllAdsData(dataAdsAll?.filter((ads)=>ads.user_id===sellerUser.id))}></AdsBigArr>
          </S.contentCards>
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default ProfileSellerPage
