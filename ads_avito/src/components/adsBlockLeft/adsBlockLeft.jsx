import { useState } from 'react'
import {
  AdsBlockLeft,
  AdsBlockImg,
  AdsImgBar,
  AdsImgBarMob,
} from '../../components/adsContainer/adsContainer'
import OneBigAds from '../../components/adsBigOne/adsBigOne'
import { SmallAdsBar, AdsBarMob } from '../../components/adsImgBar/adsImgBar'

const PrepearImgs = (arrImgs = []) => {
  let imgBar = []
  arrImgs.forEach((img, index) => {
    imgBar.push({ id: img.id, src: img.url, alt: '' })
/*     if (index !== 0) {
      imgBar.push({ id: img.id, src: img.url, alt: '' })
    } */
  })
  return imgBar
}

function LeftBlock({ barImgs = [] }) {
  const [indexActive, setIndexActive] = useState(0)
  const ClickMobImgHandler = (activeIndex) => {
    console.log(activeIndex)
    setIndexActive(activeIndex)
    /*     if (e.target.dataset.id) {
      const activeIndex = barImgs.findIndex(
        (img) => String(img.id) === e.target.dataset.id
      )
      
    } */
  }
  return (
    <AdsBlockLeft>
      <AdsBlockImg>
        <OneBigAds src={barImgs[indexActive]?.url ?? ''} />
        <AdsImgBar>
          <SmallAdsBar
            changeMainPic={ClickMobImgHandler}
            arrSmallImg={PrepearImgs(barImgs)}
          />
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
