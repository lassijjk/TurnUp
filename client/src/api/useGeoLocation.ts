import { useEffect, useState } from 'react'

export interface GeoLocationData {
  latitude: number
  longitude: number
}

//const DEFAULT_FROM = { latitude: 61.4984, longitude: 23.7730}
export default function useGeoLocation() {
  const [error, setError] = useState<string | null>()
  const [geoLocationData, setGeoLocationData] = useState<GeoLocationData>()
  const [permissionAlert, setPermissionAlert] = useState(true)

  const successHandler = (e: any) => {
    setError(null)
    setGeoLocationData({ latitude: e.coords.latitude, longitude: e.coords.longitude })
  }
  const errorHandler = (e: any) => {
    setError(e)
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
          } else {
            if (permissionAlert) alert('Please grant location permission')
            setPermissionAlert(false)
            console.error('Error getting user location:', error)
          }
        })
        .catch((error) => {
          setError(`Error: ${error.message}`)
        })
    }
  }, [navigator.permissions])

  return { error, geoLocationData }
}
