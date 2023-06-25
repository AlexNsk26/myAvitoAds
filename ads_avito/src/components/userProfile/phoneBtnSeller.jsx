import * as S from './userProfileStyle'
import { useState } from 'react'
import { Button } from '../button/button'

function PhoneSeller({ phoneNum }) {
  const [hiddenPhone, setHiddenPhone] = useState(true)
  const GetHiddenPhone = (phone = '') => {
    const prePhoneParts = phone.split(' ')
    let phoneParts = []
    prePhoneParts.forEach((value, index) =>
      phoneParts.push(
        index < 2
          ? value
          : value
              .split('')
              .map((num) => 'x')
              .join('')
      )
    )
    return phoneParts.join(' ')
  }
  return (
    <S.sellerPhoneGroup>
      <Button.s16d.blue
        onClick={() => setHiddenPhone(false)}
        reg={{ width: '214px', height: '62px' }}
        mob={{ height: '52px' }}
      >
        <span>
          {'Показать телефон'}
          <br />
          {hiddenPhone ? GetHiddenPhone(phoneNum) : phoneNum}
        </span>
      </Button.s16d.blue>
    </S.sellerPhoneGroup>
  )
}
export default PhoneSeller
