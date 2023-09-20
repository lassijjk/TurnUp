import React, { useState } from 'react'
import './EventCard.css'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import EventTag from '../Buttons/EventTag.tsx'
import { EventObj, EventTagType } from '../../types/event.ts'
import { Box, Typography } from '@mui/material'

type EventCardProps = {
  event: EventObj
}

const EventCard: React.FC<EventCardProps> = ({ event }: EventCardProps) => {
  const [dayTemp, setDay] = useState('0')
  function toDateString(time: string) {
    const date = new Date(time)

    const day = String(date.getUTCDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const year = date.getUTCFullYear()

    if (dayTemp === '0') {
      setDay(day)
    }

    return `${day}/${month}/${year}`
  }

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

  return (
    <Box component="div" className="event-card-frame">
      <Typography component="div" variant="h3" className="event-name">
        {event.name}
      </Typography>
      <Box component="div" className="time-to">
        <h4>{toDateString(event.startTime)}</h4>
        <Box component="div" className="event-card-tags">
          <EventTag variant={getVariant(Number.parseInt(dayTemp) % 7)}></EventTag>
          <EventTag variant={getVariant(1 + (Number.parseInt(dayTemp) % 4))}></EventTag>
        </Box>
      </Box>
      <Box component="div" className="travel-time">
        <h4>{dayTemp} min</h4>
        <DirectionsBusIcon fontSize="large" className="bus-icon" />
      </Box>
    </Box>
  )
}

export default EventCard
