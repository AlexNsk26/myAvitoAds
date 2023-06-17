import * as S from './styleAdsBlockRight'

function ArticleInfo({ setShowComments, dataInfo, dataComments = [] }) {
  const onClickCommentHandler = (e) => {
    e.preventDefault()
    setShowComments(true)
  }
  return (
    <S.articleInfo>
      <S.articleDateCity>{dataInfo?.date}</S.articleDateCity>
      <S.articleDateCity>{dataInfo?.city}</S.articleDateCity>
      <S.articleLink
        onClick={(e) => onClickCommentHandler(e)}
      >{`${dataComments.length} отзыва`}</S.articleLink>
    </S.articleInfo>
  )
}
export default ArticleInfo
