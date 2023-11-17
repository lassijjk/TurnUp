import { useParams } from 'react-router-dom'
import axios from 'axios'
import './event.css'
import { Button, Grid, Card, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { convertToReadableDate } from '../utils/convertToReadableDate'
import { convertToReadableTime } from '../utils/convertToReadableTime'
import { useTranslation } from 'react-i18next'
import { Key, useEffect, useState } from 'react'
import CommutingStops from '../components/CommutingStops'
import getTags from '../components/Buttons/EventTagger'
import EventTag from '../components/Buttons/EventTag'
import { EventLocationData, EventObj, SingleEvent } from '../types/event'
import { useStore } from '../stores/settingStore'
import MapComponent from '../components/Map/MapComponent'
import { VITE_MAP_EVENT_API } from '../constants'
import Loading from '../components/Loading'

const Item = styled(Card)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4, 3),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  backgroundColor: '#fff',
  textAlign: 'center',
  color: 'black',
}))

const Event = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const [event, setEvent] = useState<SingleEvent>()
  const [showEvent, setShowEvent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showMore, setShowMore] = useState(true)
  const [isShowMap, setIsShowMap] = useState<boolean>(false)
  const { language } = useStore()
  const DEFAULT_TO = { latitude: 61.4941, longitude: 23.7792 }

  const [eventLocationData, setEventLocationData] = useState<EventLocationData>(DEFAULT_TO)

  const getEventTags = (event: EventObj) => {
    const tags = getTags(event, 2, language)
    return (
      <>
        {tags.map((tag) => (
          <EventTag key={tag} variant={tag}></EventTag>
        ))}
      </>
    )
  }
  const handleCommute = () => {
    setShowEvent(true)
    const eventLocation = event && event.locations ? event.locations[0].geoIndex : []
    const latitude = parseFloat(eventLocation[1])
    const longitude = parseFloat(eventLocation[0])
    setEventLocationData({ latitude, longitude })
    setIsShowMap(true)
    setShowMore(false)
  }

  useEffect(() => {
    fetchEventById()
  }, [])

  const fetchEventById = async () => {
    setIsLoading(true)
    const data = await axios.get(`${VITE_MAP_EVENT_API}?eventId=${id}`)
    setEvent(data.data.data[0])
    setIsLoading(false)
  }

  return (
    <Grid container className="event-container">
      <Grid item xs={12}>
        {isLoading ? (
          <Loading />
        ) : (
          <Item>
            <Typography component="div" variant="h1" className="event-name">
              {event ? event.name : ''}
            </Typography>
            {showMore && (
              <>
                <Typography component="div">
                  <ul style={{ listStyleType: 'none' }}>
                    {event &&
                      event.dates.map((date: { start: string | Date; end: string | Date }, index: Key) => (
                        <li key={`${date.start}-${index}`} className="list-of-dates">
                          <p>
                            {convertToReadableDate(date.start, t)} {convertToReadableTime(date.start)}
                          </p>
                        </li>
                      ))}
                  </ul>
                </Typography>
                {event && (
                  <Typography component="div" className="event-tag">
                    {getEventTags(event as unknown as EventObj)}
                  </Typography>
                )}
                {event && event.description !== '-' && <Box className="event-description">{event.description}</Box>}
                <Typography component="div">Address: {event ? event.locations[0]?.address : ''}</Typography>

                <Button className="lets-go-button" onClick={handleCommute}>
                  Let's Go
                </Button>
              </>
            )}
            {showEvent && <CommutingStops eventLocationData={eventLocationData} />}
            {isShowMap && (
              <Box component="div" className="event-map-container">
                <MapComponent eventLocationData={eventLocationData} />
              </Box>
            )}
          </Item>
        )}
      </Grid>
    </Grid>
  )
}
export default Event
