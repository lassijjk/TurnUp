import './Home.css'
import { Box, Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import EventCard from '../components/Cards/EventCard.tsx'
import { EventObj } from '../types/event.ts'
import useTodaysEvents from '../api/useTodaysEvents.ts'

const Home = () => {
  const ITEMS_ON_PAGE: number = 16
  const { t } = useTranslation()
  const events = useTodaysEvents(ITEMS_ON_PAGE)
  const navigate = useNavigate()

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`)
  }

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
          <EventCard
            event={event}
            key={event.id}
            onClick={() => {
              const [id] = event.id.split('-')
              handleEventClick(id)
            }}
          />
        ))}
      </Grid>
    </>
  )
}

export default Home
