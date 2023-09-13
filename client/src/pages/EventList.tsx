import './EventList.css'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

interface Location {
  address: string
  page_id: string | null
  geoIndex: [number, number]
  location_id: string
}

interface DateInfo {
  end: string
  start: string
  isSoldOut: boolean
}

interface Event {
  id: string
  _id: string
  creationDate: string
  modificationDate: string
  name: string
  start_time: string
  end_time: string
  locations: Location[]
  dates: DateInfo[]
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=en')
      .then((response) => {
        // Extract relevant fields from the API response
        setEvents(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  //  latest date
  const findLatestDate = (dates: DateInfo[]) => {
    if (dates.length === 0) {
      return null
    }

    return dates.reduce(
      (latest, date) => {
        const currentDate = new Date(date.start).getTime()
        if (!latest || currentDate > new Date(latest.start).getTime()) {
          return date
        }
        return latest
      },
      null as DateInfo | null
    )
  }

  return (
    <div>
      <h2>Events Today</h2>
      <table className="event-table">
        <thead>
          <tr>
            <th className="align-left">Serial Number</th>
            <th className="align-left">Name</th>
            <th className="align-right">Start Time</th>
            <th className="align-right">End Time</th>
            <th className="align-right">Latest Start Date</th>
            <th className="align-right">Latest End Date</th>
            <th className="align-right">Address</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index + 1} className="table-row">
              <td className="align-left">{index + 1}</td>
              <td className="align-left">{event.name}</td>
              <td className="align-right">{event.start_time}</td>
              <td className="align-right">{event.end_time}</td>
              <td className="align-right">{findLatestDate(event.dates)?.start || 'N/A'}</td>
              <td className="align-right">{findLatestDate(event.dates)?.end || 'N/A'}</td>
              <td className="align-right">{event.locations[0]?.address || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventList
