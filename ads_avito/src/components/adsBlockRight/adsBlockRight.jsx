import * as S from './styleAdsBlockRight'
import {
  AdsContainer,
  AdsBlockLeft,
  AdsBlockRight,
  AdsBlockImg,
  AdsImgBar,
  AdsImgBarMob,
  AdsContentRight,
} from '../../components/adsContainer/adsContainer'
import PhoneSeller from '../userProfile/phoneBtnSeller'
import ArticleInfo from '../../components/adsBlockRight/articleInfo'
import { GroupBtnEditAds } from '../../components/adsBlockRight/adsBtnBlock'
import AuthorContent from '../../components/adsBlockRight/authorContent'
export function RightBlockTitle({ adsName }) {
  return <S.rightBlockTitle>{adsName}</S.rightBlockTitle>
}

export function RightBlockPrice({ price }) {
  return <S.rightBlockPrice>{`${price} ₽`}</S.rightBlockPrice>
}

export function RightBlock({
  adsName,
  adsPrice,
  articleInfo,
  authorInfo,
  namePage,
  phoneNumHide,
}) {
  return (
    <AdsBlockRight>
      <AdsContentRight>
        <RightBlockTitle adsName={adsName} />
        <ArticleInfo dataInfo={articleInfo} />
        <RightBlockPrice price={adsPrice} />
        {namePage === 'MyAdsPage' ? (
          <GroupBtnEditAds />
        ) : (
          <PhoneSeller phoneNum={phoneNumHide} />
        )}
        <AuthorContent authorCont={authorInfo} />
      </AdsContentRight>
    </AdsBlockRight>
  )
}
