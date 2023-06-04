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


 function LeftBlock({barImgs,  barImgsMob}) {
    return (
        <AdsBlockLeft>
        <AdsBlockImg>
          <OneBigAds />
          <AdsImgBar>
            <SmallAdsBar arrSmallImg={barImgs} />
            <AdsImgBarMob arrCircle={barImgsMob} />
          </AdsImgBar>
          <AdsImgBarMob></AdsImgBarMob>
        </AdsBlockImg>
      </AdsBlockLeft>
    )
  }
  export default LeftBlock