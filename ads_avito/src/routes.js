import { Routes, Route, useParams } from 'react-router-dom'
import Main from './pages/mainPage/index'
import ProfileUserPage from './pages/profilePage'
import ProfileSellerPage from './pages/profileSellerPage'
import MyAdsPage from './pages/myAdsPage'
import AdsPage from './pages/adsPage'
import LoginPage from './pages/loginPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profileUser" element={<ProfileUserPage />} />
      <Route path="/profileSeller" element={<ProfileSellerPage />} />
      <Route path="/MyAdsPage" element={<MyAdsPage />} />
      <Route path="/AdsPage" element={<AdsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
