import React, { useEffect, useRef } from 'react'
import './MapComponent.css'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { Box } from '@mui/material'
import useGeoLocation, { GeoLocationData } from '../../api/useGeoLocation'
import { EventLocationData } from '../../types/event'
import { VITE_MAP_BOX_KEY } from '../../constants'

type MapComponentProps = {
  eventLocationData: EventLocationData
}

const initMap = (container: HTMLDivElement, eventLocation: EventLocationData, userLocation: GeoLocationData) => {
  mapboxgl.accessToken = VITE_MAP_BOX_KEY
  const map = new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [userLocation.longitude, userLocation.latitude],
    zoom: 13,
  })

  return map
}

const MapComponent: React.FC<MapComponentProps> = ({ eventLocationData }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { geoLocationData } = useGeoLocation()

  useEffect(() => {
    if (mapRef.current && eventLocationData && geoLocationData) {
      const map = initMap(mapRef.current, eventLocationData, geoLocationData)

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'imperial',
        profile: 'mapbox/walking',
        interactive: true,
        controls: {
          traffic: true,
          inputs: true,
          instructions: true,
          profileSwitcher: true,
        },
        traffic: 'live',
        language: 'en',
      })

      setTimeout(() => {
        directions.setOrigin([geoLocationData.longitude, geoLocationData.latitude])
        directions.setDestination([eventLocationData.longitude, eventLocationData.latitude])
      }, 1000)

      map.addControl(directions, 'top-left')
    }
  }, [eventLocationData, geoLocationData])

  return <Box component="div" ref={mapRef} className="mapComponent" />
}

export default MapComponent
