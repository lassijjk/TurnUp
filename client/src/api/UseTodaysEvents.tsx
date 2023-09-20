import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { EventObj } from '../types/event'
import { useStore } from '../stores/settingStore'

interface EventAPI {
  id: number
  name: string
  description: string
  images: Array<{ url: string; type: string; width: number; height: number }>
  start_time: string
  end_time: string
}

const UseTodaysEvents = (max: number): EventObj[] => {
  const [events, setEvents] = useState([])
  const { language } = useStore()

  useEffect(() => {
    axios
      .get(`https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=${language === 'Finnish' ? 'fi' : 'en'}`)
      .then((response) => {
        setEvents(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [language])

  return _.take(events, max).map((event: EventAPI) => {
    return {
      id: event.id,
      name: event.name,
      description: event.description,
      startTime: event.start_time,
      endTime: event.end_time,
      images: event.images,
    }
  })
}

export default UseTodaysEvents
