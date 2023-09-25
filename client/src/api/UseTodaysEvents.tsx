import { useEffect, useState } from 'react'
import axios from 'axios'
import _, { keyBy } from 'lodash'
import { EventObj, EventTagType } from '../types/event.ts'
import { useStore } from '../stores/settingStore'
import { Language } from '../types/language.ts'
import { cacheQuery, rememberQuery } from './CacheManager.tsx'
import { QueryId } from '../types/api.ts'
import eventTagger from '../components/Buttons/EventTagger.tsx'

const UseTodaysEvents = (max: number = 0, selectedTag: string) => {
  const { language } = useStore()
  const queryId: QueryId = QueryId.TODAYS_EVENTS
  const [events, setEvents] = useState<Map<string, EventObj[]>>(rememberQuery(queryId, language) ?? {})

  useEffect(() => {
    const currentEvents = rememberQuery(queryId, language)
    if (!currentEvents || !Object.values(currentEvents).length) {
      axios
        .get(
          `https://api.visittampere.com/api/v1/eventztoday/event/all/?lang=${
            language === Language.FINNISH ? 'fi' : 'en'
          }`
        )
        .then((response) => {
          const data = response.data.map((event) => {
            event.tags = eventTagger(event, Object.values(EventTagType).length, language)
            return event
          })
          const mappedData = _.keyBy(data, '_id')
          setEvents(mappedData)
          cacheQuery(queryId, language, mappedData)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          return []
        })
    } else {
      setEvents(currentEvents)
    }
  }, [language, selectedTag])

  return max
    ? _.take(
        selectedTag.length
          ? Object.values(events).filter((event) => event.tags.includes(selectedTag))
          : Object.values(events),
        max
      )
    : events
}

export default UseTodaysEvents
