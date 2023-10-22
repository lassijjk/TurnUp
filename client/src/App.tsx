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
  const { language } = useStore()
  const isLoggedInUser = useAuthUser()
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/map" element={<Map />} />
            <Route element={<ProtectedRoute isLoggedInUser={!!isLoggedInUser} />}>
              <Route path="/user-settings" element={<UserSettings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </div>
  )
}

export default App
