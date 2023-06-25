import * as S from './styleNewAdsPage'

import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { adsByIdSelector, apiSelectorGetAdsById } from '../../store/selectors'
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
  usePatchAdsByIdMutation,
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
  const { type, id: idAdsEdit } = useParams()
  const [skipNewAds, setSkipNewAds] = useState(true)
  const [skipAddImg, setSkipAddImg] = useState(true)
  const [imgBin, setImgBin] = useState(undefined)
  const [title, setTitle] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [price, setPrice] = useState(undefined)
  const state = useSelector((state) => state)
  const adsByIdDataSelector = apiSelectorGetAdsById(state, idAdsEdit)?.data
  useEffect(() => {
    if (adsByIdDataSelector) {
      setTitle(adsByIdDataSelector.title)
      setDescription(adsByIdDataSelector.description)
      setPrice(adsByIdDataSelector.price)
    }
  }, [])
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
  const [
    PatchAdsByIdMutation,
    {
      data: dataPatchAdsById,
      error: errorDataPatchAdsById,
      isLoading: isLoadingDataPatchAdsById,
    },
  ] = usePatchAdsByIdMutation()
  useEffect(() => {
    if (dataPatchAdsById) {
      console.log(dataPatchAdsById)
    }
  }, [dataPatchAdsById])
  const isLoading = isLoadingNewAds
  return (
    <Wrapper.Container>
      <Wrapper.MainDiv>
        <Wrapper.MainContainer page={namePage}>
          <AdsChangeForm
            PatchAdsByIdMutation={PatchAdsByIdMutation}
            arrImgBin={
              dataImgBin
                ? dataImgBin?.images
                : adsByIdDataSelector?.images ?? []
            }
            LoadImgMutation={LoadImgMutation}
            stateParams={stateParams}
            type={type === '1' ? 'new' : 'edit'}
            isLoading={isLoading}
            errorNewAds={errorNewAds}
            idAds={dataNewAds ? dataNewAds?.id : adsByIdDataSelector?.id}
          />
        </Wrapper.MainContainer>
      </Wrapper.MainDiv>
      <Footer />
    </Wrapper.Container>
  )
}
export default ChangeFormAds
