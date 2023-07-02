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
  CombineAllAdsData,
  GetTokensAccess
} from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import {
  useGetAllAdsQuery,
} from '../../services/queryApi'
import { useState, useEffect } from 'react'

function Main() {
  useEffect(() => {
    GetTokensAccess()
  }, [])
  const navigate = useNavigate()
  const [find, setFind] = useState(false)
  const [render, setRender] = useState(false)
  const FilteredAds = (arrAds) => {
    let responseFiltered = arrAds
    const textSearch = document.getElementsByName('search')[0]?.value ?? ''
    const textSearchMob =
      document.getElementsByName('search-mob')[0]?.value ?? ''
    const combTextSearch = textSearch + textSearchMob
    if (find && combTextSearch !== '') {
      const regexLiteral = new RegExp(combTextSearch.toLocaleLowerCase(), 'i')
      responseFiltered = responseFiltered.filter((ads) =>
        regexLiteral.test(ads.title.toLocaleLowerCase())
      )
    }
    return responseFiltered
  }
  const {
    data: dataAdsAll,
    error: errorDataAdsAll,
    isLoading: isLoadingDataAdsAll,
  } = useGetAllAdsQuery()

  return (
    <Wrapper.Container>
      <Header>
        <HeaderBtnGroup isLogin={IsLogin()} />
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo />
          <LogoMob />
          <SearchForm setFind={setFind} setRender={setRender}/>
        </MainSearch>
        <Wrapper.MainContainer page={GetPageName()}>
          <S.mainH2>Объявления</S.mainH2>
          <S.contentCards>
            <AdsBigArr
              adsArr={FilteredAds(CombineAllAdsData(dataAdsAll))}
            ></AdsBigArr>
          </S.contentCards>
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}

export default Main
