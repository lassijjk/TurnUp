import axios from 'axios'
import { useEffect, useState } from 'react'
import { useStore } from '../stores/settingStore'

interface EventAPI {
  id: number
  name: string
  description: string
  images: Array<{ url: string; type: string; width: number; height: number }>
  start_time: string
  end_time: string
}

const useGetSingleEvent = (id: string) => {
  const [event, setEvent] = useState([])
  const { language } = useStore()

  useEffect(() => {
    // TODO: @finnan - check if the id is not empty
    // Note: visittampere single event api expects uuid and `eventztoday` api only returns a normal string id

    axios
      .get(`https://api.visittampere.com/api/v1/visittampere/event/${id}/`)
      .then((response) => {
        setEvent(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [language])

  return event.map((event: EventAPI) => {
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

export default useGetSingleEvent
