import * as S from './styleAdsChange'
import FormChange from './formBlock'
import ModalBlock from '../modalBlock/modalBlock'

function AdsChangeForm({
  idAds,
  PatchAdsByIdMutation,
  type = 'new',
  stateParams,
  isLoading,
  errorNewAds,
  LoadImgMutation,
  arrImgBin
}) {
  return (
    <ModalBlock type={type}>
      <FormChange
      PatchAdsByIdMutation={PatchAdsByIdMutation}
      arrImgBin={arrImgBin}
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
