import * as S from './adsBigStyle'

function AdsBig({ id, title, price, place, date }) {
  return (
    <S.cardsItem key={id}>
      <S.card>
        <S.cardsImage>
          <S.aRef href="#" target="_blank">
            <S.aImg src="#" alt="picture" />
          </S.aRef>
        </S.cardsImage>

        <S.cardContent>
          <S.aRef>
            <S.cardTitle>{title}</S.cardTitle>
          </S.aRef>
          <S.cardPrice>{price}</S.cardPrice>
          <S.cardPlace>{place}</S.cardPlace>
          <S.cardDate>{date}</S.cardDate>
        </S.cardContent>
      </S.card>
    </S.cardsItem>
  )
}

function AdsBigArr({ adsArr = [] }) {
  return adsArr.map(({ id, title, price, place, date }) =>
    AdsBig({ id, title, price, place, date })
  )
}
export default AdsBigArr
