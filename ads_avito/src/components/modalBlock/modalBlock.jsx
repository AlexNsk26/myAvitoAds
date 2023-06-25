import * as S from './styleModalBlock'
import { useNavigate } from 'react-router-dom'
const typeParams = {
  new: 'Новое объявление',
  edit: 'Редактировать объявление',
  comment: 'Отзывы о товаре',
}
function ModalBlock({ setShowComments, type, children }) {
  const navigate = useNavigate()
  return (
    <S.modalBlock>
      <S.modalContent>
        <S.modalTitle>{typeParams[type]}</S.modalTitle>
        <S.modalBtnClose
          onClick={() =>
            type === 'comment' ? setShowComments(false) : navigate(-1)
          }
        >
          <S.modalBtnCloseLine />
        </S.modalBtnClose>
        {children}
      </S.modalContent>
    </S.modalBlock>
  )
}

export default ModalBlock
