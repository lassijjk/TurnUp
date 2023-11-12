import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { EventObj } from '../types/event.ts'
import { useStore } from '../stores/settingStore.tsx'
import { LanguageFullName } from '../types/language.ts'
import { cacheQuery, rememberQuery } from './cacheManager.tsx'
import { QueryId } from '../types/api.ts'

const useTodaysEvents = (max: number = 0) => {
  const { language } = useStore()
  const queryId: QueryId = QueryId.TODAYS_EVENTS
  const [events, setEvents] = useState<Map<string, EventObj[]>>(rememberQuery(queryId, language) ?? {})

  useEffect(() => {
    const currentEvents = rememberQuery(queryId, language)
    if (!currentEvents || !Object.values(currentEvents).length) {
      axios
        .get(
          `https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=${
            language === LanguageFullName.FINNISH ? 'fi' : 'en'
          }`
        )
        .then((response) => {
          const data = _.keyBy(response.data, '_id')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setEvents(data as any)
          cacheQuery(queryId, language, data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          return []
        })
    } else {
      setEvents(currentEvents)
    }
  }, [language])

  return max ? _.take(Object.values(events), max) : events
}

export default useTodaysEvents
