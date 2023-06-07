import { createGlobalStyle } from 'styled-components'
import * as GS from './components/global/gLobStyle'
import logo from './logo.svg'
import { AppRoutes } from './routes'
import './App.css'

function App() {
  const GlobalStyle = createGlobalStyle`${GS.Global}`
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
