import React from 'react'
import './EventCard.css'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EventTag from '../Buttons/EventTag.tsx'
import { EventObj, EventTagType } from '../../types/event.ts'
import { Box, Grid, Typography } from '@mui/material'

type EventCardProps = {
  event: EventObj
}

const EventCard: React.FC<EventCardProps> = ({ event }: EventCardProps) => {
  const dayTemp = String(new Date(event.startTime).getUTCDate()).padStart(2, '0')
  const getVariant = (offset: number = 0): EventTagType => {
    switch (offset) {
      case 0:
        return EventTagType.CULTURE
      case 1:
        return EventTagType.FINE_DINING
      case 2:
        return EventTagType.FOR_KIDS
      case 3:
        return EventTagType.MUSIC
      case 4:
        return EventTagType.OUTDOOR
      case 5:
        return EventTagType.RELIGION
      case 6:
        return EventTagType.SPORTS
      default:
        return EventTagType.DEFAULT
    }
  }

  const convertToReadableTime = (time: string | Date): string => {
    // Input date in ISO 8601 format
    const inputDate = new Date(time)

    // Create an array of day names and month names
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // Extract day, month, and year from the input date
    const dayOfWeek = daysOfWeek[inputDate.getUTCDay()]
    const dayOfMonth = inputDate.getUTCDate()
    const year = inputDate.getUTCFullYear()

    // Format the date as "Day Date.Month.Year"
    const formattedDate = `${dayOfWeek} ${dayOfMonth}.${inputDate.getUTCMonth() + 1}.${year}`

    return formattedDate
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="event-card-frame">
      <Box className="event-card-content">
        <Box>
          <img src={event.images[0].url} />
        </Box>
        <Box className="event-card-info">
          <Typography component="div" variant="h3" className="event-name">
            {event.name}
          </Typography>
          <Box component="div" className="time-to">
            <CalendarMonthIcon sx={{ color: '#d1410c' }} />
            <Typography component="div" className="event-card-time">
              {convertToReadableTime(event.startTime) + ' - ' + convertToReadableTime(event.endTime)}
            </Typography>
          </Box>
          <Box component="div" className="travel-time">
            <DirectionsBusIcon sx={{ color: '#6f7287' }} />
            <Typography component="div" className="event-card-bus-time">
              {dayTemp} min
            </Typography>
          </Box>
          <Box component="div" className="event-card-tags">
            <EventTag variant={getVariant(Number.parseInt(dayTemp) % 7)}></EventTag>
            <EventTag variant={getVariant(1 + (Number.parseInt(dayTemp) % 4))}></EventTag>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default EventCard
