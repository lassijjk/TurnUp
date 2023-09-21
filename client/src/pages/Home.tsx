import './Home.css'
import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from "../components/Cards/EventCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import UseTodaysEvents from "../api/UseTodaysEvents.tsx";
import _ from 'lodash';

const Home = () => {
    const { t } = useTranslation();
    const events = UseTodaysEvents();
    const categories = _(events)
        .flatMap('tags')
        .uniq()
        .sort()
        .value();
    console.log(244, categories);

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
