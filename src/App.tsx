import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import Event from './pages/Event.tsx'
import Navbar from './components/Navbar'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { useStore } from './stores/settingStore.tsx'
import english from './translations/english.json'
import finnish from './translations/finnish.json'
import UserSettings from './pages/UserSettings.tsx'
import { useAuthUser } from './hooks/userHooks.tsx'
import { useGetUserData } from './hooks/appSyncHooks.tsx'
import { useEffect, useState } from 'react'
import LoginWizard from './components/LoginWizard/LoginWizard.tsx'
import Itineraries from './pages/Itineraries.tsx'
import EditItineraries from './pages/EditItineraries.tsx'

interface ProtectedRouteProps {
  isLoggedInUser: boolean
  children?: JSX.Element
}

const ProtectedRoute = ({ isLoggedInUser, children }: ProtectedRouteProps) => {
  if (!isLoggedInUser) {
    return <Navigate to="/" replace />
  }

  return children ? children : <Outlet />
}

const App = () => {
  const { language, changeLanguage } = useStore()
  const isLoggedInUser = useAuthUser()
  const userData = useGetUserData()
  const [showLoginWizard, setShowLoginWizard] = useState(false)

  useEffect(() => {
    const userItem = userData?.userBySub?.items[0]
    if (userItem && userItem.language) {
      changeLanguage(userItem.language)
    }

    if (userData && !userData?.userBySub?.items[0]?.loginWizard) {
      setShowLoginWizard(true)
    }
  }, [userData])

  i18next.init({
    resources: {
      English: { translation: english },
      Finnish: { translation: finnish },
    },
    lng: language,
    fallbackLng: 'en',
  })
  return (
    <div className="app">
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Navbar />
          <LoginWizard open={showLoginWizard} onClose={() => setShowLoginWizard(false)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/map" element={<Map />} />
            <Route element={<ProtectedRoute isLoggedInUser={!!isLoggedInUser} />}>
              <Route path="/user-settings" element={<UserSettings />} />
            </Route>
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/itineraries/:id" element={<EditItineraries />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </div>
  )
}

export default App
