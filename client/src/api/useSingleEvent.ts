import { rememberQuery } from './CacheManager.tsx'
import { QueryId } from '../types/api.ts'
import { useStore } from '../stores/settingStore.tsx'

const useSingleEvent = (id: string) => {
  const { language } = useStore()
  const events = rememberQuery(QueryId.TODAYS_EVENTS, language)
  return events ? events[id] : null
}

export default useSingleEvent
