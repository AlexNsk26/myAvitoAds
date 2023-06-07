import * as S from './headerBtnGroupStyle'
import { Button } from '../button/button'

function HeaderBtnGroup() {
  return (
    <S.groupButtonHeader>
      <Button.s16l.blue reg={{width:"230px", height:"40px"}} id="btputAd">
        Разместить Объявление
      </Button.s16l.blue>
      <Button.s16l.blue reg={{width:"171px", height:"40px"}} id="btputAd">
        Личный кабинет
      </Button.s16l.blue>
    </S.groupButtonHeader>
  )
}

export default HeaderBtnGroup