import * as S from './styleMainPage'
import { Logo, LogoMob } from '../../components/logo/logo'
import { useNavigate } from 'react-router-dom'
import SearchForm from '../../components/search/search'
import Header from '../../components/header/header'
import MainSearch from '../../components/mainSearch/mainSearch'
import * as Wrapper from '../../components/container/container'
import AdsBigArr from '../../components/adsBig/adsBig'
import Footer from '../../components/footer/footer'
import {
  GetPageName,
  IsLogin,
  ConvertDate,
} from '../../components/commonFunctions/commonFunc'
import { adsData } from '../../mockData/mockData'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import { BASE_URL, useGetAllAdsQuery } from '../../services/queryApi'
const CombineAllAdsData = (arrData = []) => {
  return arrData.map((ads) => {
    const { id, title, price, place, created_on, images } = ads
    return {
      id,
      title,
      price,
      place: 'Неизвестено',
      date: ConvertDate(created_on),
      src: images[0]?.url,
    }
  })
}
function Main() {
  const navigate = useNavigate()
  const {
    data: dataAdsAll,
    error: errorDataAdsAll,
    isLoading: isLoadingDataAdsAll,
  } = useGetAllAdsQuery()
  console.log(CombineAllAdsData(dataAdsAll))
  console.log(dataAdsAll)
  return (
    <Wrapper.Container>
      <Header>
        <HeaderBtnGroup navigate={navigate} isLogin={IsLogin()} />
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo navigate={navigate} />
          <LogoMob navigate={navigate} />
          <SearchForm />
        </MainSearch>
        <Wrapper.MainContainer page={GetPageName()}>
          <S.mainH2>Объявления</S.mainH2>
          <S.contentCards>
            <AdsBigArr adsArr={CombineAllAdsData(dataAdsAll)}></AdsBigArr>
          </S.contentCards>
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}

export default Main
