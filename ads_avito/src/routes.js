import { Routes, Route, useParams } from 'react-router-dom'
import Main from './pages/mainPage/index'
import ProfileUserPage from './pages/profilePage'
import ProfileSellerPage from './pages/profileSellerPage'
import ChangeFormAds from './pages/newAdsPage'
import AdsPage from './pages/adsPage'
import LoginPage from './pages/loginPage'
import { ProtectedRoute } from './components/commonFunctions/commonFunc'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route
        path="/profileUser"
        element={
          <ProtectedRoute>
            <ProfileUserPage />
          </ProtectedRoute>
        }
      />
      <Route path="/profileSeller/:userId" element={<ProfileSellerPage />} />
      <Route path="/changeAds/:type/:id" element={<ChangeFormAds />} />
      <Route path="/AdsPage/:idAds" element={<AdsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
/* <Route path="/MyAdsPage" element={<MyAdsPage />} /> */
