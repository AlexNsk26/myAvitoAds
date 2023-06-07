import * as S from './userProfileStyle'
import { Button } from '../../components/button/button'
import GetInpFields from './inputProfileUser'
import PhoneSeller from './phoneBtnSeller'
import TxtFldGroup from './textFldProfileSeller'
import ImgUser from './imgUser'
import {
  profileSellerFields,
  profileSellerPhone,
} from '../../mockData/mockData'

function UserProfile({ profileUserData, profileUserFields, namePage }) {
  return (
    <S.container>
      {namePage === 'profileUser' && (
        <S.invitation>Здравствуйте, {profileUserData.userName}! </S.invitation>
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
              <S.settingsImg>
                <S.settingsProfileA href="" target="_self">
                  <S.Img src="#" alt="" />
                </S.settingsProfileA>
              </S.settingsImg>
              {namePage === 'profileUser' && (
                <S.settingsChangePhoto>Заменить</S.settingsChangePhoto>
              )}
            </S.settingsLeft>
            <S.settingsRight>
              {namePage === 'profileUser' ? (
                <S.settingsForm action="#">
                  <GetInpFields arrFields={profileUserFields} />
                  <S.saveProfileBtn>
                    <Button.s16d.blue
                      reg={{ width: '152px', height: '50px' }}
                      mob={{ height: '46px' }}
                    >
                      Сохранить
                    </Button.s16d.blue>
                  </S.saveProfileBtn>
                </S.settingsForm>
              ) : (
                <TxtFldGroup props={profileSellerFields} />
              )}
              {namePage === 'profileSeller' && (<ImgUser />)}
              {namePage === 'profileSeller' && (
                <PhoneSeller phoneNum={profileSellerPhone} />
              )}
            </S.settingsRight>
          </S.profileSettings>
        </S.profileContent>
      </S.mainProfile>
    </S.container>
  )
}

export default UserProfile
