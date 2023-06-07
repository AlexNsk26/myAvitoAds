import * as S from './styleAdsChange'
import { Button } from '../button/button'
function SaveBtn({ disabled = true, type }) {
  return (
    <S.saveBtnGroup>
      <Button.s16d.blue
        disabled={disabled}
        reg={{ width: '141px', height: '50px' }}
        mob={{ height: '46px' }}
      >
        {type === 'new' ? 'Опубликовать' : 'Сохранить'}
      </Button.s16d.blue>
    </S.saveBtnGroup>
  )
}
export default SaveBtn
