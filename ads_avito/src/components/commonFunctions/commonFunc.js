export function GetPageName() {
  const urlPath = new URL(document.URL).pathname
  const pageName = urlPath
    .split('')
    .filter((value) => !(value === '/'))
    .join('')
  return pageName === '' ? 'main' : pageName
}

export function IsLogin() {
  return sessionStorage.getItem('tokens') ? true : false
}

export function ConvertDate(stringDate) {
  const dateObj = new Date(stringDate)
  const difHours = (new Date() - dateObj) / 1000 / 60 / 60 / 24
  const currentYear = new Date().getFullYear()
  const periodsH = { 1: 'Сегодня', 2: 'Вчера' }
  const periodsM = {
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
