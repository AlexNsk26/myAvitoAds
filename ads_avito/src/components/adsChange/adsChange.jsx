import * as S from './styleAdsChange'
import FormChange from './formBlock'
import ModalBlock from '../modalBlock/modalBlock'

function AdsChangeForm({
  idAds,
  type = 'new',
  stateParams,
  isLoading,
  errorNewAds,
}) {
  return (
    <ModalBlock type={type}>
      <FormChange
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
