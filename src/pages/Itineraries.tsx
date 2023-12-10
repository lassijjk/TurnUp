import { Alert, Box, Button, Card, Grid, Modal, Snackbar, TextField, Typography } from '@mui/material'
import './Itineraries.css'
import { createItinerary, useGetItineraries, useGetUserData } from '../hooks/appSyncHooks'
import { useEffect, useState } from 'react'
import { VITE_MAP_EVENT_API } from '../constants'
import axios from 'axios'
import { SingleEvent } from '../types/event'
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined'
import EditIcon from '@mui/icons-material/Edit'
import { CreateItineraryMutation, Itinerary, ListItinerariesQuery } from '../types/graphqlAPI'
import { useNavigate } from 'react-router-dom'
import { convertToReadableTime } from '../utils/convertToReadableTime'
import { convertToReadableDate } from '../utils/convertToReadableDate'
import { t } from 'i18next'
import moment from 'moment'

const getUrgencyIndicator = (eventDate: string): string => {
  const momentEventDate = moment(eventDate)
  const currentDate = moment()
  const oneWeekLater = moment().add(1, 'week')
  const oneMonthLater = moment().add(1, 'month')

  switch (true) {
    case momentEventDate.isBefore(currentDate):
      return 'default'
    case momentEventDate.isBefore(oneWeekLater):
      return 'thisWeek'
    case momentEventDate.isBefore(oneMonthLater):
      return 'thisMonth'
    default:
      return 'inTheFuture'
  }
}

const getSelectedDates = (title: string, eventId: string, itineraries: ListItinerariesQuery | null) => {
  return itineraries?.listItineraries?.items
    .filter((item) => item?.title === title)
    .flatMap(
      (item) =>
        item?.events?.items?.flatMap((_item) => {
          const idMatches = _item?.eventId === eventId

          return _item?.dateTimes && idMatches ? _item?.dateTimes : []
        })
    )
    .flatMap((item) => item)
}

const getItineraryColor = (itinerary: [string, SingleEvent[]], itineraries: ListItinerariesQuery | null) => {
  const [title, events] = itinerary
  const _eventDates = events.map((event) => getSelectedDates(title, event.id, itineraries))
  const _getColors = _eventDates.flatMap((dt) => dt?.map((d) => getUrgencyIndicator(d?.start ?? '')))

  switch (true) {
    case _getColors.includes('thisWeek'):
      return 'thisWeek'
    case _getColors.includes('thisMonth'):
      return 'thisMonth'
    case _getColors.includes('inTheFuture'):
      return 'inTheFuture'
    default:
      return 'default'
  }
}

