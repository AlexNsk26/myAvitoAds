import * as S from './styleAdsChange'
import FormBlockPic from './picAdsBar'
import SaveBtn from './saveBtn'

function FormBlockName({ valueName = '' }) {
  return (
    <S.formBlock>
      <S.label for="name">Название</S.label>
      <S.formInput
        type="text"
        name="name"
        id="formName"
        placeholder="Введите название"
        value={valueName}
      />
    </S.formBlock>
  )
}
function FormBlockDescr({ valueDescr = '' }) {
  return (
    <S.formBlock>
      <S.label for="text">Описание</S.label>
      <S.textArea
        type="text"
        name="text"
        id="formArea"
        placeholder="Введите описание"
        cols="auto"
        rows="10"
        value={valueDescr}
      ></S.textArea>
    </S.formBlock>
  )
}

function FormBlockPrice({ valuePrice = '' }) {
  return (
    <S.formBlock type="price">
      <S.label for="price">Цена</S.label>
      <S.formInputPrice
        type="text"
        name="price"
        id="formName"
        value={valuePrice}
      />
      <S.formPriceCover />
    </S.formBlock>
  )
}
function FormChange({type}) {
  return (
    <S.modalForm id="formNewArt" action="#">
      <FormBlockName />
      <FormBlockDescr />
      <FormBlockPic />
      <FormBlockPrice />
      <SaveBtn disabled={false} type={type}/>
    </S.modalForm>
  )
}
export default FormChange
