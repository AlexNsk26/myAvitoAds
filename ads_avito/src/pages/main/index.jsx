import * as S from './styleMainPage'
import { Button } from '../../components/button/button'
import { Logo, LogoMob } from '../../components/logo/logo'
import SearchForm from '../../components/search/search'
import Header from '../../components/header/header'
import MainSearch from '../../components/mainSearch/mainSearch'
import MainContainer from '../../components/container/container'
import AdsBigArr from '../../components/adsBig/adsBig'
import Footer from '../../components/footer/footer'
import { adsData } from '../../mockData/mockData'

function Main() {
  return (
    <MainContainer>
      <Header>
        <Button.s16l.blue width="224px" height="40px" id="btnMainEnter">
          Вход в личный кабинет
        </Button.s16l.blue>
      </Header>
      <S.main>
        <MainSearch>
          <Logo />
          <LogoMob />
          <SearchForm />
        </MainSearch>
        <S.mainContainer>
          <S.mainH2>Объявления</S.mainH2>
          <S.contentCards>
            <AdsBigArr adsArr={adsData}></AdsBigArr>
          </S.contentCards>
        </S.mainContainer>
      </S.main>
      <Footer />
    </MainContainer>
  )
}

export default Main
