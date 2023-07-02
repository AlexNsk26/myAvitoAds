import * as S from './userProfileStyle'
import { Button } from '../../components/button/button'
import GetInpFields from './inputProfileUser'
import { BASE_URL } from '../../services/queryApi'
import PhoneSeller from './phoneBtnSeller'
import { useRef } from 'react'
import TxtFldGroup from './textFldProfileSeller'
import { usePostLoadAvatarUserMutation } from '../../services/queryApi'
import ImgUser from './imgUser'
import ImgUserProfile from './imgUserProf'

function UserProfile({
  avatar,
  sellerPhone,
  sellerFields,
  profileUserData,
  profileUserFields,
  namePage,
  loginData,
  complianceInputs,
  PatchCurrentUser,
  stateParams,
}) {
  /*  const inputRef = useRef(null)
  const [LoadAvatarUser, { data: dataUserAvatar }] =
    usePostLoadAvatarUserMutation() */
  const OnClickSaveBtnUserHandler = () => {
    const body = {
      role: 'user',
      email: loginData.email,
      name: stateParams.fname.fieldState
        ? stateParams.fname.fieldState
        : loginData.fname,
      surname: stateParams.lname.fieldState
        ? stateParams.lname.fieldState
        : loginData.lname,
      phone: stateParams.phone.fieldState
        ? stateParams.phone.fieldState
        : loginData.phone,
      city: stateParams.city.fieldState
        ? stateParams.city.fieldState
        : loginData.city,
    }
    PatchCurrentUser(body)
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error))
  }
  /*   const OnChangeFileLinkHandler = () => {
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
  } */

  return (
    <S.container>
      {namePage === 'profileUser' && (
        <S.invitation>Здравствуйте, {profileUserData}! </S.invitation>
      )}

      <S.mainProfile>
        <S.profileContent>
          {namePage === 'profileUser' ? (
            <S.profileTitle>Настройки профиля</S.profileTitle>
          ) : (
            <S.profileTitleSeller>Профиль продавца</S.profileTitleSeller>
          )}

          <S.profileSettings>
            <S.settingsLeft namePage={namePage}>
              <ImgUserProfile namePage={namePage} avatar={avatar} />
            </S.settingsLeft>
            <S.settingsRight>
              {namePage === 'profileUser' ? (
                <S.settingsForm action="#">
                  <GetInpFields
                    stateParams={stateParams}
                    complianceInputs={complianceInputs}
                    loginData={loginData}
                    arrFields={profileUserFields}
                  />
                  <S.saveProfileBtn>
                    <Button.s16d.blue
                      onClick={() => OnClickSaveBtnUserHandler()}
                      reg={{ width: '152px', height: '50px' }}
                      mob={{ height: '46px' }}
                    >
                      Сохранить
                    </Button.s16d.blue>
                  </S.saveProfileBtn>
                </S.settingsForm>
              ) : (
                <TxtFldGroup sellerFields={sellerFields} />
              )}
              {namePage === 'profileSeller' && <ImgUser />}
              {namePage === 'profileSeller' && (
                <PhoneSeller phoneNum={sellerPhone} />
              )}
            </S.settingsRight>
          </S.profileSettings>
        </S.profileContent>
      </S.mainProfile>
    </S.container>
  )
}

export default UserProfile
/*  <S.settingsImg>
                {dataUserAvatar ||
                  (avatar && (
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
                  ))}
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
              )} */
