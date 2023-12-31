import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { HelmetProvider } from 'react-helmet-async'
import { Amplify } from 'aws-amplify'
import awsExports from './aws-config'
Amplify.configure(awsExports)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
