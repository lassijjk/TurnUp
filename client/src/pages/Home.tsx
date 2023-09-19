import './Home.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from "../components/Cards/EventCard.tsx";

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Turn Up</title>
      </Helmet>
      <div className="event-card-container">
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
      </div>

    </>
  )
}

export default Home
