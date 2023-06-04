import * as S from './userProfileStyle'
import { Button } from '../button/button'

function PhoneSeller({ phoneNum }) {
  return (
    <S.sellerPhoneGroup>
      <Button.s16d.blue
        reg={{ width: '214px', height: '62px' }}
        mob={{ height: '52px' }}
      >
        <span>
          {'Показать телефон'}
          <br />
          {phoneNum}
        </span>
      </Button.s16d.blue>
    </S.sellerPhoneGroup>
  )
}
export default PhoneSeller
