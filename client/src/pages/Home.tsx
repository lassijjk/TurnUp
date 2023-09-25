import './Home.css'
import { Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from '../components/Cards/EventCard.tsx'
import { EventObj } from '../types/event.ts'
import UseTodaysEvents from '../api/UseTodaysEvents.tsx'

const Home = () => {
  const { t } = useTranslation()
  const events = UseTodaysEvents(16)

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
