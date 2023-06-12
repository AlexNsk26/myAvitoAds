import * as S from './adsBigStyle'
import { BASE_URL } from '../../services/queryApi'

function AdsBig({ id, title, price, place, date, src }) {
  return (
    <S.cardsItem key={id}>
      <S.card>
        <S.cardsImage>
          <S.aRef href="#" target="_self">
            <S.aImg src={BASE_URL + src} alt="picture" />
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
  return adsArr.map((ads) => AdsBig({ ...ads }))
}
export default AdsBigArr
