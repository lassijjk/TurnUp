import './Home.css'
import { Box, Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from "../components/Cards/EventCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import UseTodaysEvents from "../api/UseTodaysEvents.tsx";
import _ from 'lodash';
import { EventObj } from '../types/event.ts'

const domainRegex = /^(?:https?:\/\/)?(?:w{3,}\.)?([^\/]+)/;

const Home = () => {
    const { t } = useTranslation();
    const events = UseTodaysEvents();
    const categories = _(events)
        .flatMap('locations')
        .map(location => location.address)
        .filter()
        .uniq()
        .sort()
        .value();
    console.log(244, categories);

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
          <EventCard event={event} key={event.id} />
        ))}
      </Grid>
    </>
  )
}

export default Home
