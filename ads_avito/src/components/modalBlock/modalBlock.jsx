import * as S from './styleModalBlock'
const typeParams = {
  new: 'Новое объявление',
  edit: 'Редактировать объявление',
  comment: 'Отзывы о товаре',
}
function ModalBlock({ type, children }) {
  return (
    <S.modalBlock>
      <S.modalContent>
        <S.modalTitle>{typeParams[type]}</S.modalTitle>
        <S.modalBtnClose>
          <S.modalBtnCloseLine />
        </S.modalBtnClose>
        {children}
      </S.modalContent>
    </S.modalBlock>
  )
}

export default ModalBlock
