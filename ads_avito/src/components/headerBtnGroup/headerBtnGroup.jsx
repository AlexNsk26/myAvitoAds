import * as S from './headerBtnGroupStyle'
import { Button } from '../button/button'
import { useNavigate } from 'react-router-dom'

function HeaderBtnGroup({ isLogin = false }) {
  const navigate = useNavigate()
  return (
    <>
      {!isLogin && (
        <Button.s16l.blue
          onClick={() => navigate('/login')}
          reg={{ width: '224px', height: '40px' }}
          id="btnMainEnter"
        >
          Вход в личный кабинет
        </Button.s16l.blue>
      )}
      {isLogin && (
        <S.groupButtonHeader>
          <Button.s16l.blue
          onClick={() => navigate('/changeAds/1')}
            reg={{ width: '230px', height: '40px' }}
            id="btputAd"
          >
            Разместить Объявление
          </Button.s16l.blue>
          <Button.s16l.blue
            onClick={() => navigate('/profileUser')}
            reg={{ width: '171px', height: '40px' }}
            id="btputAd"
          >
            Личный кабинет
          </Button.s16l.blue>
        </S.groupButtonHeader>
      )}
    </>
  )
}

export default HeaderBtnGroup
