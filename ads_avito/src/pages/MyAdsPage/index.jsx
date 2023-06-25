import * as S from './styleMyAdsPage'
import { Logo, LogoMob } from '../../components/logo/logo'
import { useNavigate } from 'react-router-dom'
import BackBtn from '../../components/backBtn/backBtn'
import Header from '../../components/header/header'
import * as Wrapper from '../../components/container/container'
import MainSearch from '../../components/mainSearch/mainSearch'
import Footer from '../../components/footer/footer'
import { GetPageName } from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import { AdsContainer } from '../../components/adsContainer/adsContainer'

import { RightBlock } from '../../components/adsBlockRight/adsBlockRight'
import DescAds from '../../components/adsDescr/adsDescr'
import LeftBlock from '../../components/adsBlockLeft/adsBlockLeft'
import AdsChangeForm from '../../components/adsChange/adsChange'
import AdsCommentForm from '../../components/commentForm/commentForm'
import { useGetAdsByIdQuery, useGetAllComByIdAdsQuery } from '../../services/queryApi'
import {
  barImgs,
  barImgsMob,
  adsName,
  articleInfo,
  authorInfo,
  adsPrice,
  descr,
  phoneNumHide,
} from '../../mockData/mockData'

function MyAdsPage() {
  const namePage = GetPageName()
  const navigate = useNavigate()
  return (
    <Wrapper.Container>
      <AdsCommentForm />
      <Header>
        <HeaderBtnGroup />
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo  />
          <LogoMob />
          <BackBtn />
        </MainSearch>
        <Wrapper.MainContainer page={namePage}>
          <AdsContainer>
            <LeftBlock barImgs={barImgs} barImgsMob={barImgsMob} />
            <RightBlock
              adsName={adsName}
              adsPrice={adsPrice}
              articleInfo={articleInfo}
              authorInfo={authorInfo}
              namePage={namePage}
              phoneNumHide={phoneNumHide}
            />
          </AdsContainer>
          <DescAds descr={descr} />
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default MyAdsPage
