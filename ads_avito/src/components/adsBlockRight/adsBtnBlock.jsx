import { useNavigate } from 'react-router-dom'
import { Button } from '../button/button'
import * as S from './styleAdsBlockRight'

export function RedactBtn({ isLoading, idAds }) {
  const navigate = useNavigate()
  return (
    <Button.s16d.blue
      disabled={isLoading}
      onClick={() => navigate(`/changeAds/2/${idAds}`)}
      reg={{ width: '187px', height: '47px' }}
      mob={{ width: '100%', height: '57px' }}
    >
      Редактировать
    </Button.s16d.blue>
  )
}
export function RemoveBtn({ DeleteAdsByIdMutation, idAds, isLoading }) {
  return (
    <Button.s16d.blue
      disabled={isLoading}
      onClick={() => DeleteAdsByIdMutation({ id: idAds })}
      reg={{ width: '187px', height: '47px' }}
      mob={{ width: '100%', height: '57px' }}
    >
      Снять с публикации
    </Button.s16d.blue>
  )
}
export function GroupBtnEditAds({ DeleteAdsByIdMutation, idAds, isLoading }) {
  return (
    <S.editBtnBlock>
      <RedactBtn idAds={idAds} isLoading={isLoading} />
      <RemoveBtn
        isLoading={isLoading}
        idAds={idAds}
        DeleteAdsByIdMutation={DeleteAdsByIdMutation}
      />
    </S.editBtnBlock>
  )
}
