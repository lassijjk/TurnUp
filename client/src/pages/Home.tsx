import './Home.css'
import { Helmet } from 'react-helmet-async'
import EventCard from '../components/Cards/EventCard.tsx'
import UseTodaysEvents from '../api/UseTodaysEvents.tsx'
import { EventObj } from '../types/event.ts'
import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const events = UseTodaysEvents(16)
  const navigate = useNavigate()

  const handleEventClick = (eventId: number) => {
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
            Want to spice up today?
          </Typography>
        </Grid>
        {events.map((event: EventObj) => (
          <EventCard
            event={event}
            key={event.id}
            onClick={() => {
              console.log(event.id)
              handleEventClick(event.id)
            }}
          />
        ))}
      </Grid>
    </>
  )
}

export default Home
