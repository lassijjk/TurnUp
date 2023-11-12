import { useEffect } from 'react'
import axios from 'axios'
import './Map.css'
import mapboxgl from 'mapbox-gl'
import { Helmet } from 'react-helmet-async'
import { EventLocationData } from '../types/event'
import useGeoLocation from '../api/useGeoLocation'
import { useTranslation } from 'react-i18next'
import eventIcon from '../assets/event_icon.png'
import { Feature } from '../types/map'
import { VITE_MAP_BOX_KEY, VITE_MAP_EVENT_API } from '../constants'
import { convertToReadableDate } from '../utils/convertToReadableDate'
import { useNavigate } from 'react-router-dom'

// Replace with your Mapbox access token
mapboxgl.accessToken = VITE_MAP_BOX_KEY

const Map: React.FC = () => {
  const { t } = useTranslation()
  const { geoLocationData } = useGeoLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetchLocations()
  }, [])

  const fetchLocations = async () => {
    const res = await axios.get(`${VITE_MAP_EVENT_API}?isFetchOnlyLocation=true`)
    const locations: EventLocationData[] = res.data.data.map(
      (location: { id: string; name: string; geoIndex: [string, string] }) => {
        return {
          id: location.id,
          name: location.name,
          latitude: location.geoIndex[1],
          longitude: location.geoIndex[0],
        }
      }
    )
    initializeMap(locations)
  }

  const initializeMap = (eventLocations: EventLocationData[]) => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: geoLocationData ? [geoLocationData.longitude, geoLocationData.latitude] : [23.7792, 61.4941],
      zoom: 13,
    })
    const points: Array<Feature> = []
    for (let i = 0; i < eventLocations.length; i++) {
      points.push({
        // feature for Mapbox DC
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [eventLocations[i].longitude, eventLocations[i].latitude],
        },
        properties: {
          name: eventLocations[i].name,
          id: eventLocations[i].id,
        },
      })
    }
    map.on('load', () => {
      // Add an image to use as a custom marker
      map.loadImage(eventIcon, (error, image) => {
        if (error) throw error
        map.addImage(
          'custom-marker',
          image as
            | HTMLImageElement
            | ImageBitmap
            | ArrayBufferView
            | { width: number; height: number; data: Uint8Array | Uint8ClampedArray }
            | ImageData
        )
        // Add a GeoJSON source with 2 points
        map.addSource('points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: points,
          },
        })

        // Add a symbol layer
        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: 'points',
          layout: {
            'icon-image': 'custom-marker',
            // get the title name from the source's "title" property
            'text-field': ['get', 'name'],
            'text-size': 10,
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 1.25],
            'text-anchor': 'top',
            'icon-size': 0.075,
          },
        })

        map.on('click', 'points', async (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice()
          const eventId = e.features[0].properties.id
          axios.get(`${VITE_MAP_EVENT_API}?eventId=${e.features[0].properties.id}`).then((res) => {
            const event = res.data.data[0]
            const innerHtmlContent = `
              <img class="mapbox-modal-event-image" src="${event.images[0].url}" alt="mapbox-modal-event-image"></img>
              <div class="mapbox-modal-content-container">
                <h3 class="mapbox-modal-event-name">${event.name}</h3>
                <div class="mapbox-modal-event-time">${
                  convertToReadableDate(event.startTime, t) + ' - ' + convertToReadableDate(event.endTime, t)
                }</div>
              </div>
            `

            const divElement = document.createElement('div')
            const assignBtn = document.createElement('div')
            assignBtn.innerHTML = `<div class="mapbox-modal-event-button-container"><button class="mapbox-modal-event-button">Go to event</button></div>`
            divElement.innerHTML = innerHtmlContent
            divElement.appendChild(assignBtn)
            // btn.className = 'btn';
            assignBtn.addEventListener('click', () => {
              navigate(`/event/${eventId}`)
            })
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
            }

            new mapboxgl.Popup().setLngLat(coordinates).setDOMContent(divElement).addTo(map)
          })
        })

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', () => {
          map.getCanvas().style.cursor = 'pointer'
        })

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', () => {
          map.getCanvas().style.cursor = ''
        })
      })
    })
  }

  return (
    <>
      <Helmet>
        <title>Turn Up | Map</title>
      </Helmet>
      <div id="map" style={{ width: '100%', height: 'calc(100vh - 85px)' }}>
        {/* The map will be rendered inside this div */}
      </div>
    </>
  )
}

export default Map
