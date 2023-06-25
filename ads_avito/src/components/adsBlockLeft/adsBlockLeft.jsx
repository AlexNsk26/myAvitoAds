import { useState } from 'react'
import {
  AdsContainer,
  AdsBlockLeft,
  AdsBlockRight,
  AdsBlockImg,
  AdsImgBar,
  AdsImgBarMob,
  AdsContentRight,
} from '../../components/adsContainer/adsContainer'
import OneBigAds from '../../components/adsBigOne/adsBigOne'
import { SmallAdsBar, AdsBarMob } from '../../components/adsImgBar/adsImgBar'

const PrepearImgs = (arrImgs = []) => {
  let imgBar = []
  arrImgs.forEach((img, index) => {
    if (index !== 0) {
      imgBar.push({ id: img.id, src: img.url, alt: '' })
    }
  })
  return imgBar
}

function LeftBlock({ barImgs = [] }) {
  const [indexActive, setIndexActive] = useState(0)
  const ClickMobImgHandler = (e) => {
    const activeIndex = barImgs.findIndex(
      (img) => String(img.id) === e.target.dataset.id
    )
    setIndexActive(activeIndex)
  }
  return (
    <AdsBlockLeft>
      <AdsBlockImg>
        <OneBigAds src={barImgs[indexActive]?.url ?? ''} />
        <AdsImgBar>
          <SmallAdsBar arrSmallImg={PrepearImgs(barImgs)} />
        </AdsImgBar>
        <AdsImgBarMob>
          <AdsBarMob
            onClick={ClickMobImgHandler}
            idActive={barImgs[indexActive]?.id}
            arrCircle={barImgs}
          />
        </AdsImgBarMob>
      </AdsBlockImg>
    </AdsBlockLeft>
  )
}
export default LeftBlock
