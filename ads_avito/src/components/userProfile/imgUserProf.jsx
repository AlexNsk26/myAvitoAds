import * as S from './userProfileStyle'
import { useRef } from 'react'
import { BASE_URL } from '../../services/queryApi'
import { usePostLoadAvatarUserMutation } from '../../services/queryApi'

function ImgUserProfile({ avatar, namePage }) {
  const [LoadAvatarUser, { data: dataUserAvatar }] =
    usePostLoadAvatarUserMutation()
  const inputRef = useRef(null)
  const OnChangeFileLinkHandler = () => {
    const f = inputRef.current?.files[0]
    if (f) {
      const reader = new FileReader()
      reader.onload = function (evt) {
        LoadAvatarUser({
          imgBin: f,
        })
      }
      reader.readAsDataURL(f)
    }
  }
  return (
    <>
      {(dataUserAvatar || avatar) && (
        <>
          <S.settingsImg>
            <S.settingsProfileA
              onClick={(e) => e.preventDefault()}
              href=""
              target="_self"
            >
              <S.Img
                src={
                  dataUserAvatar
                    ? BASE_URL + dataUserAvatar.avatar
                    : BASE_URL + avatar
                }
                alt="avatar"
              />
            </S.settingsProfileA>
          </S.settingsImg>
          {namePage === 'profileUser' && (
            <>
              <S.settingsChangePhoto for="file_input">
                Заменить
              </S.settingsChangePhoto>
              <S.settingsChangePhotoInput
                onChange={(e) => OnChangeFileLinkHandler(e)}
                ref={inputRef}
                type="file"
                id="file_input"
              />
            </>
          )}
        </>
      )}
    </>
  )
}

export default ImgUserProfile
