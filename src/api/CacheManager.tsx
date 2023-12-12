import { DurationStamp, MaxCacheDuration, QueryId, TimeInMilliseconds, mapMaxCacheDuration } from '../types/api.ts'

const TIMESTAMP_ID: string = 'timestamp-'
const DEFAULT_MAX_CACHE_TIME: DurationStamp = { h: 0, m: 20, s: 0 }

export const rememberQuery = (queryId: QueryId, extension: string) => {
  const data = sessionStorage.getItem(buildQueryId(queryId, extension))
  const cachedTimestamp = sessionStorage.getItem(getTimeStampId(queryId, extension))
  if (data && cachedTimestamp && now() - parseInt(cachedTimestamp) <= getMaxCacheTime(queryId)) {
    return JSON.parse(data)
  }
  return null
}

function buildQueryId(queryId: QueryId, extension: string) {
  return queryId + (extension ? '-' + extension : '')
}

function getTimeStampId(queryId: QueryId, extension: string) {
  return TIMESTAMP_ID + buildQueryId(queryId, extension)
}

function getMaxCacheTime(queryId: QueryId): number {
  const duration: DurationStamp = getMaxCacheDuration(queryId)
  return (
    TimeInMilliseconds.HOUR * duration.h +
    TimeInMilliseconds.MINUTE * duration.m +
    TimeInMilliseconds.SECOND * duration.s
  )
}

function getMaxCacheDuration(queryId: QueryId): DurationStamp {
  switch (queryId) {
    case QueryId.TODAYS_EVENTS:
      return mapMaxCacheDuration[MaxCacheDuration.TODAYS_EVENTS]
  }
  return DEFAULT_MAX_CACHE_TIME
}

function now() {
  return new Date().getTime()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cacheQuery = (queryId: QueryId, extension: string, data: any) => {
  sessionStorage.setItem(buildQueryId(queryId, extension), JSON.stringify(data))
  sessionStorage.setItem(getTimeStampId(queryId, extension), now().toString())
}
