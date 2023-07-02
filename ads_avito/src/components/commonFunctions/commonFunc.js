import { Navigate } from 'react-router-dom'
import { BASE_URL } from '../../services/queryApi'

export function GetPageName() {
  const urlPath = new URL(document.URL).pathname
  const pageNames = urlPath.split('/')
  const pageName = pageNames[1]
    .split('')
    .filter((value) => !(value === '/'))
    .join('')
  return pageName === '' ? 'main' : pageName
}

export function IsLogin() {
  return sessionStorage.getItem('tokens') && localStorage.getItem('loginData')
    ? true
    : false
}

export function ConvertDate(stringDate) {
  const dateObj = new Date(stringDate)
  const difHours = (new Date() - dateObj) / 1000 / 60 / 60 / 24
  const currentYear = new Date().getFullYear()
  const periodsH = { 1: 'Сегодня', 2: 'Вчера' }

  let combinedDate = []
  const year =
    currentYear === dateObj.getFullYear()
      ? ''
      : String(dateObj.getFullYear() - 2000)
  let month
  let day
  let time
  if (difHours > 48) {
    month = periodsM[dateObj.getMonth()]
    day = String(dateObj.getDate())
    time = ''
  } else {
    month = ''
    day = difHours <= 24 ? periodsH[1] : periodsH[2]
    time = `в ${dateObj.toLocaleTimeString().split(':').slice(0, 2).join(':')}`
  }
  combinedDate.push(day)
  combinedDate.push(time)
  combinedDate.push(month)
  combinedDate.push(year)

  return combinedDate.filter((item) => item !== '').join(' ')
}

export const periodsM = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря',
}
export const CombineAllAdsData = (arrAdsData = [], arrUsersData = []) => {
  return arrAdsData.map((ads) => {
    const { id, title, price, user, created_on, images } = ads
    return {
      id,
      title,
      price,
      place: user.city,
      date: ConvertDate(created_on),
      src: images[0]?.url,
    }
  })
}
export function ProtectedRoute({ children, redirectPath = '/login', isAllowed }) {
  if (IsLogin()) {
    return children
  }
  return <Navigate to={redirectPath} replace />
}

export const profileUserFields = [
  {
    id: '1',
    for: 'fname',
    label: 'Имя',
    idInp: 'settings-fname',
    value: '',
    placeholder: 'Иван',
  },
  {
    id: '2',
    for: 'lname',
    label: 'Фамилия',
    idInp: 'settings-lname',
    value: '',
    placeholder: 'Иванов',
  },
  {
    id: '3',
    for: 'city',
    label: 'Город',
    idInp: 'settings-city',
    value: '',
    placeholder: 'Москва',
  },
  {
    id: '4',
    for: 'phone',
    label: 'Телефон',
    idInp: 'settings-phone',
    value: '',
    placeholder: '+7 xxx xxx-xx-xx',
  },
]
export function GetTokensAccess() {
  const tokensData = sessionStorage.getItem('tokens')
    ? JSON.parse(sessionStorage.getItem('tokens'))
    : undefined
  clearInterval(tokensData?.innerTimerId)

  if (
    tokensData &&
    new Date().getTime() - new Date(tokensData.expireDate).getTime() >
      1000 * 60 * 2
  ) {
    sessionStorage.removeItem('tokens')
  } else if (tokensData) {
    let timerId = setInterval(() => {
      const tokensData = sessionStorage.getItem('tokens')
        ? JSON.parse(sessionStorage.getItem('tokens'))
        : {}
      fetch(`${BASE_URL}auth/login`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_token: tokensData.access_token,
          refresh_token: tokensData.refresh_token,
        }),
      })
        .then((response) => {
          const data = response.text()
          return data
        })
        .then((result) => {
          const tokens = JSON.parse(result) ?? {}
          if (Object.keys(tokens).find((elem) => elem === 'access_token')) {
            sessionStorage.setItem(
              'tokens',
              JSON.stringify({ ...tokens, expireDate: new Date(), timerId })
            )
            console.log(result)
            return
          }
          clearInterval(tokensData?.innerTimerId)
          sessionStorage.removeItem('tokens')
        })
    }, 30000)
  }
}
