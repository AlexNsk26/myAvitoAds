import * as S from './styleCommentForm'
import ModalBlock from '../modalBlock/modalBlock'
import NewCommentForm from './addComment'
import ReviewsGroup from './reviews'
import { arrReviews } from '../../mockData/mockData'

function AdsCommentForm({ type = 'comment' }) {
  return (
    <ModalBlock type={type}>
      <S.modalScroll>
        <NewCommentForm />
        <S.modalReviews>
          <ReviewsGroup arrRev={arrReviews} />
        </S.modalReviews>
      </S.modalScroll>
    </ModalBlock>
  )
}

export default AdsCommentForm
