import './Home.css'
import { Helmet } from 'react-helmet-async'
import EventCard from '../components/Cards/EventCard.tsx'
import UseTodaysEvents from '../api/UseTodaysEvents.tsx'
import { EventObj } from '../types/event.ts'
import { Box } from '@mui/material'

const Home = () => {
  const events = UseTodaysEvents(16)

  return (
    <>
      <Helmet>
        <title>Turn Up</title>
      </Helmet>
      <Box component="div" className="event-card-container">
        {events.map((event: EventObj) => (
          <EventCard event={event} key={event.id} />
        ))}
      </Box>
    </>
  )
}

export default Home
