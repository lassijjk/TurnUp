import { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { EventObj } from '../types/event.ts'
import { useStore } from '../stores/settingStore'
import { LanguageFullName } from '../types/language.ts'

const UseTodaysEvents = (max: number = 0) => {
  const [events, setEvents] = useState<EventObj[]>([])
  const { language } = useStore()

  useEffect(() => {
    axios
      .get(
        `https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=${
          language === LanguageFullName.FINNISH ? 'fi' : 'en'
        }`
      )
      .then((response) => {
        setEvents(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        return []
      })
  }, [language])

  return max ? _.take(events, max) : events
}

export default UseTodaysEvents
