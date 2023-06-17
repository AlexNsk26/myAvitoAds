import * as S from './styleCommentForm'
import ModalBlock from '../modalBlock/modalBlock'
import NewCommentForm from './addComment'
import ReviewsGroup from './reviews'
import { arrReviews } from '../../mockData/mockData'

function AdsCommentForm({dataComments, isLogin, setShowComments, type = 'comment' }) {
  return (
    <ModalBlock setShowComments={setShowComments} type={type}>
      <S.modalScroll>
        {isLogin && <NewCommentForm />}
        <S.modalReviews>
          <ReviewsGroup arrRev={dataComments} />
        </S.modalReviews>
      </S.modalScroll>
    </ModalBlock>
  )
}

export default AdsCommentForm
