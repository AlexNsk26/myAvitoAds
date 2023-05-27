import * as S from './searchStyle'
import { Button } from '../button/button'

function SearchForm() {
  return (
    <S.searchForm action="#">
      <S.searchTextInput
        type="search"
        placeholder="Поиск по объявлениям"
        name="search"
      />
      <S.searchMobTextInput
        type="search"
        placeholder="Поиск"
        name="search-mob"
      />
      <S.searchBtn_group>
        <Button.s16d.blue width="158px" height="50px">
          Найти
        </Button.s16d.blue>
      </S.searchBtn_group>
    </S.searchForm>
  )
}
// <S.searchBtn_hov02>Найти</S.searchBtn_hov02>
export default SearchForm
