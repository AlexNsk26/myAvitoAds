import * as S from './styleLogin'

function ArrErrors({ erDataArr = [] }) {
  return erDataArr.map((error, index) => (
    <S.error key={index}>{error.msg}</S.error>
  ))
}

function ErrorsGroup({ erData = {} }) {
  return (
    <S.errorGroup>
      <S.errorStatus>{'Status: ' + erData.status}</S.errorStatus>
      {typeof erData.data.detail == 'array' && (
        <ArrErrors erDataArr={erData.data.detail} />
      )}
      {typeof erData.data.detail == 'string' && (
        <S.error>{erData.data.detail}</S.error>
      )}
    </S.errorGroup>
  )
}
export default ErrorsGroup
