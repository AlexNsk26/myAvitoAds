import * as S from './styleAdsChange'
import FormBlockPic from './picAdsBar'
import SaveBtn from './saveBtn'
import ErrorsGroup from '../login/errorGroup'
import { useState } from 'react'
const validateInputTitle = (e, length, type = 'text') => {
  const { target } = e
  if (type === 'text') {
    return target.value.length <= length
      ? target.value
      : target.value.substring(0, length - 1)
  }
  const numberCheck = Number.isNaN(Number(target.value))
    ? target.value.split('').slice(0, -1).join('')
    : target.value
  return numberCheck <= length
    ? numberCheck
    : numberCheck.substring(0, length - 1)
}
function FormBlockName({ Title }) {
  const { title, setTitle } = Title

  return (
    <S.formBlock>
      <S.label for="name">Название</S.label>
      <S.formInput
        onChange={(e) => setTitle(validateInputTitle(e, 80))}
        type="text"
        name="name"
        id="formName"
        placeholder="Введите название"
        value={title}
      />
    </S.formBlock>
  )
}
function FormBlockDescr({ Description }) {
  const { description, setDescription } = Description
  return (
    <S.formBlock>
      <S.label for="text">Описание</S.label>
      <S.textArea
        onChange={(e) => setDescription(validateInputTitle(e, 500))}
        type="text"
        name="text"
        id="formArea"
        placeholder="Введите описание"
        cols="auto"
        rows="10"
        value={description}
      ></S.textArea>
    </S.formBlock>
  )
}

function FormBlockPrice({ Price }) {
  const { price, setPrice } = Price
  return (
    <S.formBlock type="price">
      <S.label for="price">Цена</S.label>
      <S.formInputPrice
        onChange={(e) => setPrice(Number(validateInputTitle(e, 12, 'price')))}
        type="text"
        name="price"
        id="formName"
        value={price ? String(price) : ''}
      />
      <S.formPriceCover />
    </S.formBlock>
  )
}
function FormChange({ type, stateParams, isLoading, errorNewAds, idAds }) {
  const DisabledBtn = () => {
    if (
      stateParams.description.description &&
      stateParams.title.title &&
      stateParams.price.price &&
      !isLoading
    ) {
      return false
    }
    return true
  }
  return (
    <S.modalForm id="formNewArt" action="#">
      <FormBlockName Title={stateParams.title} />
      <FormBlockDescr Description={stateParams.description} />
      <FormBlockPic />
      <FormBlockPrice Price={stateParams.price} />
      <SaveBtn
        disabled={DisabledBtn()}
        type={type}
        setSkipNewAds={stateParams.skip.setSkipNewAds}
        idAds={idAds}
      />
      {errorNewAds && <ErrorsGroup erData={errorNewAds} />}
    </S.modalForm>
  )
}
export default FormChange