const Itineraries = () => {
  const [itinerary, setItinerary] = useState<{
    [key: string]: SingleEvent[]
  }>()
  const navigate = useNavigate()
  const itineraries = useGetItineraries()

  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  const [itineraryName, setItineraryName] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const userData = useGetUserData()

  const fetchEventById = async (id: string) => {
    const response = await axios.get(`${VITE_MAP_EVENT_API}?eventId=${id}`)

    return response.data
  }

  const getEventsById = async (_itineraries: Itinerary[] | null) => {
    if (!_itineraries) return

    const eventsByTitle = _itineraries.reduce(async (accumulator, item) => {
      if (!item?.events) return accumulator

      const title = item.title
      const ids = item.events.items.map((_item) => _item?.eventId).filter(Boolean)

      const events = await Promise.all(
        ids.map(async (_id) => {
          if (_id) {
            const response = await fetchEventById(_id)

            return response.data
          }
        })
      )

      const updatedAccumulator = await accumulator
      return {
        ...updatedAccumulator,
        [title]: events.filter((event) => event !== null).flat(),
      }
    }, Promise.resolve({}))

    return eventsByTitle
  }

  const _itineraries = itineraries?.listItineraries?.items
  useEffect(() => {
    if (!_itineraries) return

    const fetchData = async () => {
      try {
        const response = await getEventsById(_itineraries as Itinerary[])

        setItinerary((prevItinerary) => ({
          ...prevItinerary,
          ...response,
        }))
      } catch {
        console.log('HAS ERROR')
      }
    }

    void fetchData()
  }, [_itineraries])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(event.target.value)
  }

  const handleCreateItinerary = async () => {
    const userItem = userData?.userBySub?.items[0]
    const itineraryExisits = userItem?.itineraries?.items.find((item) => item?.title === itineraryName)
    if (itineraryExisits) {
      console.log('Already exists')
    } else {
      //Create an itinerary for current user with title: itineraryName
      ;(await createItinerary({
        title: itineraryName,
        userItinerariesId: userItem?.id,
      })) as CreateItineraryMutation

      setItinerary({
        ...itinerary,
        [itineraryName]: [],
      })
      setOpenAlert(true)

      setTimeout(() => {
        handleClose()
        setItineraryName('')
        setOpenAlert(false)
      }, 2000)
    }
  }
  const handleAlertClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
    handleClose()
  }

  const getIdByName = (title: string) => _itineraries?.find((it) => it?.title === title)?.id

  return (
    <Grid container className="grid-container">
      <Card className="card-wrapper">
        <Button className="btn-frame btn-back itinerary-back-btn" onClick={() => `${navigate('/')}`}>
          Back
        </Button>
        <Grid className="itinerary-header">
          <DirectionsBusFilledOutlinedIcon className="bus-icon" sx={{ fontSize: 64, color: '#3F3E3E' }} />

          <Typography variant="h5" style={{ lineHeight: '64px' }} className="header-contents">
            {`You have (${itinerary ? Object.keys(itinerary).length : 0}) upcoming itineraries.`}
          </Typography>

          <Button className="itinerary-btn header-contents create-btn" onClick={handleOpen}>
            Create new
          </Button>
        </Grid>

        {openModal && (
          <Modal open={openModal} onClose={handleClose}>
            <Box className="itinerary-modal-create">
              <TextField placeholder="Add itinerary name" value={itineraryName} onChange={handleInputChange} />
              <Button className="itinerary-btn" onClick={handleCreateItinerary}>
                Save
              </Button>
              <Typography sx={{ mt: 3 }}>Create new itinerary.</Typography>
              <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} sx={{ width: '100%' }} className="saved-alert">
                  Itinerary created successfully
                </Alert>
              </Snackbar>
            </Box>
          </Modal>
        )}

        {itinerary &&
          Object.entries(itinerary).map((_itinerary, index) => {
            const [title, events] = _itinerary
            return (
              <Grid key={`itinerary-${index}`} container className="single-itinerary-wrapper">
                <Card key={`itinerary-${index}`} className="single-itinerary" title={title}>
                  <div className={`single-itinerary-badge ${getItineraryColor(_itinerary, itineraries)}`} />

                  <div className="itinerary-details ">
                    <Typography variant="h6" className="itinerary-details itinerary-name">
                      {title}
                    </Typography>
                    {events.map((event, _index) => {
                      const date = getSelectedDates(title, event.id, itineraries)
                      return (
                        <Typography variant="h6" className="itinerary-event" key={`event-${_index}`}>
                          <div className="event-detail-wrapper">
                            <Typography className="event-names">{event.name}</Typography>
                            {date &&
                              date.map((dt, index) => {
                                return (
                                  <div key={`${dt} ${index}`} className="event-date-time">
                                    <Box>{dt?.start && convertToReadableDate(dt.start, t)}</Box>
                                    <Box className="event-time">
                                      {dt?.start && convertToReadableTime(dt.start)} -{' '}
                                      {dt?.end && convertToReadableTime(dt?.end)}
                                    </Box>
                                  </div>
                                )
                              })}
                          </div>
                        </Typography>
                      )
                    })}
                  </div>
                  <Typography className="itinerary-details edit-itinerary">
                    <Button
                      className="btn-frame btn-edit"
                      onClick={() => {
                        navigate(`${getIdByName(title)}`)
                      }}
                    >
                      {<EditIcon sx={{ fontSize: 15, padding: '2px' }} />}Edit
                    </Button>
                  </Typography>
                </Card>
              </Grid>
            )
          })}
        <div className="legend-wrapper">
          <div className="legend-item">
            <div className="legend default"></div>
            <Typography variant="caption" style={{ color: 'var(--dark-gray)' }}>
              Past/No Events
            </Typography>
          </div>
          <div className="legend-item">
            <div className="legend thisWeek"></div>
            <Typography variant="caption" style={{ color: 'var(--warm-red)' }}>
              This Week
            </Typography>
          </div>
          <div className="legend-item">
            <div className="legend thisMonth"></div>
            <Typography variant="caption" style={{ color: 'var(--light-blue)' }}>
              This Month
            </Typography>
          </div>
          <div className="legend-item">
            <div className="legend inTheFuture"></div>
            <Typography variant="caption" style={{ color: 'var(--amarillo-yellow)' }}>
              Future Events
            </Typography>
          </div>
        </div>
      </Card>
    </Grid>
  )
}

export default Itineraries
