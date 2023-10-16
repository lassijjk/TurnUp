import React from 'react'
import './EventCard.css'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EventTag from '../Buttons/EventTag.tsx'
import { EventObj } from '../../types/event.ts'
import getTags from '../Buttons/EventTagger.tsx'
import { Box, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useStore } from '../../stores/settingStore.tsx'
import { convertToReadableDate } from '../../utils/convertToReadableDate.ts'

type EventCardProps = {
  event: EventObj
  onClick: () => void
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }: EventCardProps) => {
  const { language } = useStore()
  const { t } = useTranslation()
  const dayTemp = String(new Date(event.start_time).getUTCDate()).padStart(2, '0')

  const startTime = convertToReadableDate(event.start_time, t)
  const endTime = convertToReadableDate(event.end_time, t)

  const getEventTags = (event: EventObj) => {
    const tags = getTags(event, 2, language)
    return (
      <>
        {tags.map((tag) => (
          <EventTag key={tag} variant={tag}></EventTag>
        ))}
      </>
    )
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="event-card-frame" onClick={onClick}>
      <Box className="event-card-content">
        <Box>
          <img src={event.images[0].url} />
        </Box>
        <Box className="event-card-info">
          <Typography component="div" variant="h3" className="event-name">
            {event.name}
          </Typography>
          <Box component="div" className="time-to">
            <CalendarMonthIcon sx={{ color: '#c83e36' }} />
            <Typography component="div" className="event-card-time">
              {startTime + ' - ' + endTime}
            </Typography>
          </Box>
          <Box component="div" className="travel-time">
            <DirectionsBusIcon sx={{ color: '#686872' }} />
            <Typography component="div" className="event-card-bus-time">
              {dayTemp} min
            </Typography>
          </Box>
          <Box component="div" className="event-card-tags">
            {getEventTags(event)}
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default EventCard