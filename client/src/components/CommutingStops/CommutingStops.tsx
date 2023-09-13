import React, { useState } from 'react'
import axios from 'axios'
import { VITE_DIGI_TRANSIT_API_KEY, DIGI_TRANSIT_API_URL } from '../../constants'
import { Leg, Itinerary, Plan } from './interface'

const CommutingStops: React.FC = () => {
  const [data, setData] = useState<Plan | null>()
  const [error, setError] = useState<string | null>()

  const handleGraphQLRequest = async () => {
    try {
      const response = await axios.post(
        `${DIGI_TRANSIT_API_URL}?digitransit-subscription-key=${VITE_DIGI_TRANSIT_API_KEY}`,
        {
          query: `
            query {
                plan(
                  from: {lat: 61.4941, lon: 23.7792}
                  to: {lat: 61.5038, lon: 23.8088}
                  numItineraries: 1
                ) {
                  itineraries {
                    legs {
                      startTime
                      endTime
                      mode
                      duration
                      realTime
                      distance
                      transitLeg
                    }
                  }
                }
              }
          `,
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

  return (
    <div>
      <button onClick={handleGraphQLRequest}>Let's Go</button>
      {error && <p>{error}</p>}
      {data &&
        data.plan.itineraries.map((itinerary: Itinerary) =>
          itinerary.legs.map((leg: Leg) => (
            <div>
              <p>
                {leg.mode} - {Math.round(leg.distance)} meters
              </p>
            </div>
          ))
        )}
    </div>
  )
}

export default CommutingStops
