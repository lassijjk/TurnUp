import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { Box } from '@mui/material'
import RoomIcon from '@mui/icons-material/Room'

type MapComponentProps = {
  latitude: number
  longitude: number
}
const initMap = (container: HTMLDivElement, coords: [number, number]) => {
  mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_KEY as string

  const map = new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/streets-v12',
    pitchWithRotate: false,
    center: coords,
    zoom: 15,
    doubleClickZoom: false,
  })

  new mapboxgl.Marker({
    color: '#ff1500',
    draggable: false,
  })
    .setLngLat(coords)
    .addTo(map)

  return map
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      initMap(mapRef.current, [longitude, latitude])
    }
  }, [latitude, longitude])

  return (
    <Box component="div" ref={mapRef} className="mapComponent">
      <RoomIcon />
    </Box>
  )
}

export default MapComponent