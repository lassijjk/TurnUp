import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { EventObj } from '../types/event'

interface EventAPI {
  id: number
  name: string
  description: string
  images: Array<string>
  start_time: string
}

const UseTodaysEvents = (max: number): EventObj[] => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get('https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=en')
      .then((response) => {
        setEvents(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return _.take(events, max).map((event: EventAPI) => {
    return {
      id: event.id,
      name: event.name,
      description: event.description,
      startTime: event.start_time,
      images: event.images,
    }
  })
}

export default UseTodaysEvents
