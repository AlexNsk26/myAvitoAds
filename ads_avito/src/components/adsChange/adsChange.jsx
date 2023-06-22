import * as S from './styleAdsChange'
import FormChange from './formBlock'
import ModalBlock from '../modalBlock/modalBlock'

function AdsChangeForm({
  idAds,
  type = 'new',
  stateParams,
  isLoading,
  errorNewAds,
  LoadImgMutation,
}) {
  return (
    <ModalBlock type={type}>
      <FormChange
        LoadImgMutation={LoadImgMutation}
        idAds={idAds}
        errorNewAds={errorNewAds}
        stateParams={stateParams}
        type={type}
        isLoading={isLoading}
      />
    </ModalBlock>
  )
}

export default AdsChangeForm
