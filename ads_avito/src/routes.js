import { Routes, Route, useParams } from 'react-router-dom'
import Main from './pages/main'
import ProfileUserPage from './pages/profilePage'
import ProfileSellerPage from './pages/profileSellerPage'
import MyAdsPage from './pages/MyAdsPage'
import AdsPage from './pages/adsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profileUser" element={<ProfileUserPage />} />
      <Route path="/profileSeller" element={<ProfileSellerPage />} />
      <Route path="/MyAdsPage" element={<MyAdsPage />} />
      <Route path="/AdsPage" element={<AdsPage />} />
    </Routes>
  )
}
