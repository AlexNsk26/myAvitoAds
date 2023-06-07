import * as S from './styleMainPage'
import { Button } from '../../components/button/button'
import { Logo, LogoMob } from '../../components/logo/logo'
import SearchForm from '../../components/search/search'
import Header from '../../components/header/header'
import MainSearch from '../../components/mainSearch/mainSearch'
import * as Wrapper from '../../components/container/container'
import AdsBigArr from '../../components/adsBig/adsBig'
import Footer from '../../components/footer/footer'
import { GetPageName } from '../../components/commonFunctions/commonFunc'
import { adsData } from '../../mockData/mockData'

function Main() {
  return (
    <Wrapper.Container>
      <Header>
        <Button.s16l.blue reg={{width:"224px", height:"40px"}} id="btnMainEnter">
          Вход в личный кабинет
        </Button.s16l.blue>
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo />
          <LogoMob />
          <SearchForm />
        </MainSearch>
        <Wrapper.MainContainer page={GetPageName()}>
          <S.mainH2>Объявления</S.mainH2>
          <S.contentCards>
            <AdsBigArr adsArr={adsData}></AdsBigArr>
          </S.contentCards>
          </Wrapper.MainContainer>
        </Wrapper.MainDiv>
      <Footer />
      </Wrapper.Container>
  )
}

export default Main
