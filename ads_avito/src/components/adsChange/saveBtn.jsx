import * as S from './styleAdsChange'
import { Button } from '../button/button'
function SaveBtn({
  idAds,
  disabled = true,
  type,
  setSkipNewAds,
  PatchAdsByIdMutation,
  saveParams,
}) {
  const { description, title, price } = saveParams
  const OnClickEditAdsBtnHandler = () => {
    if (type === 'edit' && idAds) {
      PatchAdsByIdMutation({ ...saveParams, id: idAds })
    }
  }

  const OnClickNewAdsBtnHandler = () => {
    if (type === 'new' && !idAds) {
      setSkipNewAds(false)
    }
  }
  return (
    <S.saveBtnGroup>
      <Button.s16d.blue
        onClick={() =>
          type === 'new'
            ? OnClickNewAdsBtnHandler()
            : OnClickEditAdsBtnHandler()
        }
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
