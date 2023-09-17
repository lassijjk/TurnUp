import './EventList.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

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
  // Add other fields you need here
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const eventsPerPage = 10 // Set the number of events to display per page

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

  // Function to find the latest date within an event's dates array
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

  // Function to format date and time
  const formatDate = (datetime: string) => {
    const date = new Date(datetime)
    return date.toLocaleDateString() // You can customize the format here
  }

  const formatTime = (datetime: string) => {
    const date = new Date(datetime)
    return date.toLocaleTimeString() // You can customize the format here
  }

  // Filter events happening on today's date
  const today = new Date().toISOString().split('T')[0] // Get today's date in "YYYY-MM-DD" format
  const todayEvents = events.filter((event) => {
    const latestDate = findLatestDate(event.dates)
    return latestDate && latestDate.start.startsWith(today)
  })

  // Paginate events
  const offset = currentPage * eventsPerPage
  const paginatedEvents = todayEvents.slice(offset, offset + eventsPerPage)

  return (
    <div>
      <h2>Events Today</h2>
      <div className="gap"></div>
      <div className="gap2"></div>
      <div className="gap3"></div> {/* Add a gap */}
      <div className="event-card-container">
        {paginatedEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-header">
              <div className="event-title">{event.name}</div>
            </div>
            <div className="event-details">
              <div className="event-datetime">
                <div className="event-start">
                  <div className="label">Start Date:</div>
                  <div className="value">{formatDate(event.start_time)}</div>
                </div>
                <div className="event-start">
                  <div className="label">Start Time:</div>
                  <div className="value">{formatTime(event.start_time)}</div>
                </div>
              </div>
              <div className="event-datetime">
                <div className="event-end">
                  <div className="label">End Date:</div>
                  <div className="value">{formatDate(event.end_time)}</div>
                </div>
                <div className="event-end">
                  <div className="label">End Time:</div>
                  <div className="value">{formatTime(event.end_time)}</div>
                </div>
              </div>
              <div className="event-address">
                <div className="label">Address:</div>
                <div className="value">{event.locations[0]?.address || 'N/A'}</div>
              </div>
              {/* Add additional details here */}
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination-container">
        <ReactPaginate
          pageCount={Math.ceil(todayEvents.length / eventsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={(selectedPage) => setCurrentPage(selectedPage.selected)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  )
}
export default EventList
