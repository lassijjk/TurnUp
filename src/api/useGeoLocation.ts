import { useEffect, useState } from 'react'

export interface GeoLocationData {
  latitude: number
  longitude: number
}

export default function useGeoLocation() {
  const [error, setError] = useState<string | null>()
  const [geoLocationData, setGeoLocationData] = useState<GeoLocationData>()
  const [permissionAlert, setPermissionAlert] = useState(true)

  const successHandler = (position: GeolocationPosition) => {
    setError(null)
    setGeoLocationData({ latitude: position.coords.latitude, longitude: position.coords.longitude })
  }
  const errorHandler = (error: GeolocationPositionError) => {
    setError(error.message)
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
