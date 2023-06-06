import * as S from './styleAdsChange'
import FormChange from './formBlock'

function AdsChangeForm({}) {
  return (
    <S.modalBlock>
      <S.modalContent>
        <S.modalTitle>Редактировать объявление</S.modalTitle>
        <S.modalBtnClose>
          <S.modalBtnCloseLine />
        </S.modalBtnClose>
        <FormChange />
      </S.modalContent>
    </S.modalBlock>
  )
}

export default AdsChangeForm
