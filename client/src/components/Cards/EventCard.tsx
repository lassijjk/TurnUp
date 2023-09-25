import React, { useState } from 'react'
import './EventCard.css'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EventTag from '../Buttons/EventTag.tsx'
import { EventObj, EventTagType } from '../../types/event.ts'
import getTags from '../Buttons/EventTagger.tsx'
import { Box, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import _ from "lodash";

type EventCardProps = {
  event: EventObj
}

const EventCard: React.FC<EventCardProps> = ({ event }: EventCardProps) => {
  const { language } = useLocation()
  const { t } = useTranslation()
  const dayTemp = String(new Date(event.start_time).getUTCDate()).padStart(2, '0')

  const convertToReadableTime = (time: string | Date): string => {
    const inputDate = new Date(time)
    const dayOfWeek = t('DATE.SHORT.' + inputDate.getUTCDay().toString())
    const dayOfMonth = inputDate.getUTCDate()
    const year = inputDate.getUTCFullYear()

    // Format the date as "Day Date.Month.Year"
    const formattedDate = `${dayOfWeek} ${dayOfMonth}.${inputDate.getUTCMonth() + 1}.${year}`

    return formattedDate
  }

  const getEventTags = (event: EventObj) => {
    const tags = _.take(event.tags, 2);
    return (
      <>
        {tags.map((tag) => (
          <EventTag key={tag} variant={tag}></EventTag>
        ))}
      </>
    )
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
            <CalendarMonthIcon sx={{ color: '#c83e36' }} />
            <Typography component="div" className="event-card-time">
              {convertToReadableTime(event.start_time) + ' - ' + convertToReadableTime(event.end_time)}
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
