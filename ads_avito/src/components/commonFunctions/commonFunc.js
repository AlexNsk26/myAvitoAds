export function GetPageName() {
  const urlPath = new URL(document.URL).pathname
  const pageName = urlPath
    .split('')
    .filter((value) => !(value === '/'))
    .join('')
  return pageName === '' ? 'main' : pageName
}
