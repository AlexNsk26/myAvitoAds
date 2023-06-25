import * as S from './styleCommentForm'
import { ConvertDate } from '../commonFunctions/commonFunc'
import { BASE_URL } from '../../services/queryApi'

function Review({ reviewName, reviewDate, reviewText,avatar }) {
  return (
    <S.modalReview>
      <S.reviewItem>
        <S.reviewLeft>
          <S.reviewImgDiv>
            <S.reviewImg src={avatar} alt="" />
          </S.reviewImgDiv>
        </S.reviewLeft>
        <S.reviewRight>
          <S.reviewName>
            {reviewName}
            <S.reviewNameSpan>{reviewDate}</S.reviewNameSpan>
          </S.reviewName>
          <S.reviewTitle>Комментарий</S.reviewTitle>
          <S.reviewText>{reviewText}</S.reviewText>
        </S.reviewRight>
      </S.reviewItem>
    </S.modalReview>
  )
}
function ArrReviews({ arrRev = [] }) {
  return arrRev.map((review) => (
    <Review
      key={review.id}
      reviewName={review.author.name}
      reviewDate={ConvertDate(review.created_on)}
      reviewText={review.text}
      avatar={BASE_URL+review.author.avatar}
    />
  ))
}
function ReviewsGroup({ arrRev }) {
  return (
    <S.modalReviews>
      <S.modalReview>
        <ArrReviews arrRev={arrRev} />
      </S.modalReview>
    </S.modalReviews>
  )
}

export default ReviewsGroup
