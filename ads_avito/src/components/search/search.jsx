import * as S from './searchStyle'
import { Button } from '../button/button'

function SearchForm({ setFind, setRender }) {
  return (
    <S.searchForm onSubmit={(e) => e.preventDefault()} action="#">
      <S.searchTextInput
        onC
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
        <Button.s16d.blue
          onClick={() => {
            setFind(true)
            setRender((prev) => !prev)
          }}
          reg={{ width: '158px', height: '50px' }}
        >
          Найти
        </Button.s16d.blue>
      </S.searchBtn_group>
    </S.searchForm>
  )
}
export default SearchForm
