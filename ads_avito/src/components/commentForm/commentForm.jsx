import * as S from './styleCommentForm'
import { useState, useEffect } from 'react'
import ModalBlock from '../modalBlock/modalBlock'
import NewCommentForm from './addComment'
import ReviewsGroup from './reviews'
import { usePostComByIdAdsQuery } from '../../services/queryApi'

function AdsCommentForm({
  idAds,
  dataComments,
  isLogin,
  setShowComments,
  type = 'comment',
  refetchComments,

}) {
  const [commentText, setCommentText] = useState(undefined)
  const [skipAddComment, setSkipAddComment] = useState(true)
  const {
    data: dataAddComment,
    error: errorDataAddComment,
    isLoading: isLoadingDataAddComment,
  } = usePostComByIdAdsQuery(
    { id: idAds, text: commentText },
    { skip: skipAddComment }
  )
  useEffect(() => {
    if (dataAddComment) {
      setSkipAddComment(true)
      refetchComments()

    }
  }, [dataAddComment])
  const NewCommentOnClickHandler = () => {
    setSkipAddComment(false)
  }

  return (
    <ModalBlock setShowComments={setShowComments} type={type}>
      <S.modalScroll>
        {isLogin && (
          <NewCommentForm
            commentText={commentText}
            OnClickHandler={NewCommentOnClickHandler}
            setCommentText={setCommentText}
            isLoading={isLoadingDataAddComment}
          />
        )}
        <S.modalReviews>
          <ReviewsGroup arrRev={dataComments} />
        </S.modalReviews>
      </S.modalScroll>
    </ModalBlock>
  )
}

export default AdsCommentForm
