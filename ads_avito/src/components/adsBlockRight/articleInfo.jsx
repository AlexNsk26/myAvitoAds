import * as S from './styleAdsBlockRight'

function ArticleInfo({ dataInfo }) {
  return (
    <S.articleInfo>
      <S.articleDateCity>{`Сегодня в ${dataInfo.date}`}</S.articleDateCity>
      <S.articleDateCity>{dataInfo.city}</S.articleDateCity>
      <S.articleLink
        href=""
        target="_blank"
        rel=""
      >{`${dataInfo.sumComment} отзыва`}</S.articleLink>
    </S.articleInfo>
  )
}
export default ArticleInfo
