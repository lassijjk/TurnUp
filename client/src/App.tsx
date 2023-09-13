import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import EventList from './pages/EventList.tsx'
import Navbar from './components/Navbar'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { useStore } from './stores/settingStore.tsx'
import english from './translations/english.json'
import finnish from './translations/finnish.json'

const App = () => {
  const { language } = useStore()
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
            <Route path="/map" element={<Map />} />
            <Route path="/eventList" element={<EventList />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </div>
  )
}

export default App
