import './Home.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from "../components/Cards/EventCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import UseTodaysEvents from "../api/UseTodaysEvents.tsx";

const Home = () => {
    const { t } = useTranslation();
    const events = UseTodaysEvents(16);

    return (
        <>
          <Helmet>
            <title>Turn Up</title>
          </Helmet>
          <div className="event-card-container">
              {events.map(event => <EventCard event={event} key={event.id} />)}
          </div>

        </>
    )
}

export default Home
