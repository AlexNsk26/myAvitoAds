import * as S from './styleAdsBlockRight'
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
  phoneNum,
  dataComments,
  isLogin,
  setShowComments
}) {

  return (
    <AdsBlockRight>
      <AdsContentRight>
        <RightBlockTitle adsName={adsName} />
        <ArticleInfo setShowComments={setShowComments} dataComments={dataComments} dataInfo={articleInfo} />
        <RightBlockPrice price={adsPrice} />
        {isLogin ? (
          <GroupBtnEditAds />
        ) : (
          <PhoneSeller phoneNum={phoneNum} />
        )}
        <AuthorContent authorCont={authorInfo} />
      </AdsContentRight>
    </AdsBlockRight>
  )
}
