import './Home.css'
import { Box, Grid, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import EventCard from '../components/Cards/EventCard.tsx'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UseTodaysEvents from '../api/UseTodaysEvents.tsx'
import _ from 'lodash'
import { EventObj, EventTagType } from '../types/event.ts'
import UseSingleEvent from '../api/UseSingleEvent.tsx'
import { useStore } from '../stores/settingStore.tsx'
import EventTag from '../components/Buttons/EventTag.tsx'
import { scrollTop } from '../components/Buttons/WindowManipulation.tsx'
import { HomeSearchParams } from '../types/searchParams.ts'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const ITEMS_ON_PAGE: number = 16
  const navigator = useNavigate()
  const { t } = useTranslation()
  const searchParams = new URLSearchParams(location.search)
  const [selectedTag, setSelectedTag] = useState(searchParams.get(HomeSearchParams.TAG) ?? '')
  const events = UseTodaysEvents(ITEMS_ON_PAGE, selectedTag)
  const tags: Array<string> = Object.values(EventTagType)
  console.log(222, selectedTag)

  const onTagSelected = (tag: string) => {
    setSelectedTag(tag)
    searchParams.set(HomeSearchParams.TAG, tag)
    navigator(`?${searchParams.toString()}`)
    scrollTop()
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
          <EventCard event={event} key={event.id} />
        ))}
        <Grid container className="tags-footer-container">
          {tags.map((tag: string) => (
            <EventTag key={tag} variant={tag} size={'large'} onClick={() => onTagSelected(tag)}></EventTag>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Home
