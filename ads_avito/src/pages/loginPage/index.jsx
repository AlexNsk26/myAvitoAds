import * as S from './styleLoginPage'
import * as Wrapper from '../../components/container/container'
import { GetPageName } from '../../components/commonFunctions/commonFunc'
import LoginForm from '../../components/login/login'


function LoginPage() {
  const namePage = GetPageName()
  return (
    <Wrapper.Container>
      <S.containerEnter>
        <S.modalBlock>
          <LoginForm />
        </S.modalBlock>
      </S.containerEnter>
    </Wrapper.Container>
  )
}
export default LoginPage
