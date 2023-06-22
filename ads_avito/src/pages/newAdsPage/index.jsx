import * as S from './styleNewAdsPage'

import { useParams, useNavigate } from 'react-router-dom'
import { Logo, LogoMob } from '../../components/logo/logo'
import BackBtn from '../../components/backBtn/backBtn'
import Header from '../../components/header/header'
import * as Wrapper from '../../components/container/container'
import MainSearch from '../../components/mainSearch/mainSearch'
import AdsChangeForm from '../../components/adsChange/adsChange'
import Footer from '../../components/footer/footer'
import { GetPageName } from '../../components/commonFunctions/commonFunc'
import HeaderBtnGroup from '../../components/headerBtnGroup/headerBtnGroup'
import {
  usePostNewAdsTextQuery,
  usePostLoadImgMutation,
} from '../../services/queryApi'
import {
  myAdsData,
  profileUserData,
  profileUserFields,
} from '../../mockData/mockData'
import { useState, useEffect } from 'react'

function ChangeFormAds() {
  const namePage = GetPageName()
  const navigate = useNavigate()
  const { type } = useParams()
  const [skipNewAds, setSkipNewAds] = useState(true)
  const [skipAddImg, setSkipAddImg] = useState(true)
  const [imgBin, setImgBin] = useState(undefined)
  const [title, setTitle] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [price, setPrice] = useState(undefined)
  const stateParams = {
    skip: { skipNewAds, setSkipNewAds },
    skipImg: { skipAddImg, setSkipAddImg },
    img: { imgBin, setImgBin },
    title: { title, setTitle },
    img: { imgBin, setImgBin },
    description: { description, setDescription },
    price: { price, setPrice },
  }

  const {
    data: dataNewAds,
    error: errorNewAds,
    isLoading: isLoadingNewAds,
  } = usePostNewAdsTextQuery(
    { title, description, price },
    { skip: skipNewAds }
  )

  const [
    LoadImgMutation,
    { data: dataImgBin, error: errorImgBin, isLoading: isLoadingImgBin },
  ] = usePostLoadImgMutation()
  useEffect(() => {
    if (dataNewAds) {
      //setSkipNewAds(true)
    }
  }, [dataNewAds])
  const isLoading = isLoadingNewAds
  return (
    <Wrapper.Container>
      <Wrapper.MainDiv>
        <Wrapper.MainContainer page={namePage}>
          <AdsChangeForm
            LoadImgMutation={LoadImgMutation}
            stateParams={stateParams}
            type={type === '1' ? 'new' : 'edit'}
            isLoading={isLoading}
            errorNewAds={errorNewAds}
            idAds={dataNewAds?.id}
          />
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default ChangeFormAds
