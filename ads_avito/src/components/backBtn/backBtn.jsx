import * as S from './backBtnStyle'
import { Button } from '../../components/button/button'

function BackBtn() {
  return (
    <S.backBtnGroup>
      <Button.s16d.blue reg={{ width: '241px', height: '50px' }} id="btnGoBack">
        Вернуться на главную
      </Button.s16d.blue>
    </S.backBtnGroup>
  )
}
export default BackBtn
