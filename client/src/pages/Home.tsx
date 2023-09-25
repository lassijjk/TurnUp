import './Home.css'
import { Box, Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from '../components/Cards/EventCard.tsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UseTodaysEvents from '../api/UseTodaysEvents.tsx'
import _ from 'lodash'
import { EventObj } from '../types/event.ts'
import UseSingleEvent from '../api/UseSingleEvent.tsx'
import { useStore } from '../stores/settingStore.tsx'

const Home = () => {
  const ITEMS_ON_PAGE: number = 16
  const { t } = useTranslation()
  const events = UseTodaysEvents(ITEMS_ON_PAGE)
  const event = UseSingleEvent('609a0f81254a504749b51b3c')

  return (
    <>
      <Helmet>
        <title>Turn Up</title>
      </Helmet>
      <Grid container className="event-card-container">
        <Grid item xs={12}>
          <Typography component="h1" className="home-title">
            {t('EVENT_LIST.QUESTION')}
          </Typography>
        </Grid>
        {events.map((event: EventObj) => (
          <EventCard event={event} key={event.id} />
        ))}
      </Grid>
    </>
  )
}

export default Home
