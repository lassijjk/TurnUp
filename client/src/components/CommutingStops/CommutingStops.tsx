import React, { useState } from 'react'
import axios from 'axios'
import { Button, Grid, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { VITE_DIGI_TRANSIT_API_KEY, DIGI_TRANSIT_API_URL } from '../../constants'
import { LocationPoint, Plan, Itinerary, Leg } from '../../types/commutingStop'

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  minHeight: '250px',
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#fff',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

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

const CommutingStops: React.FC = () => {
  const [data, setData] = useState<Plan | null>()
  const [error, setError] = useState<string | null>()

  const from = { lat: 61.679128, lon: 23.881073 }
  const to = { lat: 61.5038, lon: 23.8088 }

  const handleGraphQLRequest = async () => {
    try {
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
  const lastBusStopName = mappedItineraries[0]?.[mappedItineraries[0].length - 1]?.to.name

  const buttonStyle = {
    backgroundColor: '#418155',
    color: 'white',
  }
  return (
    <Grid container className="event-card-container">
      {/* <Grid item xs={12}>
        <Typography component="h3">Home {`->`} </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Item>
          <Button style={buttonStyle} onClick={handleGraphQLRequest}>
            Let's Go
          </Button>

          {error && <p>{error}</p>}
          {data &&
            data.plan.itineraries.map((itinerary: Itinerary, itineraryIndex: number) =>
              getFirstWalk(itinerary).map((leg: Leg, legIndex: number) => (
                <div key={`itinerary-${itineraryIndex}-leg-${legIndex}`}>
                  {firstBusStopName && (
                    <>
                      <p>
                        {leg.mode} to the nearest bus stop, {Math.round(leg.duration / 60)} minutes.
                      </p>
                      <hr />
                      <p> Nearest station: {firstBusStopName} </p>
                    </>
                  )}
                  {legsWithWalkExcluded.length === 0 && (
                    <p>
                      {leg.mode} to destination {Math.round(leg.duration / 60)} minutes.
                    </p>
                  )}
                  {lastBusStopName && <p> Destination: {lastBusStopName}</p>}
                </div>
              ))
            )}
        </Item>
      </Grid>
    </Grid>
  )
}
export default CommutingStops
