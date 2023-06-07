import * as S from './styleCommentForm'
import { Button } from '../button/button'

function NewCommentForm() {
  return (
    <S.modalScroll>
      <S.modalFormNewComment id="formNewArt" action="#">
        <S.newCommentBlock>
          <S.newCommentLabel for="text">Добавить отзыв</S.newCommentLabel>
          <S.newCommentArea
            name="text"
            id="formArea"
            cols="auto"
            rows="5"
            placeholder="Введите описание"
          />
        </S.newCommentBlock>
        <Button.s16d.blue
          disabled={true}
          id="btnPublish"
          reg={{ width: '181px', height: '50px' }}
          mob={{ height: '46px' }}
        >
          Опубликовать
        </Button.s16d.blue>
      </S.modalFormNewComment>
    </S.modalScroll>
  )
}

export default NewCommentForm
