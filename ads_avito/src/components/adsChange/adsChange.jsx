import * as S from './styleAdsChange'
import FormChange from './formBlock'
import ModalBlock from '../modalBlock/modalBlock'

function AdsChangeForm({ type = 'new' }) {
  return (
    <ModalBlock type={type}>
      <FormChange type={type} />
    </ModalBlock>
  )
}

export default AdsChangeForm
