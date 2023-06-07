import { Button } from '../button/button'
import * as S from './styleAdsBlockRight'


export function RedactBtn({}) {
  return (
    <Button.s16d.blue
      reg={{ width: '187px', height: '47px' }}
      mob={{ width: '100%', height: '57px' }}
    >
      Редактировать
    </Button.s16d.blue>
  )
}
export function RemoveBtn({}) {
  return (
    <Button.s16d.blue
      reg={{ width: '187px', height: '47px' }}
      mob={{ width: '100%', height: '57px' }}
    >
      Снять с публикации
    </Button.s16d.blue>
  )
}
export function GroupBtnEditAds() {
  return (
    <S.editBtnBlock>
      <RedactBtn />
      <RemoveBtn />
    </S.editBtnBlock>
  )
}
