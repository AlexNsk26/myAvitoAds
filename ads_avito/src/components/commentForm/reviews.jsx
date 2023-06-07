import * as S from './styleCommentForm'

function Review({ reviewName, reviewDate, reviewText }) {
  return (
    <S.modalReview>
      <S.reviewItem>
        <S.reviewLeft>
          <S.reviewImgDiv>
            <S.reviewImg src="" alt="" />
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
      reviewName={review.reviewName}
      reviewDate={review.reviewDate}
      reviewText={review.reviewText}
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
