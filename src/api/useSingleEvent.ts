import { rememberQuery } from './CacheManager.tsx'
import { QueryId } from '../types/api.ts'
import { useStore } from '../stores/settingStore.tsx'
import { useMemo } from 'react'

const useSingleEvent = (id: string) => {
  const { language } = useStore()
  const events = useMemo(() => rememberQuery(QueryId.TODAYS_EVENTS, language), [language])

  return events ? events[id] : null
}

export default useSingleEvent
