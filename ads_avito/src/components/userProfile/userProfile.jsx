import * as S from './userProfileStyle'
import { Button } from '../../components/button/button'
import GetInpFields from './inputProfileUser'
import PhoneSeller from './phoneBtnSeller'
import TxtFldGroup from './textFldProfileSeller'
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

