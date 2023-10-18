import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { VITE_DIGI_TRANSIT_API_KEY, DIGI_TRANSIT_API_URL } from '../constants'
import { LocationPoint, Plan, Itinerary, Leg } from '../types/commutingStop'
import useGeoLocation, { GeoLocationData } from '../api/useGeoLocation'

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  minHeight: '20px',
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#39364f',
  color: 'white',
  textAlign: 'center',
}))

interface CommutingStopsProps {
  eventLocationData: {
    latitude: number
    longitude: number
  }
}

const getCommutingStopsQuery = (from: LocationPoint, to: LocationPoint) => {
  return `
    query {
        plan(
          from: {lat: ${from.lat}, lon: ${from.lon}}
          to: {lat: ${to.lat}, lon: ${to.lon}}
          numItineraries: 1
        ) {
          itineraries {
            legs {
              mode
              duration
              distance
              transitLeg
              from {
                name
                stop {
                  code
                  name
                }
              },
              to {
                name
                 stop {
                  code
                  name
                }
              },
            }
          }
        }
      }
  `
}

const CommutingStops = ({ eventLocationData }: CommutingStopsProps) => {
  const [data, setData] = useState<Plan | null>()
  const [error, setError] = useState<string | null>()
  const [isLoading, setIsLoading] = useState(true)

  const { geoLocationData } = useGeoLocation()

  const { latitude: toLatitude, longitude: toLongitude } = eventLocationData
  const to = { lat: toLatitude, lon: toLongitude }

  useEffect(() => {
    handleGraphQLRequest(geoLocationData)
  }, [geoLocationData])

  const handleGraphQLRequest = async (geoLocationD: GeoLocationData | undefined) => {
    try {
      if (!geoLocationD) {
        return
      }
      const from = { lat: geoLocationD.latitude, lon: geoLocationD.longitude }
      const response = await axios.post(
        `${DIGI_TRANSIT_API_URL}?digitransit-subscription-key=${VITE_DIGI_TRANSIT_API_KEY}`,
        {
          query: getCommutingStopsQuery(from, to),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setData(response.data.data)
      setError(null)
      setIsLoading(false)
    } catch (err) {
      setError(err + ' An error occurred while fetching data.')
      setData(null)
    }
  }

  const legsWithWalkExcluded = (itinerary: Itinerary) => itinerary.legs.filter((leg) => leg.mode !== 'WALK')

  const walkToFirstStop = (itinerary: Itinerary) => itinerary.legs.filter((leg) => leg.mode == 'WALK')

  const getFirstAndLast = (itinerary: Itinerary) => {
    const [first, last, ..._] = legsWithWalkExcluded(itinerary)
    return [first, last]
  }

  const getFirstWalk = (itinerary: Itinerary) => {
    const [first, ..._] = walkToFirstStop(itinerary)
    return [first]
  }
  const mappedItineraries = data ? data.plan.itineraries.map((itinerary: Itinerary) => getFirstAndLast(itinerary)) : []
  const firstBusStopName = mappedItineraries[0]?.[0]?.from.name
  const lastBusStopName =
    mappedItineraries[0]?.[1] !== undefined
      ? mappedItineraries[0]?.[mappedItineraries[0].length - 1]?.to.name
      : mappedItineraries[0]?.[0]?.to.name

  const hasNoItinirary = !isLoading && data && !data.plan.itineraries.length
  const showItinirary = !isLoading && data && data.plan.itineraries.length > 0

  return (
    <Grid container className="commute-container">
      {error && <p>{error}</p>}

      {isLoading && <p>Loading...</p>}
      {hasNoItinirary && <p>Route couldn't be planned with current location!</p>}

      {showItinirary && (
        <Grid item xs={12}>
          <Item>
            {data &&
              data.plan.itineraries.map((itinerary: Itinerary, itineraryIndex: number) =>
                getFirstWalk(itinerary).map((leg: Leg, legIndex: number) => (
                  <div key={`itinerary-${itineraryIndex}-leg-${legIndex}`}>
                    {firstBusStopName && (
                      <>
                        <p>Walk to the nearest bus stop, {Math.round(leg.duration / 60)} minutes.</p>
                        <hr />
                        <p> Nearest station: {firstBusStopName} </p>
                      </>
                    )}
                    {lastBusStopName && <p> Destination: {lastBusStopName}</p>}
                    {mappedItineraries[0][0] == undefined && (
                      <p>Walk to destination {Math.round(leg.duration / 60)} minutes.</p>
                    )}
                  </div>
                ))
              )}
          </Item>
        </Grid>
      )}
    </Grid>
  )
}
export default CommutingStops
