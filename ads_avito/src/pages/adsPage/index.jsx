import * as S from './styleAdsPage'
import { useNavigate, useParams } from 'react-router-dom'
import { Logo, LogoMob } from '../../components/logo/logo'
import mapSort from 'mapsort'
import BackBtn from '../../components/backBtn/backBtn'
import Header from '../../components/header/header'
import * as Wrapper from '../../components/container/container'
import MainSearch from '../../components/mainSearch/mainSearch'
import Footer from '../../components/footer/footer'
import {
  GetPageName,
  IsLogin,
  ConvertDate,
} from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import { AdsContainer } from '../../components/adsContainer/adsContainer'
import AdsCommentForm from '../../components/commentForm/commentForm'
import { RightBlock } from '../../components/adsBlockRight/adsBlockRight'
import DescAds from '../../components/adsDescr/adsDescr'
import LeftBlock from '../../components/adsBlockLeft/adsBlockLeft'
import {
  useGetAdsByIdQuery,
  useGetAllComByIdAdsQuery,
  usePostComByIdAdsMutation,
} from '../../services/queryApi'

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
import { useState } from 'react'

function AdsPage() {
  const namePage = GetPageName()
  const { idAds } = useParams()
  const navigate = useNavigate()
  const [showComments, setShowComments] = useState(false)


  const {
    data: dataAdsById,
    error: errorDataAdsById,
    isLoading: isLoadingDataAdsById,
  } = useGetAdsByIdQuery(idAds)
  const {
    data: dataCommentsAdsById,
    error: errorDataCommentsAdsById,
    isLoading: isLoadingDataCommentsAdsById,
    refetch,
  } = useGetAllComByIdAdsQuery(idAds)

  return (
    <Wrapper.Container>
      {showComments && (
        <AdsCommentForm
          idAds={idAds}
          dataComments={dataCommentsAdsById}
          isLogin={IsLogin()}
          setShowComments={setShowComments}
          refetchComments={refetch}
        />
      )}
      <Header>
        <HeaderBtnGroup isLogin={IsLogin()} />
      </Header>
      <Wrapper.MainDiv>
        <MainSearch>
          <Logo navigate={navigate} />
          <LogoMob navigate={navigate} />
          <BackBtn />
        </MainSearch>
        <Wrapper.MainContainer page={namePage}>
          {!isLoadingDataAdsById && (
            <AdsContainer>
              <LeftBlock barImgs={dataAdsById.images} />
              <RightBlock
                adsName={dataAdsById?.title}
                adsPrice={dataAdsById?.price}
                articleInfo={{
                  date: ConvertDate(dataAdsById.created_on),
                  city: dataAdsById.user.city ?? '',
                }}
                dataComments={dataCommentsAdsById}
                authorInfo={dataAdsById.user}
                namePage={namePage}
                phoneNum={dataAdsById.user.phone}
                isLogin={IsLogin()}
                setShowComments={setShowComments}
              />
            </AdsContainer>
          )}
          <DescAds descr={dataAdsById?.description} />
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default AdsPage
/* mapSort(
            dataCommentsAdsById,
            (value) => new Date(value),
            (a, b) => a - b
          ) */
