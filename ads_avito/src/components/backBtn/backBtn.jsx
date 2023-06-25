import * as S from './backBtnStyle'
import { Button } from '../../components/button/button'
import {  useNavigate } from 'react-router-dom'

function BackBtn() {
  const navigate = useNavigate()
  return (
    <S.backBtnGroup>
      <Button.s16d.blue
        onClick={() => navigate('/')}
        reg={{ width: '241px', height: '50px' }}
        id="btnGoBack"
      >
        Вернуться на главную
      </Button.s16d.blue>
    </S.backBtnGroup>
  )
}
export default BackBtn
